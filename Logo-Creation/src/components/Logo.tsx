export function Logo({ 
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
      
      {/* Left bracket - thicker curved parenthesis */}
      <path
        d="M 60 55 Q 45 100 60 145"
        stroke={variant !== "none" ? "white" : "currentColor"}
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Right bracket - thicker curved parenthesis */}
      <path
        d="M 140 55 Q 155 100 140 145"
        stroke={variant !== "none" ? "white" : "currentColor"}
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Water droplet - teardrop with pointed top and indented bottom */}
      <path
        d="M 100 55 C 100 55 128 82 128 108 C 128 125 115 138 100 142 C 85 138 72 125 72 108 C 72 82 100 55 100 55 Z"
        fill={variant !== "none" ? "white" : "currentColor"}
      />
      
      {/* White crescent notch at bottom right - curved highlight */}
      <path
        d="M 102 132 Q 115 130 120 120 Q 116 128 108 132 Q 105 133 102 132 Z"
        fill={variant !== "none" ? "rgba(0,0,0,0.15)" : "white"}
      />
    </svg>
  );
}