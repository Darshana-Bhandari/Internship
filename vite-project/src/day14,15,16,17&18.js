///day 15 & 16
/// 1. useState in React


// useState is a React Hook that allows us to add state to functional components.
// It returns an array containing:
// 1. The current state value.
// 2. A function to update the state.

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

- UserContext.Provider makes the value ("Darshana")
  available to all child components inside it.

Example:
<UserContext.Provider value={name}>
    <Navbar />
</UserContext.Provider>

Now Navbar and its child components can access
the value using the useContext() hook.
*/



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

// ==========================================
// Day 18 - CRUD Operations with Axios
// ==========================================

// What is CRUD?
// --------------
// CRUD = Create, Read, Update, Delete.
// These are the 4 basic operations we perform on data
// in almost every real-world application.

// What is Axios?
// ---------------
// Axios is a JavaScript library used to make HTTP requests,
// similar to fetch(), but with a simpler syntax and some
// extra built-in features (like automatic JSON parsing).

// Basic Axios methods:

// 1. GET -> Read data
axios.get("API_URL")
  .then((response) => console.log(response.data));

// 2. POST -> Create data
axios.post("API_URL", { title: "New Item" })
  .then((response) => console.log(response.data));

// 3. PUT -> Update data
axios.put("API_URL/1", { title: "Updated Item" })
  .then((response) => console.log(response.data));

// 4. DELETE -> Remove data
axios.delete("API_URL/1")
  .then((response) => console.log("deleted"));


// Structuring CRUD in a React app
// ---------------------------------
// Instead of writing axios calls directly inside components,
// we keep them in a separate "service" file (e.g. productService.js).
// This keeps components clean and API logic reusable.

// Example service functions:
//   getProducts()      -> GET all products
//   createProducts()   -> POST a new product
//   updateProducts()   -> PUT/update an existing product
//   deleteProduct()    -> DELETE a product by id


// The CRUD Pattern used in this project
// ----------------------------------------
// 1. fetchProducts() -> loads the list (Read), runs once on mount
//    via useEffect(() => { fetchProducts() }, []).
//
// 2. addProduct(product) -> calls createProducts(), then
//    re-runs fetchProducts() so the UI shows the new item.
//
// 3. updateExisting(id, product) -> calls updateProducts(id, product),
//    clears editingProduct, then re-runs fetchProducts().
//
// 4. removeProduct(id) -> calls deleteProduct(id), then
//    re-runs fetchProducts().
//
// Key idea: after every Create/Update/Delete, we refetch the list
// instead of manually editing local state. This keeps the UI in
// sync with what's actually on the server.


// The "editing" flow
// --------------------
// - Clicking "Edit" on a product calls onEdit={setEditingProduct},
//   storing that product object in state.
// - ProductForm receives editingProduct as a prop and uses it to
//   prefill its input fields.
// - On submit, ProductForm decides whether to call addProduct
//   (no editingProduct) or updateProducts (editingProduct is set).


// Common mistakes to watch for
// -------------------------------
// - Forgetting to import useEffect when using it (only importing
//   useState leaves useEffect undefined).
// - Naming a function parameter something unrelated to what's used
//   inside the function body (e.g. writing (IdleDeadline, product)
//   but then referencing `id` inside — they must match).
// - Not calling fetchProducts() again after create/update/delete,
//   which leaves the UI showing stale data.