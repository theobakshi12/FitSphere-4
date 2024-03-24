import React from 'react';
import './CircularButton.css'; 

function CircularButton({ className, style, onClick }) {
  const buttonClass = `circular-button ${className}`;
  return (
    <button 
      type="button" 
      className={`circular-button ${className}`} 
      style={style} 
      onClick={onClick} 
    >
    </button>
  );
}

export default CircularButton;