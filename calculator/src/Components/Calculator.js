import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  // State variables
  const [expression, setExpression] = useState('');
  const [memory, setMemory] = useState(0);

  // Event handler for button click
  const handleButtonClick = (e) => {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
      let result;
      try {
        // Add parentheses and evaluate the expression with sin, cos, tan, square root, log, ln, pi, factorial, cube, and square
        result = eval(
          addParentheses(expression)
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/√/g, 'Math.sqrt')
            .replace(/log/g, 'Math.log10')
            .replace(/ln/g, 'Math.log')
            .replace(/π/g, 'Math.PI*')
            .replace(/x!/g, 'factorial')
            .replace(/x3/g, 'cube')
            .replace(/x2/g, 'square')
        );
      } catch (error) {
        console.error('Error:', error);
        result = 'Error';
      }

      setExpression(String(result));
    } else if (buttonValue === 'C') {
      setExpression('');
    } else if (buttonValue === 'M+') {
      setMemory((prevMemory) => prevMemory + parseFloat(expression));
      setExpression('');
    } else if (buttonValue === '^') {
      setExpression((prevExpression) => prevExpression + '**');
    } else if (buttonValue === 'sin' || buttonValue === 'cos' || buttonValue === 'tan') {
      setExpression((prevExpression) => prevExpression + buttonValue + '(');
    } else if (buttonValue === '√') {
      setExpression((prevExpression) => prevExpression + '√(');
    } else if (buttonValue === 'log') {
      setExpression((prevExpression) => prevExpression + 'log(');
    } else if (buttonValue === 'ln') {
      setExpression((prevExpression) => prevExpression + 'ln(');
    } else if (buttonValue === 'x!') {
      setExpression((prevExpression) => prevExpression + 'factorial(');
    } else if (buttonValue === 'x<sup>3</sup>') {
      setExpression((prevExpression) => prevExpression + 'cube(');
    } else if (buttonValue === 'x<sup>2</sup>') {
      setExpression((prevExpression) => prevExpression + 'square(');
    } else if (buttonValue === 'π') {
      setExpression((prevExpression) => prevExpression + 'π');
    } else {
      setExpression((prevExpression) => prevExpression + buttonValue);
    }
  };

  // Helper function to add parentheses
  function addParentheses(expression) {
    let parenthesesCount = 0;

    for (let i = 0; i < expression.length; i++) {
      if (expression[i] === '(') {
        parenthesesCount++;
      } else if (expression[i] === ')') {
        parenthesesCount--;
      }
    }

    if (parenthesesCount > 0) {
      expression += ')'.repeat(parenthesesCount);
    }

    return expression;
  }

  // Factorial function
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  // Cube function
  function cube(x) {
    return Math.pow(x, 3);
  }

  // Square function
  function square(x) {
    return Math.pow(x, 2);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <input type="text" name="value" id="value" value={expression} readOnly />
        </div>
        <div className="row">
          <button className="btn top" onClick={handleButtonClick}>C</button>
          <button className="btn top" onClick={handleButtonClick}>%</button>
          <button className="btn top" onClick={handleButtonClick}>^</button>
          <button className="btn left" onClick={handleButtonClick}>M+</button>
        </div>
        <div className="row">
          <button className="btn top" onClick={handleButtonClick}>sin</button>
          <button className="btn top" onClick={handleButtonClick}>cos</button>
          <button className="btn top" onClick={handleButtonClick}>tan</button>
          <button className="btn left" onClick={handleButtonClick}>√</button>
        </div>
        <div className="row">
          <button className="btn top" onClick={handleButtonClick}>log</button>
          <button className="btn top" onClick={handleButtonClick}>ln</button>
          <button className="btn top" onClick={handleButtonClick}>π</button>
          <button className="btn left" onClick={handleButtonClick}>x!</button>
        </div>
        <div className="row">
          <button className="btn top" onClick={handleButtonClick}>
            x<sup>3</sup>
          </button>
          <button className="btn top" onClick={handleButtonClick}>
            x<sup>2</sup>
          </button>
          <button className="btn top" onClick={handleButtonClick}>(</button>
          <button className="btn left" onClick={handleButtonClick}>)</button>
        </div>
        <div className="row">
          <button className="btn" onClick={handleButtonClick}>7</button>
          <button className="btn" onClick={handleButtonClick}>8</button>
          <button className="btn" onClick={handleButtonClick}>9</button>
          <button className="btn left" onClick={handleButtonClick}>*</button>
        </div>
        <div className="row">
          <button className="btn" onClick={handleButtonClick}>4</button>
          <button className="btn" onClick={handleButtonClick}>5</button>
          <button className="btn" onClick={handleButtonClick}>6</button>
          <button className="btn left" onClick={handleButtonClick}>/</button>
        </div>
        <div className="row">
          <button className="btn" onClick={handleButtonClick}>1</button>
          <button className="btn" onClick={handleButtonClick}>2</button>
          <button className="btn" onClick={handleButtonClick}>3</button>
          <button className="btn left" onClick={handleButtonClick}>+</button>
        </div>
        <div className="row">
          <button className="btn" onClick={handleButtonClick}>0</button>
          <button className="btn" onClick={handleButtonClick}>.</button>
          <button className="btn left" onClick={handleButtonClick}>=</button>
          <button className="btn left" onClick={handleButtonClick}>-</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
