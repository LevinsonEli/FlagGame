import React from 'react';

const StyledButton = ({text, onClick, type}) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    className="guess"
  >
    {text}
  </button>
);

export default StyledButton;
