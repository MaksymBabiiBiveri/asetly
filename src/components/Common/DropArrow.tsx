import React, { memo } from 'react';

interface DropArrowProps {
  color: 'white' | 'blue';
}

const DropArrow: React.FC<DropArrowProps> = ({ color }) => {
  const colorArrow = color === 'white' ? '#fff' : '#374957';

  return (
    <svg
      width="13"
      height="7"
      viewBox="0 0 13 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 6L1.5 1"
        stroke={colorArrow}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 6L11.5 1"
        stroke={colorArrow}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default memo(DropArrow);
