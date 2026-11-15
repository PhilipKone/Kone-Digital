const http=require('http'),fs=require('fs'),path=require('path'),{execSync}=require('child_process');
const MIME={'.html':'text/html;charset=utf-8','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp'};
const esc=(s='')=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const unesc=(s='')=>String(s).replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#8373;/g,'₵');
const gitPush=()=>{try{execSync('git push',{cwd:__dirname})}catch{execSync('git -c "http.curloptResolve=github.com:443:140.82.121.4" push',{cwd:__dirname})}};
const trashDir=path.join(__dirname,'.trash');

function readSite(slug){
  const dir=path.join(__dirname,'public',slug),jf=path.join(dir,'site.json');
  if(fs.existsSync(jf))return JSON.parse(fs.readFileSync(jf,'utf8'));
  const html=fs.readFileSync(path.join(dir,'index.html'),'utf8');
  const g=(re,d='')=>(html.match(re)||[])[1]||d;
  const items=[...html.matchAll(/<article class="item">([\s\S]*?)<\/article>/g)].map(m=>{
    const b=m[1],im=b.match(/<img[^>]+src="([^"]+)"/i);
    return{name:unesc((b.match(/<h3>([\s\S]*?)<\/h3>/i)||[])[1]||''),price:unesc((b.match(/class="price">([\s\S]*?)<\/span>/i)||[])[1]||''),desc:unesc((b.match(/<p[^>]*>([\s\S]*?)<\/p>/i)||[])[1]||''),imgFile:im?im[1]:''};
  });
  return{type:html.includes('id="catalog"')?'catalog':'org',name:unesc(g(/class="brand"[^>]*>([\s\S]*?)<\/a>/i,slug)),slug,accent:g(/--accent:\s*(#[0-9a-fA-F]{3,6})/i,'#F59E0B'),tagline:unesc(g(/<h1>([\s\S]*?)<\/h1>/i)),desc:unesc(g(/name="description"\s+content="([^"]*)"/i)),wa:g(/wa\.me\/(\d+)/i,'233551993820'),phone:unesc(g(/href="tel:[^"]*">Call\s+([^<]+)<\/a>/i,'+233 55 199 3820')),items};
}
http.createServer((req,res)=>{
  const u=new URL(req.url,'http://localhost');
  if(req.method==='GET'&&u.pathname==='/'){res.writeHead(200,{'Content-Type':MIME['.html']});return res.end(fs.readFileSync(path.join(__dirname,'studio','index.html')))}
  if(req.method==='GET'&&u.pathname.startsWith('/preview/')){
    const rel=u.pathname.replace('/preview/','');
    const t=path.join(__dirname,'public',rel.endsWith('/')||!path.extname(rel)?path.join(rel,'index.html'):rel);
    if(fs.existsSync(t)){res.writeHead(200,{'Content-Type':MIME[path.extname(t).toLowerCase()]||'application/octet-stream'});return res.end(fs.readFileSync(t))}
    res.writeHead(404);return res.end('Not found');
  }
  if(req.method==='GET'&&u.pathname==='/api/site'){
    try{const s=String(u.searchParams.get('slug')||'').replace(/[^a-z0-9-]/g,'');res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify({ok:true,site:readSite(s)}))}
    catch(e){res.writeHead(400,{'Content-Type':'application/json'});return res.end(JSON.stringify({ok:false,error:e.message}))}
  }
  if(req.method==='GET'&&u.pathname==='/api/sites'){
    const list=(b)=>fs.existsSync(b)?fs.readdirSync(b,{withFileTypes:true}).filter(d=>d.isDirectory()&&fs.existsSync(path.join(b,d.name,'index.html'))).map(d=>{
      const m=fs.readFileSync(path.join(b,d.name,'index.html'),'utf8').match(/<title>(.*?)<\/title>/i);
      return{slug:d.name,title:m?m[1]:d.name,liveUrl:`https://digital.codkon.com/${d.name}/`};
    }):[];
    res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify({active:list(path.join(__dirname,'public')),trash:list(trashDir)}));
  }
  if(req.method==='POST'&&(u.pathname==='/api/delete'||u.pathname==='/api/restore')){
    let b='';req.on('data',c=>b+=c);req.on('end',()=>{
      try{
        const slug=String(JSON.parse(b).slug||'').toLowerCase().replace(/[^a-z0-9-]+/g,'');
        if(!slug)throw new Error('Invalid slug');
        if(u.pathname==='/api/restore'){
          const src=path.join(trashDir,slug),dest=path.join(__dirname,'public',slug);
          if(!fs.existsSync(src))throw new Error('Not in trash');
          fs.cpSync(src,dest,{recursive:true});fs.rmSync(src,{recursive:true,force:true});
          res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify({ok:true,slug}));
        }
        const target=path.join(__dirname,'public',slug);
        if(fs.existsSync(target)){fs.mkdirSync(trashDir,{recursive:true});const dest=path.join(trashDir,slug);if(fs.existsSync(dest))fs.rmSync(dest,{recursive:true,force:true});fs.cpSync(target,dest,{recursive:true});fs.rmSync(target,{recursive:true,force:true})}
        execSync(`git rm -rf --ignore-unmatch public/${slug}`,{cwd:__dirname});
        let unpub=false;
        if(execSync('git status --porcelain',{cwd:__dirname}).toString().trim()){execSync(`git commit -m "chore(client): move ${slug} to trash"`,{cwd:__dirname});gitPush();unpub=true}
        res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({ok:true,slug,unpublished:unpub}));
      }catch(e){res.writeHead(400,{'Content-Type':'application/json'});res.end(JSON.stringify({ok:false,error:e.message}))}
    });return;
  }
  if(req.method==='POST'&&u.pathname==='/api/generate'){
    let b='';req.on('data',c=>b+=c);req.on('end',()=>{
      try{
        const d=JSON.parse(b),slug=String(d.slug||'').toLowerCase().replace(/[^a-z0-9-]+/g,'-').replace(/^-|-$/g,'');
        if(!slug)throw new Error('Invalid slug');
        const out=path.join(__dirname,'public',slug);fs.mkdirSync(out,{recursive:true});
        let html=fs.readFileSync(path.join(__dirname,'templates',d.type==='org'?'organization.html':'catalog.html'),'utf8')
          .replace(/\{\{BUSINESS_NAME\}\}/g,esc(d.name)).replace(/\{\{BUSINESS_NAME_ENC\}\}/g,encodeURIComponent(d.name))
          .replace(/\{\{SLUG\}\}/g,slug).replace(/\{\{TAGLINE\}\}/g,esc(d.tagline)).replace(/\{\{DESCRIPTION\}\}/g,esc(d.desc))
          .replace(/\{\{WA_NUMBER\}\}/g,esc(d.wa)).replace(/\{\{DISPLAY_PHONE\}\}/g,esc(d.phone))
          .replace(/\{\{ACCENT\}\}/g,esc(d.accent||'#F59E0B')).replace(/\{\{YEAR\}\}/g,String(new Date().getFullYear()));
        const savedItems=[];
        if(d.type!=='org'&&Array.isArray(d.items)&&d.items.length){
          const cards=d.items.map((it,i)=>{
            const idx=String(i+1).padStart(2,'0');let thumb=`Item ${idx} (4:5 Photo)`,imgFile=it.existingImg||'';
            const m=it.imgData&&it.imgData.match(/^data:image\/(\w+);base64,(.+)$/);
            if(m){const fn=`item-${idx}.${m[1]==='jpeg'?'jpg':m[1]}`;fs.writeFileSync(path.join(out,fn),Buffer.from(m[2],'base64'));imgFile=`./${fn}`}
            if(imgFile)thumb=`<img src="${esc(imgFile)}" alt="${esc(it.name)}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"/>`;
            savedItems.push({name:it.name,price:it.price,desc:it.desc,imgFile});
            const msg=encodeURIComponent(`Hello ${d.name}, I want to order ${it.name} (${it.price}).`);
            return `<article class="item"><div class="thumb" style="overflow:hidden">${thumb}</div><div class="ib"><div><h3>${esc(it.name)}</h3><p style="color:var(--muted);font-size:.84rem">${esc(it.desc)}</p></div><div class="pr"><span class="price">${esc(it.price)}</span><a class="ol" href="https://wa.me/${esc(d.wa)}?text=${msg}" target="_blank">Order &rarr;</a></div></div></article>`;
          }).join('\n');
          html=html.replace(/<section id="catalog" class="grid">[\s\S]*?<\/section>/,`<section id="catalog" class="grid">\n${cards}\n</section>`);
        }
        fs.writeFileSync(path.join(out,'index.html'),html,'utf8');
        fs.writeFileSync(path.join(out,'site.json'),JSON.stringify({type:d.type,name:d.name,slug,accent:d.accent,tagline:d.tagline,desc:d.desc,wa:d.wa,phone:d.phone,items:savedItems},null,2),'utf8');
        let pub=false;
        if(d.publish){execSync(`git add public/${slug} && git commit -m "feat(client): deploy ${slug}"`,{cwd:__dirname});gitPush();pub=true}
        res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({ok:true,slug,published:pub,liveUrl:`https://digital.codkon.com/${slug}/`}));
      }catch(e){res.writeHead(400,{'Content-Type':'application/json'});res.end(JSON.stringify({ok:false,error:e.message}))}
    });return;
  }
  res.writeHead(404);res.end('Not found');
}).listen(4321,()=>console.log('Studio ready at http://localhost:4321'));
