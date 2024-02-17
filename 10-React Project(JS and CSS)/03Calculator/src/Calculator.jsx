// Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplayValue(eval(expression));
        setExpression('');
      } catch (error) {
        setDisplayValue('Error');
        setExpression('');
      }
    } else if (value === 'C') {
      setDisplayValue('0');
      setExpression('');
    } else {
      setExpression(expression + value);
      if (displayValue === '0' || displayValue === 'Error') {
        setDisplayValue(value);
      } else {
        setDisplayValue(displayValue + value);
      }
    }
  };

  return (
    <><div className='fde'>
         <center><h1>Calulator Using the Arithmetic Operations</h1></center> 
      </div><div className="calculator">

              <input type="text" className="display" value={displayValue} readOnly />
              <div className="buttons">
                  <button onClick={() => handleButtonClick('7')}>7</button>
                  <button onClick={() => handleButtonClick('8')}>8</button>
                  <button onClick={() => handleButtonClick('9')}>9</button>
                  <button onClick={() => handleButtonClick('+')}>+</button>
                  <button onClick={() => handleButtonClick('4')}>4</button>
                  <button onClick={() => handleButtonClick('5')}>5</button>
                  <button onClick={() => handleButtonClick('6')}>6</button>
                  <button onClick={() => handleButtonClick('-')}>-</button>
                  <button onClick={() => handleButtonClick('1')}>1</button>
                  <button onClick={() => handleButtonClick('2')}>2</button>
                  <button onClick={() => handleButtonClick('3')}>3</button>
                  <button onClick={() => handleButtonClick('*')}>*</button>
                  <button onClick={() => handleButtonClick('0')}>0</button>
                  <button onClick={() => handleButtonClick('.')}>.</button>
                  <button onClick={() => handleButtonClick('=')}>=</button>
                  <button onClick={() => handleButtonClick('/')}>/</button>
                  <button onClick={() => handleButtonClick('C')}>C</button>
              </div>
          </div></>
  );
};

export default Calculator;
