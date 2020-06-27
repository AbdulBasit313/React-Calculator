import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [item, setItem] = useState([])
  const [result, setResult] = useState(null)

  const operators = /[+-/X]/g

  const handleInput = (e) => {
    const value = e.target.value

    if (item.length === 0 && (value.match(operators))) {
      console.log('length==>', item)
      setItem([])
    }
    else {
      setItem([...item, value])
    }
  }

  const handleResult = () => {
    let left = ''
    let right = ''
    let rightActive = false
    let operator = ''

    for (let i of item) {
      if (i.match(operators)) {
        operator = i
        rightActive = true
        continue
      }

      if (rightActive === false) {
        left += i
      }
      if (rightActive === true) {
        right += i
      }
    }

    console.log('left ==>', left)
    console.log('right ==>', right)

    let leftSide = parseFloat(left)
    let rightSide = parseFloat(right)

    if (operator === '+') {
      setResult(leftSide + rightSide)
    }
    if (operator === '-') {
      setResult(leftSide - rightSide)
    }
    if (operator === 'X') {
      setResult(leftSide * rightSide)
    }
    if (operator === '/') {
      setResult(leftSide / rightSide)
    }
  }

  const handleLastRemove = () => {
    let remove = item.slice(0, item.length - 1)

    setItem(remove)
  }

  const handleReset = () => {
    setItem([])
    setResult(0)
  }

  console.log('item ==>', item)

  return (
    <div className="app">
      <h1>React Calculator</h1>
      <div className='frame'>
        <div className='display-container'>
          <p>{item.length > 0 ? item : 0}</p>
          <p>{result}</p>
        </div>
        <div className='buttons-container row'>
          <div className='column'>
            <button onClick={handleReset}>C</button>
            <button value='7' onClick={(e) => handleInput(e)}>7</button>
            <button value='4' onClick={(e) => handleInput(e)}>4</button>
            <button value='1' onClick={(e) => handleInput(e)}>1</button>
            <button value='0' onClick={(e) => handleInput(e)}>0</button>
          </div>
          <div className='column'>
            <button value='remove' onClick={handleLastRemove}>&larr;</button>
            <button value='8' onClick={(e) => handleInput(e)}>8</button>
            <button value='5' onClick={(e) => handleInput(e)}>5</button>
            <button value='2' onClick={(e) => handleInput(e)}>2</button>
            <button value='.' onClick={(e) => handleInput(e)}>.</button>
          </div>
          <div className='column'>
            <button>%</button>
            <button value='9' onClick={(e) => handleInput(e)}>9</button>
            <button value='6' onClick={(e) => handleInput(e)}>6</button>
            <button value='3' onClick={(e) => handleInput(e)}>3</button>
            <button value='+' onClick={(e) => handleInput(e)}>+</button>
          </div>
          <div className='column'>
            <button value='/' onClick={(e) => handleInput(e)}>/</button>
            <button value='X' onClick={(e) => handleInput(e)}>X</button>
            <button value='-' onClick={(e) => handleInput(e)}>-</button>
            <button onClick={handleResult} className='height_118'>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
