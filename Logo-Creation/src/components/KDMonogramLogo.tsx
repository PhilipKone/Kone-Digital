export function KDMonogramLogo({ 
  className = "", 
  size = 200,
  glow = true
}: { 
  className?: string; 
  size?: number;
  glow?: boolean;
}) {
  const neonCyan = "#00FFFF";
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={glow ? { filter: `drop-shadow(0px 0px 8px rgba(0, 255, 255, 0.6))` } : undefined}
    >
      {/* Outer Hexagon (Digital/Tech aesthetic) */}
      <polygon 
        points="100,10 180,50 180,150 100,190 20,150 20,50" 
        stroke={neonCyan} 
        strokeWidth="6" 
        fill="#090B10" 
      />
      
      {/* The Letter 'K' */}
      <path
        d="M 60 60 L 60 140 M 60 100 L 95 60 M 75 80 L 100 140"
        stroke={neonCyan}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* The Letter 'D' */}
      <path
        d="M 115 60 L 115 140 C 165 140 165 60 115 60 Z"
        stroke={neonCyan}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
