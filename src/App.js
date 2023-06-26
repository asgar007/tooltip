import React, { useState } from 'react';
import Tooltip from './components/Tooltip';
import './App.css'


const App = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="App">
      <h1>Tooltip Example</h1>
      <button className='glow-on-hover'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover me!
      </button>
      <div className='tooltip-container'>
          {showTooltip && (<Tooltip position="bottom"  children = "Tooltip content" ></Tooltip>)}
      </div>
    </div>
  );
};

export default App;
