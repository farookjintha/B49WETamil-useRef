import { useState } from "react";

const StateUpdate = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  console.log("Rendering(State)....");
  return (
    <div>
      <h2>Updating State</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default StateUpdate;
