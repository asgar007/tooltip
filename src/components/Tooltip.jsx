import React from 'react';
import './Tooltip.css';

const Tooltip = ({ children }) => {
  return (
    <div className='name'>{children}</div>
  );
};

export default Tooltip;

// const mystyle = {
//     visibility: hidden,
//     backgroundColor: "#333",
//     color: "#fff",
//     textAlign: center,
//     padding: "5px",
//     borderRadius: "5px",
//     position: absolute,
//     z-index: 1,
//     bottom: 125%,
//     left: 50%,
//     transform: translateX(-50%),
//     opacity: 0,
//     transition: opacity 0.3s, color 0.3s, /* Add 'color' transition */
// }