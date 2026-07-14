
/// 1. useState in React


// useState is a React Hook that allows us to add state to functional components.
// It returns an array containing:
// 1. The current state value.
// 2. A function to update that state.

// Syntax:
const [count, setCount] = useState(0);

// count -> Current state value.
// setCount -> Function to update the state.
// 0 -> Initial state value.

// How useState works:
// 1. Initialize the state using useState().
// 2. Update the state using the setter function (setCount()).
// 3. React automatically re-renders the component with the updated state.



/// 2. useEffect in React


// useEffect is a React Hook that lets us perform side effects in functional components.

// Types of useEffect:

// 1. Without a dependency array
// Runs after every render (initial render + every update).
useEffect(() => {

});

// 2. With an empty dependency array []
// Runs only once after the component is mounted.
useEffect(() => {

}, []);

// 3. With a dependency array [deps]
// Runs whenever the specified dependency changes.
useEffect(() => {

}, [count]);



/// Common use cases of useEffect


// 1. Fetching data from APIs.

// 2. Updating the document title or other metadata.

// 3. Controlling timers (setTimeout() / setInterval()).

// 4. Adding and removing event listeners.

// 5. Synchronizing with external services or browser APIs.




// Day 16 - React Lifecycle & Context API


import React from "react";
import UserContext from "./context/userContext";
import Navbar from "./components/Navbar";



// Example 1: React Lifecycle (Mount & Unmount)


// Uncomment this section to practice the lifecycle example.

/*
import { useState } from "react";
import Timer from "./components/Timer";

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <h1>React Lifecycle Example</h1>

      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>

      <hr />

      {showTimer && <Timer />}
    </div>
  );
};

export default App;
*/

// Example 2: React Context API


const App = () => {
  // Data to share with all child components
  const name = "Rahul";

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
- Mount: Component is created.
- Update: Component re-renders when state or props change.
- Unmount: Component is removed from the screen.

In the Timer example:
- Clicking "Start Timer" mounts the Timer component.
- Clicking "Stop Timer" unmounts the Timer component.

2. React Context API
--------------------
- Context API lets you share data across components
  without passing props manually at every level.

- UserContext.Provider makes the value ("Rahul")
  available to all child components inside it.

Example:
<UserContext.Provider value={name}>
    <Navbar />
</UserContext.Provider>

Now Navbar and its child components can access
the value using the useContext() hook.
*/
