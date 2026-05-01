export function NeonConeLogo({ 
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
      {/* Dark premium circular background */}
      <circle cx="100" cy="100" r="95" fill="#090B10" stroke={neonCyan} strokeWidth="2" />
      
      {/* Left angle bracket < (opening tag) */}
      <path
        d="M 70 75 L 45 100 M 70 125 L 45 100"
        stroke={neonCyan}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Right angle bracket > (closing tag) */}
      <path
        d="M 130 75 L 155 100 M 130 125 L 155 100"
        stroke={neonCyan}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Cone/teardrop shape in the center - pointing up */}
      <path
        d="M 100 55 C 100 55 120 75 120 95 C 120 108 111 118 100 122 C 89 118 80 108 80 95 C 80 75 100 55 100 55 Z"
        fill={neonCyan}
      />
    </svg>
  );
}
