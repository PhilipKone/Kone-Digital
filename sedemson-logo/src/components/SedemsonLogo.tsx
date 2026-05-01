import React from 'react';

interface SedemsonLogoProps {
  variant?: 'icon' | 'stacked' | 'horizontal';
  theme?: 'gold' | 'dark' | 'light';
  size?: number;
  className?: string;
}

export const SedemsonLogo: React.FC<SedemsonLogoProps> = ({
  variant = 'horizontal',
  theme = 'gold',
  size = 200,
  className = ''
}) => {
  const textColor = theme === 'light' ? '#FFFFFF' : '#000000';
  const iconColor = theme === 'gold' ? 'url(#sedemson-gold-gradient)' : (theme === 'light' ? '#FFFFFF' : '#000000');

  const renderIcon = (scale = 1, translate = 'translate(0,0)') => (
    <g transform={`${translate} scale(${scale})`}>
      <path d="M 55 10 Q 85 10 85 45 Q 85 80 45 100 Q 65 80 65 45 Q 65 10 55 10 Z" fill={iconColor} />
      <path d="M 45 130 Q 15 130 15 95 Q 15 60 55 40 Q 35 60 35 95 Q 35 130 45 130 Z" fill={iconColor} />
    </g>
  );

  if (variant === 'icon') {
    return (
      <svg width={size} height={size * 1.4} viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="sedemson-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D4AF37" />
            <stop offset="50%" stop-color="#F1C40F" />
            <stop offset="100%" stop-color="#9A7B0C" />
          </linearGradient>
        </defs>
        {renderIcon(1, 'translate(0, 0)')}
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
          <linearGradient id="sedemson-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D4AF37" />
            <stop offset="50%" stop-color="#F1C40F" />
            <stop offset="100%" stop-color="#9A7B0C" />
          </linearGradient>
        </defs>
        {renderIcon(1, 'translate(150, 40)')}
        <text x="200" y="240" font-family="Inter, sans-serif" font-weight="900" font-size="48" fill={textColor} text-anchor="middle">SEDEMSON</text>
        <text x="200" y="275" font-family="Inter, sans-serif" font-weight="400" font-size="14" fill={textColor} text-anchor="middle" letter-spacing="4">STONE CRAFTSMANSHIP</text>
      </svg>
    );
  }

  // Default: horizontal
  return (
    <svg width={size * 3} height={size} viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="sedemson-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#D4AF37" />
          <stop offset="50%" stop-color="#F1C40F" />
          <stop offset="100%" stop-color="#9A7B0C" />
        </linearGradient>
      </defs>
      {renderIcon(1, 'translate(20, 5)')}
      <g transform="translate(140, 65)">
        <text x="0" y="0" font-family="Inter, sans-serif" font-weight="900" font-size="42" fill={textColor}>SEDEMSON</text>
        <text x="0" y="25" font-family="Inter, sans-serif" font-weight="400" font-size="12" fill={textColor} letter-spacing="3">STONE CRAFTSMANSHIP</text>
      </g>
    </svg>
  );
};
