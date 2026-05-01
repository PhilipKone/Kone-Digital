export function CShapeLogo({ 
  className = "", 
  size = 200,
  gradient = "blue"
}: { 
  className?: string; 
  size?: number;
  gradient?: "blue" | "purple" | "green" | "orange" | "black";
}) {
  // Define gradient colors based on the gradient prop
  const gradients = {
    blue: { start: "#7B9FB8", end: "#2C4A5E" },
    purple: { start: "#B18FD8", end: "#5A3A7C" },
    green: { start: "#8FD8A8", end: "#3A7C52" },
    orange: { start: "#F5A962", end: "#C55A11" },
    black: { start: "#6B7280", end: "#111827" }
  };

  const colors = gradients[gradient];
  const gradientId = `c-gradient-${gradient}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradient for the C shape */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.start} />
          <stop offset="100%" stopColor={colors.end} />
        </linearGradient>
        
        {/* Shadow filter for 3D effect */}
        <filter id={`shadow-${gradient}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="2" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* C shape with rounded stroke caps */}
      <g filter={`url(#shadow-${gradient})`}>
        <path
          d="M 150 40 A 60 60 0 0 0 40 100 A 60 60 0 0 0 150 160"
          stroke={`url(#${gradientId})`}
          strokeWidth="40"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      
      {/* Subtle highlight on top for 3D effect */}
      <path
        d="M 145 45 A 55 55 0 0 0 50 95"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}