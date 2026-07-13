
// Day 14 - React Components & Props

/*
import React from "react";
import User from "./assets/components/User";
import Button from "./assets/components/Button";
import "./App.css";

function App() {
  const name = "Darshana";
  const surname = "Bhandari";

  return (
    <div className="app">
      <h1>My First React App</h1>

      <User name={name} surname={surname} />

      <Button />
    </div>
  );
}

export default App;
*/


// Day 15 - React Hooks

// Counter Example

/*
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  function increase() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increment</button>
    </>
  );
};

export default Counter;
*/


// Stopwatch Example

import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function
    return () => clearInterval(timer);
  }, [running]);

  return (
    <>
      <h1>{seconds}</h1>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
    </>
  );
};

export default Stopwatch;