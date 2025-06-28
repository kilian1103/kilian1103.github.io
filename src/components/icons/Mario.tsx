import React from 'react';

export const Mario: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className="w-8 h-8"
    style={{ imageRendering: 'pixelated' }}
  >
    <g fill="#FF0000">
      <rect x="5" y="1" width="6" height="1" />
      <rect x="4" y="2" width="8" height="1" />
      <rect x="3" y="3" width="10" height="1" />
      <rect x="3" y="4" width="2" height="1" />
      <rect x="8" y="4" width="2" height="1" />
    </g>
    <g fill="#FFC0CB">
      <rect x="5" y="4" width="3" height="1" />
      <rect x="4" y="5" width="8" height="1" />
      <rect x="3" y="6" width="10" height="1" />
      <rect x="2" y="7" width="12" height="1" />
      <rect x="2" y="8" width="3" height="1" />
      <rect x="11" y="8" width="3" height="1" />
    </g>
    <g fill="#0000FF">
      <rect x="5" y="8" width="6" height="1" />
      <rect x="4" y="9" width="8" height="1" />
      <rect x="3" y="10" width="3" height="1" />
      <rect x="10" y="10" width="3" height="1" />
      <rect x="2" y="11" width="3" height="1" />
      <rect x="11" y="11" width="3" height="1" />
    </g>
    <g fill="#FFFF00">
      <rect x="5" y="10" width="1" height="1" />
      <rect x="10" y="10" width="1" height="1" />
    </g>
    <g fill="#800000">
      <rect x="5" y="12" width="2" height="1" />
      <rect x="9" y="12" width="2" height="1" />
      <rect x="4" y="13" width="2" height="1" />
      <rect x="10" y="13" width="2" height="1" />
    </g>
  </svg>
);
