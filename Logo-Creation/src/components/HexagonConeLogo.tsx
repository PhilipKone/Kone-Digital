export function HexagonConeLogo({ 
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
      
      {/* Ecosystem Cone/Teardrop shape in the center */}
      <path
        d="M 100 55 C 100 55 120 75 120 95 C 120 108 111 118 100 122 C 89 118 80 108 80 95 C 80 75 100 55 100 55 Z"
        fill={neonCyan}
        transform="translate(0, 5) scale(1.1)"
        transform-origin="100 100"
      />
    </svg>
  );
}
