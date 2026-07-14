
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
 /*
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
*/



// Day 16 - React Lifecycle & Context API


// ------------------------------------------
// Example 1: React Lifecycle
// ------------------------------------------

// Uncomment this section to practice the
// React Lifecycle (Mounting & Unmounting).

/*
import React, { useState } from "react";
import Timer from "./components/Timer";

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      <h1>React Lifecycle with Timer</h1>

      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>

      <hr />

      {showTimer && <Timer />}
    </>
  );
};

export default App;
*/

// ------------------------------------------
// Example 2: React Context API
// ------------------------------------------

import React from "react";
import UserContext from "./context/userContext";
import Navbar from "./components/Navbar";

const App = () => {
  // Data that will be shared across components
  const name = "Darshana";

  return (
    <UserContext.Provider value={name}>
      <Navbar />
    </UserContext.Provider>
  );
};

export default App;

/*

Notes


1. React Lifecycle
------------------
- Mounting: The component is created and added to the DOM.
- Updating: The component re-renders when state or props change.
- Unmounting: The component is removed from the DOM.

In the Timer example:
- Clicking "Start Timer" mounts the Timer component.
- Clicking "Stop Timer" unmounts the Timer component.

2. React Context API
--------------------
- Context API allows data to be shared between components
  without passing props manually through every level.

- UserContext.Provider makes the value ("Darshana")
  available to all child components.

Example:
<UserContext.Provider value={name}>
  <Navbar />
</UserContext.Provider>

Child components can access this value using
the useContext() hook.
*/