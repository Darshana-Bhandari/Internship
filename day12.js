// Fetch API is a built-in JavaScript feature used to send HTTP requests
// to a server and receive data from it.

// Common HTTP methods:
// GET    - Retrieve data
// POST   - Create new data
// PUT/PATCH - Update existing data
// DELETE - Remove data

// Why do we use the Fetch API?
// Imagine we are building an e-commerce website.
// The frontend needs to communicate with the backend
// to fetch products, user information, orders, etc.
// Without the Fetch API, the website cannot exchange
// data with the server.

// Example: GET Request

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => {
    console.log('Fetched Data:', data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });