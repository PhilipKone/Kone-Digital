const http=require('http'),fs=require('fs'),path=require('path'),{execSync}=require('child_process');
const MIME={'.html':'text/html;charset=utf-8','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp'};
const esc=(s='')=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
http.createServer((req,res)=>{
  if(req.method==='GET'&&req.url==='/'){res.writeHead(200,{'Content-Type':MIME['.html']});return res.end(fs.readFileSync(path.join(__dirname,'studio','index.html')))}
  if(req.method==='GET'&&req.url.startsWith('/preview/')){
    const rel=req.url.replace('/preview/','').split('?')[0];
    const t=path.join(__dirname,'public',rel.endsWith('/')||!path.extname(rel)?path.join(rel,'index.html'):rel);
    if(fs.existsSync(t)){res.writeHead(200,{'Content-Type':MIME[path.extname(t).toLowerCase()]||'application/octet-stream'});return res.end(fs.readFileSync(t))}
    res.writeHead(404);return res.end('Not found');
  }
  if(req.method==='GET'&&req.url==='/api/sites'){
    const p=path.join(__dirname,'public');
    const s=fs.readdirSync(p,{withFileTypes:true}).filter(d=>d.isDirectory()&&fs.existsSync(path.join(p,d.name,'index.html'))).map(d=>{
      const m=fs.readFileSync(path.join(p,d.name,'index.html'),'utf8').match(/<title>(.*?)<\/title>/i);
      return{slug:d.name,title:m?m[1]:d.name,liveUrl:`https://digital.codkon.com/${d.name}/`};
    });
    res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify(s));
  }
  if(req.method==='POST'&&req.url==='/api/generate'){
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
        if(d.type!=='org'&&Array.isArray(d.items)&&d.items.length){
          const cards=d.items.map((it,i)=>{
            const idx=String(i+1).padStart(2,'0');let thumb=`Item ${idx} (4:5 Photo)`;
            const m=it.imgData&&it.imgData.match(/^data:image\/(\w+);base64,(.+)$/);
            if(m){const fn=`item-${idx}.${m[1]==='jpeg'?'jpg':m[1]}`;fs.writeFileSync(path.join(out,fn),Buffer.from(m[2],'base64'));thumb=`<img src="./${fn}" alt="${esc(it.name)}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"/>`}
            const msg=encodeURIComponent(`Hello ${d.name}, I want to order ${it.name} (${it.price}).`);
            return `<article class="item"><div class="thumb" style="overflow:hidden">${thumb}</div><div class="ib"><div><h3>${esc(it.name)}</h3><p style="color:var(--muted);font-size:.84rem">${esc(it.desc)}</p></div><div class="pr"><span class="price">${esc(it.price)}</span><a class="ol" href="https://wa.me/${esc(d.wa)}?text=${msg}" target="_blank">Order &rarr;</a></div></div></article>`;
          }).join('\n');
          html=html.replace(/<section id="catalog" class="grid">[\s\S]*?<\/section>/,`<section id="catalog" class="grid">\n${cards}\n</section>`);
        }
        fs.writeFileSync(path.join(out,'index.html'),html,'utf8');
        let pub=false;
        if(d.publish){
          execSync(`git add public/${slug} && git commit -m "feat(client): deploy ${slug}"`,{cwd:__dirname});
          try{execSync('git push',{cwd:__dirname})}catch{execSync('git -c "http.curloptResolve=github.com:443:140.82.121.4" push',{cwd:__dirname})}
          pub=true;
        }
        res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({ok:true,slug,published:pub,liveUrl:`https://digital.codkon.com/${slug}/`}));
      }catch(e){res.writeHead(400,{'Content-Type':'application/json'});res.end(JSON.stringify({ok:false,error:e.message}))}
    });return;
  }
  res.writeHead(404);res.end('Not found');
}).listen(4321,()=>console.log('Studio ready at http://localhost:4321'));
