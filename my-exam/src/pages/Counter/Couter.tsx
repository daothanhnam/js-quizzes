import { useState } from "react";

function Counter() {
  const [currentNumber, setCurrentNumber] = useState(10);
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setCurrentNumber((prevNumber) => prevNumber + 5);
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Current Number: {currentNumber}</h1>
      <p>Click Count: {clickCount}</p>
      <button onClick={handleButtonClick}>Click</button>
    </div>
  );
}
export default Counter;
