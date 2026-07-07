// Fetch API CRUD Operations using Async/Await


// GET Request - Fetch Data


async function getPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();

        console.log("Fetched Posts:");
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

getPosts();


-
// POST Request - Create Data


async function createPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Learning Fetch API",
                body: "This is a POST request",
                userId: 1
            })
        });

        let data = await response.json();

        console.log("Post Created:");
        console.log(data);
    } catch (error) {
        console.log("Error creating post:", error);
    }
}

createPost();



// PUT Request - Update Data


async function updatePost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Updated Title",
                body: "Updated Post Data",
                userId: 1
            })
        });

        let data = await response.json();

        console.log("Post Updated:");
        console.log(data);
    } catch (error) {
        console.log("Error updating post:", error);
    }
}

updatePost();



// DELETE Request - Delete Data


async function deletePost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        });

        if (response.ok) {
            console.log("Post Deleted Successfully");
        }
    } catch (error) {
        console.log("Error deleting post:", error);
    }
}

deletePost();