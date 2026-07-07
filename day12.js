// Fetch API is a built-in JavaScript API used to send HTTP requests
// and receive responses from a server.

// Common HTTP Methods:
// GET    - Retrieve data
// POST   - Create new data
// PUT    - Update existing data
// PATCH  - Partially update data
// DELETE - Remove data

// --------------------------------------------------
// POST Request - Create a New Post
// --------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Learning Fetch API POST Request",
        body: "Learning Fetch API",
        userId: 1
    })
})
.then((response) => response.json())
.then((data) => {
    console.log("Post Created:", data);
})
.catch((error) => {
    console.error("Error creating post:", error);
});


// --------------------------------------------------
// PUT Request - Update a Post
// --------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "New Title",
        body: "Updated Post Data",
        userId: 1
    })
})
.then((response) => response.json())
.then((data) => {
    console.log("Post Updated:", data);
})
.catch((error) => {
    console.error("Error updating post:", error);
});


// --------------------------------------------------
// DELETE Request - Delete a Post
// --------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then(() => {
    console.log("Post Deleted Successfully");
})
.catch((error) => {
    console.error("Error deleting post:", error);
});