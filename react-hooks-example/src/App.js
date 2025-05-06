import React, { useState, useEffect } from 'react';

function App() {
  // useState hook for managing count state
  const [count, setCount] = useState(0);

  // useEffect hook for side-effects (runs after every render)
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Only runs when `count` changes

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>React Hooks Example</h1>
      <p>Current count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default App;
