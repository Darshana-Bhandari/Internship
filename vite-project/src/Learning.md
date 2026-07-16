// props  are used ot  pass data from parent components to child components
// in props only parent to child send the data

// props are read only


//App.jsx
// students.jsx
// users.jsx
// teacher .jsx

//state is a built-in react object used to store data that can chnage over time . when the state changes , react automatically updates the user interface(ui)
// hooks is a special react function that lets function components use react features sucha as : useState, useEffect  , useContext, useMemo etc
// const [value,setVlaue]=usestate(0)
///
///class App extends React.Component{
    
////}/////

// props vs state 
//props            vs state
//props are data passed from a parent to child component    |     state is data that is managed within a component when state changes, the component re-renders
// props are immutable -- it can not be changed by the child   ||  state are mutable - it can change over time
//  does not trigger re-render by itslef      ||    state updates may trigger re-render of the component
// used for passing data from paretn to child components   ||     used of local data that change in the component



/// why do we use hooks 
// 1 useState  and othes many  React features able to used in functional components
// 2 simpler code 
// 3 re-useful logic
// 4 easier testing 


/// 1 useState in React 


   //const[count,setCount]=useState(0)
// it is a React Hook that lets us to add state state to functional component it returns a state variable and a function to update that state

// how its works 
// initailize the state    useState() 0
//update the state using the setState/setCount() 1
// components re-renders with new state 1


/// useEffect 

 it is a react hook that let us perform side effects in functional components
 types of the useeffect     
    1//not dependencies array    runs after every render (mounted and updated)
 useEffect(()={

 });
 2// empty dependencies array []   runs only once after the component is mounted 
 // useEffect()=>{

 },[];

 3 with dependencies array[deps]  runs when the specified dependencies changes


 // usecases of the useEffect

 1 fetching data from apis 
 2 updating the document title or meta data
 3 controllig timers (settimeout/setinterval())


 // Component Lifecycle 
 Birth-life-Death
 Mount(create)-update-Hide(Removed)
 it is the series of the stage that a react component goes through from the time it is created until it is removed from the screen.
 1  Mounting 
 Mounting is when a component is created and displayed on the screen for the first time
 example 
 function App(){
   return 
   (
      <h1> hello React</h1>
   )
 }

2 updating 
it is the phase updating happens whenever state changes , props change and context changes

3 unmounting 
it means the component is removed from the screeen



 // Api fetching
   What is API?


 //useContext
it hepls to share data between components without passing props manually through every level or components (avoids "props drilling")

App(usrname="Rahul")
Navbar()
Menu()
Profiel()

with contenxt 
App----> Context ------> Any components
Any component can access the shared data directly




step 1   create user context
step 2   create provider for avalibale the data inside
step 3  creating consumer to consume the data

 //useMemo
 //useRef

 App()----Navbar()----Menu()-----prof()



 /// using fetch api 



// event handling 
it is the process of the responding the user actions sucha as clicking a button, typing in an input field, hovering over an element , or submitting a form

user action click(button) ----  function executes(handleClick()) ----- ui updates( button has been clicked!) 



// forms 
it is used to collect information form users
//login page
// signup page
//contactus page




flow of react form
user types (rahul) --- onChange()-- updates state (usestate("))-- input value cahnages --- ui updates
//controlled componensts
A controlled components is an input element whose value is controlled by react state
why controlled components?
-- easy validation
-- easy form submission
-- real time updates
-- better data management 


//// react-router-dom

it is a library that enables client side routing in react applications.

it allows user to navigate between pages without relaoding the entire browser pages.

npm insall react-router-dom

/// createBrowserRouter 
It is a function provided by React router dom that creates a router object by defining all applications routes in one place


old method 
<BrowserRouter>
<Routes>// <App />
<Route     >


new method syntax 
const router= createBrowserRouter([





])


features of createBrowserRouter
- cleaner
-- more scalable (update,delete)
-- better for large applications
-- supports loaders and actions
  
  Mall
  |
  |--- Home

  |---- About
  |



<Outlet />  // is a placeholder that helps react where to displa the math child route. 











