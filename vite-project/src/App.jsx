
import React from "react";
import UserContext from "./assets/context/UserContext";
import Navbar from "./assets/components/Navbar";

const App = () => {
  const name = "Darshana";

  return (
    <UserContext.Provider value={name}>
      <Navbar />
    </UserContext.Provider>
  );
};

export default App;

const _legacy = `
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
import UserContext from "./assets/context/UserContext";
import Navbar from "./assets/components/Navbar";

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

/*
javascript


/// Day 17 - Fetch API in React


// What is API?

// API (Application Programming Interface)
// API allows two applications to communicate with each other.
// We use APIs to get data from a server.

// Example:
// React App  <------>  API Server



// What is Fetch API?

// fetch() is a JavaScript method used to get data from an API.



// Syntax

fetch("API_URL")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });



// Why do we use Fetch API?

// 1. Get data from the server.
// 2. Display dynamic data.
// 3. Connect frontend with backend.
// 4. Update UI with live data.



// useEffect + Fetch API

// We use useEffect() because fetching data is a side effect.
// It runs once when the component is mounted.

useEffect(() => {
  fetch("API_URL")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}, []);




// useState + Fetch API

// useState stores the fetched data.

const [users, setUsers] = useState([]);




// Steps of Fetch API

// 1. Create state using useState().
// 2. Use useEffect().
// 3. Call fetch().
// 4. Convert response into JSON.
// 5. Store data using setState().
// 6. Display the data using map().





// Example

import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;




// Loading State

const [loading, setLoading] = useState(true);

// Loading is true while data is fetching.
// After data is fetched, setLoading(false).




// Error Handling

const [error, setError] = useState(null);

// If fetching fails,
// store the error inside setError().




// Common use cases of Fetch API

// 1. Users List
// 2. Products
// 3. Weather App
// 4. News App
// 5. Dashboard
// 6. Blog Website



/*
 New Topics
*/


/// Async / Await

// async and await are used to handle asynchronous operations.
// They make the code easier to read than .then().

// async makes a function asynchronous.

// await waits until the Promise is completed.

async function getData() {
  const response = await fetch("API_URL");
  const data = await response.json();

  console.log(data);
}




/// try...catch

// try is used to execute code.

// catch handles errors if something goes wrong.

try {
  // code
} catch (error) {
  console.log(error);
}




/// CRUD Operations

// CRUD stands for:

// C -> Create
// R -> Read
// U -> Update
// D -> Delete

// CRUD operations are commonly performed while working with APIs.




/// HTTP Methods

// GET    -> Read data
// POST   -> Create new data
// PUT    -> Update existing data
// PATCH  -> Update specific fields
// DELETE -> Delete data




/// GET Request

// GET is used to fetch (read) data from the server.

fetch(API)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });




/// POST Request

// POST is used to create new data.

fetch(API, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title,
    body,
  }),
});




/// JSON.stringify()

// JSON.stringify() converts a JavaScript object
// into a JSON string before sending it to the server.

body: JSON.stringify({
  title,
  body,
});




/// Controlled Inputs

// useState is used to control form inputs.

const [title, setTitle] = useState("");
const [body, setBody] = useState("");

<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>;

<input
  value={body}
  onChange={(e) => setBody(e.target.value)}
/>;




/// JSONPlaceholder API

// JSONPlaceholder is a free fake REST API
// used for learning and testing.

// URL

https://jsonplaceholder.typicode.com/

// Example

https://jsonplaceholder.typicode.com/posts




/// Complete Fetch API Flow

// 1. Create state using useState().
// 2. Create an async function.
// 3. Use fetch() to request data.
// 4. Use await response.json().
// 5. Store the data using setState().
// 6. Display data using map().
// 7. Handle errors using try...catch.
// 8. Use POST to add new data.
// 9. Use PUT/PATCH to update data.
// 10. Use DELETE to remove data.
`;


