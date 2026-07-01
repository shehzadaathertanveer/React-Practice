import React, { useEffect } from 'react';

const ColorChange = ({ color }) => {
  useEffect(() => {
    // 1. Grab the root element safely inside the effect
    const rootElement = document.getElementById('root');
    
    if (rootElement && color) {
      // 2. Directly apply the color prop as the background color
      rootElement.style.backgroundColor = color;
    }
    
    // Optional: Clean up the color when the component unmounts
    return () => {
      if (rootElement) rootElement.style.backgroundColor = '';
    };
  }, [color]); // 3. This effect runs whenever the 'color' prop changes

  // A React component must return JSX, even if it's just null (renders nothing)
  return null; 
};

export default ColorChange;