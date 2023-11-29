import React from 'react';
import '../styles/button.css';

function Button({ text, isButtonClick, click }) {
  return(
    <button className={isButtonClick ? 'button-click' : 'button-restart'} onClick={click}>
      {text}
    </button>
  );
}

export default Button;
