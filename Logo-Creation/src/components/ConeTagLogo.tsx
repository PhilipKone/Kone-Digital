export function ConeTagLogo({ 
  className = "", 
  size = 200,
  variant = "none"
}: { 
  className?: string; 
  size?: number;
  variant?: "none" | "circle" | "rounded-square";
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Container backgrounds */}
      {variant === "circle" && (
        <circle cx="100" cy="100" r="95" fill="currentColor" />
      )}
      {variant === "rounded-square" && (
        <rect x="5" y="5" width="190" height="190" rx="40" fill="currentColor" />
      )}
      
      {/* Left angle bracket < (opening tag) */}
      <path
        d="M 70 75 L 45 100 M 70 125 L 45 100"
        stroke={variant !== "none" ? "white" : "currentColor"}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Right angle bracket > (closing tag) */}
      <path
        d="M 130 75 L 155 100 M 130 125 L 155 100"
        stroke={variant !== "none" ? "white" : "currentColor"}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Cone/teardrop shape in the center - pointing up */}
      <path
        d="M 100 55 C 100 55 120 75 120 95 C 120 108 111 118 100 122 C 89 118 80 108 80 95 C 80 75 100 55 100 55 Z"
        fill={variant !== "none" ? "white" : "currentColor"}
      />
      
      {/* Highlight on the cone for glossy effect */}
      <path
        d="M 102 110 Q 112 108 115 100 Q 112 106 105 110 Q 103 111 102 110 Z"
        fill={variant !== "none" ? "rgba(0,0,0,0.15)" : "white"}
      />
    </svg>
  );
}