 //is commonly used to:
// -get data (GET)
// - send data (POST)
// --update data (PUT/PATCH)
// -- delete data (DELETE)



// why do we use fetch api?
//- imagine we are building:
// E-commerce webiste
// the frontend needs data fron the backend
// without fetch api , our website cannot communicate with the server

// let url=http://localhost/5000/api
//basic get request (GET)
// fetch("https://jsonplaceholder.typicode.com/users") //  sending the request to the server
// .then (function(response){ 
    
//      /// receives the server response 
//      console.log("loading the data ....")

//     return response.json();  // converts the json into a javascript object
// })


// .then(function(data){ /// displays the received data
   
//         // console.log(userdata.username)

//         let output=""
//         data.forEach(function(user){
//             output+=`<li>${user.name}</li>`;
//             output+=`<li>${user.email}</li>`;
            
//         });
//         document.getElementById("users").innerHTML=output;
//     })

    // /// fetch using the aynsc and await
    //  async  function getUsers(){
    //     let response = await fetch("https://jsonplaceholder.typicode.com/users") /// receives the server response 
    //     let users = await response.json()
    //     console.log(users)
    //   }

    //   getUsers()






//POST request (POST) // users send data 
//fetch(url,optionsvalue)

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{    /// headers provide the extra information about the request
        "Content-Type":"application/json"   // ma json format ma data lei send gardei xu
       
    },
    body:JSON.stringify({  // converts the javascript objects into a json string
        title:"javascript learning or fetch post requests learnig",
        body:"learning fetch api",
        userdId:1
    })
})


.then(function(response){
     return response.json();

})
.then(function(data){
    console.log(data)
})


//// only update the title (patch/PUT)
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        title:"new title",
        body:"new data updated"
    })
})

.then(function(response1){
     return response1.json();

})
.then(function(data1){
    console.log(data1)
})

// delete the data(DELETE)
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"DELETE",

})

.then(function(response2){
    console.log("post deleted")

})