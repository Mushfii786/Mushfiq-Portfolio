import React from 'react';

export function Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="256" cy="256" r="248" fill="#050505" />
      <circle cx="256" cy="256" r="236" fill="#0B0B0E" stroke="#333338" strokeWidth="12" />
      <path d="M 136,138 L 256,288 L 376,138 L 376,374 L 256,224 L 136,374 Z" fill="#FFFFFF" />
    </svg>
  );
}

export default Logo;
