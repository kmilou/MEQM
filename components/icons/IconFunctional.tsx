import React from 'react';

const IconFunctional: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l3.375 3.375L12 21l4.875-4.125 3.375-3.375M3.75 13.5V6c0-1.657 1.343-3 3-3h9c1.657 0 3 1.343 3 3v7.5" />
    </svg>
);

export default IconFunctional;