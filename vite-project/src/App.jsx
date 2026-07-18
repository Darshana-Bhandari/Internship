// ==========================================
// Day 15 & 16 - useState, useEffect, Lifecycle, Context API
// ==========================================

// 1. useState
// -----------
// useState is a React Hook that adds state to functional components.
// It returns [currentValue, updaterFunction].
//
//   const [count, setCount] = useState(0);
//
// - count     -> current state value
// - setCount  -> function to update the state
// - 0         -> initial state value
//
// Flow: initialize -> update via setter -> React re-renders automatically.


// 2. useEffect
// ------------
// useEffect lets us run side effects in functional components.
//
// a) No dependency array -> runs after every render
//      useEffect(() => { ... });
//
// b) Empty dependency array [] -> runs once, on mount
//      useEffect(() => { ... }, []);
//
// c) With dependencies [deps] -> runs when those values change
//      useEffect(() => { ... }, [count]);
//
// Common use cases:
// - Fetching data from APIs
// - Updating document title / metadata
// - Timers (setTimeout / setInterval)
// - Adding/removing event listeners
// - Syncing with external services or browser APIs


// 3. React Lifecycle (Mount & Unmount)
// -------------------------------------
// - Mount   -> component is created
// - Update  -> component re-renders when state/props change
// - Unmount -> component is removed from the screen
//
// Example: a <Timer /> mounts when "Start Timer" is clicked,
// and unmounts when "Stop Timer" is clicked (conditional rendering).


// 4. Context API
// --------------
// Context lets you share data across components without passing
// props manually at every level ("prop drilling").
//
//   <UserContext.Provider value={name}>
//     <Navbar />
//   </UserContext.Provider>
//
// Any component inside <Navbar /> can now read `name` via useContext().


// ==========================================
// Day 17 - Fetch API in React
// ==========================================

// What is an API?
// - Application Programming Interface.
// - Lets two applications communicate (e.g. React App <-----> API Server).

// What is fetch()?
// - A JS method to get data from an API.
//
//   fetch("API_URL")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// Why use it?
// - Get data from the server, display dynamic data,
//   connect frontend with backend, keep the UI live.

// useEffect + fetch()
// - Fetching is a side effect, so it belongs in useEffect.
// - Empty deps [] means "run once, on mount".

// useState + fetch()
// - useState stores the fetched data so the UI can render it.

// Steps of a typical fetch flow:
// 1. Create state with useState()
// 2. Fetch inside useEffect()
// 3. Call fetch()
// 4. Convert response to JSON
// 5. Store data with the setter
// 6. Render the data with map()

// Extras worth tracking alongside data:
// - loading -> true while the request is in flight, false once resolved
// - error   -> set when the request fails, so the UI can show a message


// ==========================================
// Day 18 - CRUD with Axios (this project)
// ==========================================

// CRUD = Create, Read, Update, Delete.
// Same idea as fetch(), but using axios + a real backend (productService).
//
// - Read   -> getProducts()      (loaded on mount via useEffect)
// - Create -> createProducts()   (addProduct)
// - Update -> updateProducts()   (updateExisting)
// - Delete -> deleteProduct()    (removeProduct)
//
// Pattern used below: every mutation (create/update/delete) is followed
// by fetchProducts() again, so the list always reflects the server state
// instead of trying to patch local state by hand.

import React, { useState, useEffect } from "react";
import {
  createProducts,
  deleteProduct,
  getProducts,
  updateProducts,
} from "./services/productService";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
// import AppRoute from "./routes/AppRoute";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // ---- Read: load products on mount ----
  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ---- Create ----
  const addProduct = async (product) => {
    await createProducts(product);
    fetchProducts();
  };

  // ---- Update ----
  const updateExisting = async (id, product) => {
    await updateProducts(id, product);
    setEditingProduct(null);
    fetchProducts();
  };

  // ---- Delete ----
  const removeProduct = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div>
      <h1>Product CRUD Operation using Axios</h1>

      <ProductForm
        addProduct={addProduct}
        editingProduct={editingProduct}
        updateProducts={updateExisting}
      />

      <ProductList
        products={products}
        onDelete={removeProduct}
        onEdit={setEditingProduct}
      />

      {/* <AppRoute /> */}
    </div>
  );
};

export default App;

/*
==========================================
Notes - Day 18
==========================================

1. Why useEffect here?
-----------------------
fetchProducts() is a side effect (it talks to the outside world),
so it runs inside useEffect with an empty [] dependency array,
meaning "run once, right after the component mounts".

2. Editing flow
----------------
- ProductList calls onEdit={setEditingProduct} when a product's
  edit button is clicked, storing that product in state.
- ProductForm receives editingProduct as a prop and uses it to
  prefill its fields, then decides whether to call addProduct
  or updateProducts depending on whether editingProduct is set.

3. Bugs fixed from the original draft
---------------------------------------
- `useEffect` was used but never imported (only useState was) ->
  added it to the import line.
- updateExisting's first parameter was named `IdleDeadline` but the
  function body referenced `id`, which didn't exist -> renamed the
  parameter to `id` so the update call actually works.
*/