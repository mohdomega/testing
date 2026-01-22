import React from 'react';

const RightArrowSvg = ({ width = '24', height = '24', color = 'currentColor', className = 'text-white' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 12H21" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M13 4L21 12L13 20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrowSvg;
