
// React JS Notes

// What is React JS?
// React JS is a JavaScript library developed by Meta (Facebook)
// for building fast, interactive, and reusable User Interfaces (UI),
// especially for Single Page Applications (SPAs).


// Features of React

// 1. Component-Based Architecture
// - The UI is divided into small, reusable components.
// - Each component has its own logic and can be reused multiple times.

// 2. Virtual DOM
// - React creates a lightweight copy of the Real DOM called the Virtual DOM.
// - It compares the previous Virtual DOM with the updated one.
// - Only the changed elements are updated in the Real DOM.
// - This process is called Reconciliation (Diffing Algorithm).

// 3. Reusable Components
// - Components can be reused throughout the application.
// - This reduces duplicate code and makes maintenance easier.

// 4. Fast Performance
// - React updates only the necessary parts of the page.
// - This makes applications faster and more efficient.

// 5. Declarative UI
// - Developers describe what the UI should look like.
// - React automatically updates the UI when data changes.

// 6. One-Way Data Flow
// - Data flows from Parent Component to Child Component.
// - This makes the application easier to understand and debug.



// What is SPA (Single Page Application)?

// SPA stands for Single Page Application.
// It loads only one HTML page initially.
// Instead of refreshing the entire page,
// React updates only the required content,
// making the application faster and smoother.

// Examples:
// - Gmail
// - Facebook
// - Instagram
// - Netflix



// What is Vite?

// Vite is a modern frontend build tool used to create React projects quickly.

// Advantages of Vite:
// - Very fast project setup
// - Instant server startup
// - Hot Module Replacement (HMR)
// - Lightweight
// - Faster builds than Create React App
// - Optimized for modern JavaScript development


// Real DOM vs Virtual DOM


// Real DOM
// - The actual DOM created and managed by the browser.
// - Every change directly updates the browser's DOM.
// - Updating the Real DOM is slower because the browser
//   has to re-render the affected parts of the page.

// Virtual DOM
// - A lightweight JavaScript copy of the Real DOM.
// - Managed by React.
// - React first updates the Virtual DOM.
// - It compares the old and new Virtual DOM (Diffing).
// - Only the changed elements are updated in the Real DOM.
// - This improves application performance.


// JSX

// JSX stands for JavaScript XML.
// It allows us to write HTML-like code inside JavaScript.
// React converts JSX into regular JavaScript.

// Example:
// const element = <h1>Hello React</h1>;


// Props

// Props (Properties) are used to pass data
// from a Parent Component to a Child Component.
// Props are Read-Only.


// State

// State stores data that can change over time.
// When state changes, React automatically re-renders
// the component to display the updated UI.

// React Hooks

// Hooks allow function components to use React features.

// Common Hooks:
// - useState() -> Manage component state.
// - useEffect() -> Perform side effects (API calls, timers, etc.).
// - useContext() -> Share data without prop drilling.
// - useRef() -> Access DOM elements or store mutable values.


// Why React?

// - Reusable Components
// - Better Performance using Virtual DOM
// - Easy to Learn
// - Large Community Support
// - Strong Ecosystem
// - Used for Web and Mobile Apps (React Native)
// - Makes UI development easier and more organized



// Difference: Library vs Framework

// React is a Library, not a Framework.

// Library:
// - Focuses mainly on building the UI.
// - You choose additional libraries (React Router, Axios, Redux, etc.).

// Framework:
// - Provides a complete structure for building applications.
// - Includes routing, state management, and more.



// React Project Structure (Basic)

// src/
//   App.jsx          -> Main Component
//   main.jsx         -> Entry Point
//   components/      -> Reusable Components
//   assets/          -> Images, Icons
//   styles/          -> CSS Files



// Summary

-

// React = JavaScript Library
// Meta (Facebook) developed React.
// React uses Components and Virtual DOM.
// React builds fast, reusable, and interactive UIs.
// Vite is commonly used to create React projects quickly.