import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator = () => {
  const [expression, setExpression] = useState(""); // To store input
  const [result, setResult] = useState(null); // To store calculated result

  // Handle button press
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(expression)); // Calculate result
      } catch {
        setResult("Error"); // Handle invalid input
      }
    } else if (value === "C") {
      setExpression("");
      setResult(null);
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
