import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function handleOperation(e, operation) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (isNaN(inputValue)) {
      alert("Please enter a valid number");
      return;
    }

    setResult((prevResult) => {
      switch (operation) {
        case "add":
          return prevResult + inputValue;
        case "subtract":
          return prevResult - inputValue;
        case "multiply":
          return prevResult * inputValue;
        case "divide":
          if (inputValue === 0) {
            alert("Division by zero is not allowed");
            return prevResult;
          }
          return prevResult / inputValue;
        default:
          return prevResult;
      }
    });
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          aria-label="Type a number"
        />
        <button onClick={(e) => handleOperation(e, "add")}>Add</button>
        <button onClick={(e) => handleOperation(e, "subtract")}>
          Subtract
        </button>
        <button onClick={(e) => handleOperation(e, "multiply")}>
          Multiply
        </button>
        <button onClick={(e) => handleOperation(e, "divide")}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
