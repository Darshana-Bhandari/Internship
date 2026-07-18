// Props are used to pass data from parent components to child components.
// In props, data flows only from parent to child.

// Props are read-only (immutable).

// App.jsx
// Students.jsx
// Users.jsx
// Teacher.jsx


// State is a built-in React object used to store data that can change over time.
// When the state changes, React automatically updates the User Interface (UI).

// Hooks are special React functions that let functional components use React features such as:
// useState, useEffect, useContext, useMemo, useRef.

// const [value, setValue] = useState(0);

/// class App extends React.Component {

/// }

//////////////////////////////////////////////////////////////////////
// Props vs State
//////////////////////////////////////////////////////////////////////

// Props                                           | State
// ------------------------------------------------|-----------------------------------------
// Data passed from parent to child component      | Data managed within a component
// Immutable (cannot be changed by child)          | Mutable (can change over time)
// Does not trigger re-render by itself            | State updates trigger re-render
// Used for passing data                           | Used for local data inside a component

//////////////////////////////////////////////////////////////////////
// Why do we use Hooks?
//////////////////////////////////////////////////////////////////////

// 1. Allow React features to be used in functional components.
// 2. Simpler and cleaner code.
// 3. Reusable logic.
// 4. Easier testing and maintenance.

//////////////////////////////////////////////////////////////////////
// useState
//////////////////////////////////////////////////////////////////////

// const [count, setCount] = useState(0);

// It is a React Hook that lets us add state to functional components.
// It returns a state variable and a function to update that state.


// How it works

// 1. Initialize the state
// useState(0)

// 2. Update the state
// setCount(1)

// 3. The component re-renders with the updated state.

//////////////////////////////////////////////////////////////////////
// useEffect
//////////////////////////////////////////////////////////////////////

// It is a React Hook that lets us perform side effects in functional components.


// Types of useEffect

// 1. Without dependency array
// Runs after every render (mount and update).

useEffect(() => {

});

// 2. Empty dependency array []
// Runs only once after the component is mounted.

// useEffect(() => {

// }, []);


// 3. With dependency array [deps]
// Runs whenever the specified dependency changes.

//////////////////////////////////////////////////////////////////////
// Use cases of useEffect
//////////////////////////////////////////////////////////////////////

// 1. Fetching data from APIs.
// 2. Updating the document title or metadata.
// 3. Controlling timers (setTimeout, setInterval).

//////////////////////////////////////////////////////////////////////
// Component Lifecycle
//////////////////////////////////////////////////////////////////////

// Birth -> Life -> Death
// Mount -> Update -> Unmount

// It is the series of stages that a React component goes through
// from the time it is created until it is removed from the screen.


// 1. Mounting

// A component is created and displayed on the screen for the first time.

function App() {
  return (
    <h1>Hello React</h1>
  );
}


// 2. Updating

// Updating happens whenever:
// - State changes
// - Props change
// - Context changes


// 3. Unmounting

// The component is removed from the screen.

//////////////////////////////////////////////////////////////////////
// API Fetching
//////////////////////////////////////////////////////////////////////

// What is an API?

//////////////////////////////////////////////////////////////////////
// useContext
//////////////////////////////////////////////////////////////////////

// It helps share data between components without passing props manually
// through every level of the component tree (avoids "props drilling").


// Without Context

// App (username = "Darshana")
//        |
//     Navbar
//        |
//      Menu
//        |
//     Profile


// With Context

// App ------> Context ------> Any Component

// Any component can access the shared data directly.


// Step 1: Create User Context.

// Step 2: Create Provider to make the data available.

// Step 3: Create Consumer (or use useContext) to consume the data.

//////////////////////////////////////////////////////////////////////
// useMemo
//////////////////////////////////////////////////////////////////////

// Used to optimize expensive calculations by memoizing values.

//////////////////////////////////////////////////////////////////////
// useRef
//////////////////////////////////////////////////////////////////////

// Used to access DOM elements or store mutable values.


// App()
//   |
// Navbar()
//   |
// Menu()
//   |
// Profile()

//////////////////////////////////////////////////////////////////////
// Using Fetch API
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Event Handling
//////////////////////////////////////////////////////////////////////

// Event handling is the process of responding to user actions such as:
// - Clicking a button
// - Typing in an input field
// - Hovering over an element
// - Submitting a form


// User clicks button
//        |
// handleClick() executes
//        |
// UI updates

//////////////////////////////////////////////////////////////////////
// Forms
//////////////////////////////////////////////////////////////////////

// Forms are used to collect information from users.

// Examples:
// - Login Page
// - Signup Page
// - Contact Us Page


//////////////////////////////////////////////////////////////////////
// React Form Flow
//////////////////////////////////////////////////////////////////////

// User types ("Darshana")
//        |
// onChange()
//        |
// Updates state (useState(""))
//        |
// Input value changes
//        |
// UI updates


// Controlled Components

// A controlled component is an input element whose value is
// controlled by React state.


// Why Controlled Components?

// - Easy validation
// - Easy form submission
// - Real-time updates
// - Better data management

//////////////////////////////////////////////////////////////////////
// React Router DOM
//////////////////////////////////////////////////////////////////////

// It is a library that enables client-side routing in React applications.

// It allows users to navigate between pages without reloading
// the entire browser page.


// Installation

// npm install react-router-dom

//////////////////////////////////////////////////////////////////////
// createBrowserRouter
//////////////////////////////////////////////////////////////////////

// It is a function provided by React Router DOM that creates
// a router object by defining all application routes in one place.


// Old Method

<BrowserRouter>
  <Routes>
    <Route />
  </Routes>
</BrowserRouter>


// New Method

const router = createBrowserRouter([

]);


// Features of createBrowserRouter

// - Cleaner
// - More scalable
// - Better for large applications
// - Supports loaders and actions


// Example

// Mall
//   |
//   |---- Home
//   |
//   |---- About


//////////////////////////////////////////////////////////////////////
// Outlet
//////////////////////////////////////////////////////////////////////

// <Outlet />
// It is a placeholder that tells React where to display
// the matched child route.

//////////////////////////////////////////////////////////////////////
// Axios
//////////////////////////////////////////////////////////////////////

// Axios is a JavaScript library used to send HTTP requests
// to APIs or servers.


// Why Axios?

// - Cleaner syntax
// - Automatic JSON conversion
// - Better error handling
// - Request and response interceptors


// Installation

// npm install axios


// Fetch API

fetch("")
  .then(response => response.json())
  .then(data => console.log(data));


// Axios

axios.get("")
  .then(response => console.log(response.data));