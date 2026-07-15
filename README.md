# MERN Stack Internship

This repository documents my day-by-day progress during my MERN Stack internship. Each commit represents a new day of learning, starting from the fundamentals of HTML & CSS and progressing toward JavaScript and full-stack web development.

---

## 📁 Repository Structure

```text
Internship/
├── darsu.html                   # Day 1  — Personal introduction page
├── day2.html                    # Day 2  — Core HTML elements practice
├── day2_ticket.html             # Day 2  — Movie ticket booking form (task)
├── taskofday2.html              # Day 2  — Additional HTML task
├── day3.html                    # Day 3  — Semantic HTML, CSS styling & tables
├── day4.html                    # Day 4  — Full healthcare website (MedCare)
├── day4.css                     # Day 4  — External CSS for MedCare
├── day5carepluse_tailwind.html  # Day 5  — Clinic management UI with Tailwind CSS
├── day6.html                    # Day 6  — HTML shell linking Day6.js
├── day6.js                      # Day 6  — JavaScript fundamentals & conditionals
├── day7.html                    # Day 7  — HTML shell linking Day7.js
├── day7_task.html               # Day 7  — HTML shell for task
├── day7_task.js                 # Day 7  — Grade calculator using switch (task)
├── Day7.js                      # Day 7  — Switch statements, loops & sum of numbers
├── day8.js                      # Day 8  — Functions, Scope, Objects & Arrays
├── day9.js                      # Day 9  — Advanced Array Methods
├── day9_calculator.html         # Day 9  — Calculator UI built with Tailwind CSS (task)
├── day10_dom_events.html        # Day 10 — DOM selection methods & event listener practice
├── day9_calculator.html (JS)    # Day 10 — Calculator logic completed (appendToDisplay, calculate, backspace, keyboard support)
├── day11.js                     # Day 11 — Synchronous vs Asynchronous JavaScript, Promises & Async/Await
├── day12.html                   # Day 12 — HTML shell linking day12.js
├── day12.js                     # Day 12 — Fetch API CRUD operations (GET, POST, PUT, DELETE)
├── day13.html                   # Day 13 — HTML shell linking day13.js
├── day13.js                     # Day 13 — Arrow Functions, Template Literals, Named & Default Exports
├── day13_import.js              # Day 13 — Importing named exports (add, sub) from day13.js
├── emaple.md                    # Day 17 — Component tree planning notes (App/Navbar/Home/About/Features)
├── package.json                 # Node.js project setup
├── package-lock.json            # Node.js dependency lock file
├── vite-project/                # Day 13 — React project scaffolded with Vite
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── components/
│   │   │   │   ├── Button.jsx    # Day 14 — Button component with onClick handler
│   │   │   │   ├── User.jsx      # Day 15 — Props-based component, destructuring, default values & conditional rendering
│   │   │   │   ├── Menu.jsx      # Day 16 — Consumes UserContext, renders Profile
│   │   │   │   ├── Navbar.jsx    # Day 16 — Wraps and renders Menu
│   │   │   │   ├── Profile.jsx   # Day 16/17 — Consumes UserContext, displays welcome message / age
│   │   │   │   └── Timer.jsx     # Day 16 — useEffect mount/update/unmount example
│   │   │   ├── context/
│   │   │   │   └── UserContext.jsx  # Day 16 — createContext() setup for Context API
│   │   │   ├── hero.png
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   ├── App.css              # Day 14 — Styling for the app shell & button
│   │   ├── App.jsx              # Day 16 — React Context API example (UserContext.Provider wrapping Navbar) + commented-out Lifecycle/Timer example
│   │   ├── day14,15,16&17.js    # Day 17 — Fetch API in React notes and practice (also carries Day 14-16 notes)
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js         # Day 14 — Flat ESLint config w/ React Hooks + React Refresh rules
│   ├── index.html               # Day 14 — Vite entry HTML (root div + main.jsx module script)
│   ├── package.json             # Day 14 — Added Tailwind CSS v4 + @tailwindcss/vite plugin
│   ├── package-lock.json        # Day 14 — Reviewed lockfile for reproducible installs
│   └── vite.config.js           # Day 14 — Registered @tailwindcss/vite plugin alongside React
└── internship/                  # Additional internship files/resources
```

---

## 📅 Daily Progress

### Day 1 — `darsu.html` · *Introduction to HTML*

Built a personal introduction page covering:

* Basic HTML document structure (`<!DOCTYPE>`, `<head>`, `<body>`)
* Headings, paragraphs, and images
* Unordered lists for skills
* Contact information section

---

### Day 2 — `day2.html` · *HTML Core Elements*

Practiced fundamental HTML tags:

* All heading levels (`<h1>` through `<h6>`)
* Paragraphs, images, and anchor links
* Ordered and unordered lists
* HTML forms with inputs (text, email, password, phone, radio, select, checkbox)
* Form submission button

**Day 2 Task — `day2_ticket.html` · Movie Ticket Booking Form**

* Personal details (name, email, phone)
* Movie, date, and show time selection dropdowns
* Ticket quantity input
* Seat type selection (Regular / VIP / Premium)
* Food add-ons using checkboxes
* Special request textarea
* Submit and Reset buttons

---

### Day 3 — `day3.html` · *Semantic HTML & CSS Introduction*

Introduced semantic HTML and CSS styling:

* Semantic elements: `<header>`, `<nav>`, `<table>`
* Internal CSS styling
* Inline CSS
* External CSS files
* HTML tables with headings and rows
* Navigation bar with anchor links

---

### Day 4 — `day4.html` + `day4.css` · *Full Healthcare Website — MedCare*

Built a complete healthcare website using HTML and CSS.

**Sections Covered**

* Header with navigation
* Hero section
* About section
* Services section
* Doctors section
* Departments section
* Appointment booking form
* Patient records table
* Testimonials
* Contact section
* Footer

**CSS Skills Used**

* Flexbox
* CSS Grid
* Responsive layouts
* Hover effects
* Progress bars
* Badge components
* CSS variables

---

### Day 5 — `day5carepluse_tailwind.html` · *CarePlus CMS with Tailwind CSS*

Built a clinic management system interface using Tailwind CSS.

**Features**

* Responsive navigation bar
* Dashboard overview cards
* Services section
* Doctors table
* Patient registration form
* Contact section
* Footer

**Skills Learned**

* Tailwind CSS utility classes
* Responsive grid system
* Gradient backgrounds
* Backdrop blur effects
* Utility-first styling approach

---

### Day 6 — `day6.js` · *JavaScript Fundamentals*

#### Variables & Data Types

* `let` and `const`
* String, Number, Boolean, Undefined, Null
* `typeof` operator

#### Operators

* Arithmetic Operators
* Comparison Operators
* Logical Operators
* Assignment Operators

#### Conditionals

* Voting eligibility checker
* Grade checking using `if...else`

#### Node.js Setup

* Initialized Node.js project
* Created `package.json`
* Executed JavaScript using Node.js

---

### Day 7 — `Day7.js` + `day7_task.js` · *Switch Statements & Loops*

#### Switch Statements

* Day finder using `switch`
* Calculator using `switch`
* Grade calculator using `switch(Math.floor(marks/10))`

#### Loops

* `for` loop practice
* Printed messages multiple times
* Calculated sum of natural numbers

#### Day 7 Task — Grade Calculator

Built an interactive grade calculator using `switch(true)`:

* A+ → 90–100
* A → 80–89
* B → 70–79
* C → 60–69
* D → 50–59
* F → Below 50

---

### Day 8 — `day8.js` · *Functions, Scope, Objects & Arrays*

#### While Loop

* Printed numbers from 1 to 10 using `while`
* Learned loop initialization, condition, and increment

#### Do While Loop

* Printed numbers from 12 down to 10
* Learned that `do...while` executes at least once before checking the condition

#### Functions

* Created reusable functions with parameters
* Built a `sum(a, b)` function
* Returned values using `return`
* Stored results in variables and displayed them

#### Grade Checking Function

* Created a `gradeCheck(marks)` function using `if...else if...else`
* Assigned grades based on marks:

  * A+ → 90–100
  * A → 80–89
  * B → 70–79
  * C → 60–69
  * D → 50–59
  * F → Below 50

#### Function Expression

* Learned function expressions
* Stored a function inside a variable
* Executed the function using the variable name

#### Scope

* Learned Global Scope
* Learned Local Scope
* Accessed global variables inside functions
* Understood why local variables cannot be accessed outside their function

#### Objects

Created multiple JavaScript objects:

* Student object
* Vegetable object
* Fruit object

Practiced:

* Creating objects
* Accessing object properties
* Updating existing properties
* Adding new properties dynamically

#### Arrays

* Accessing array elements by index
* `push()` method
* `pop()` method
* `shift()` method
* `unshift()` method
* `length` property

---

### Day 9 — `day9.js` + `day9_calculator.html` · *Advanced Array Methods & Calculator UI*

Expanded knowledge of JavaScript arrays by learning powerful built-in array methods used for searching, modifying, transforming, and processing data.

#### Array Methods Practiced

##### includes()

* Checked whether a specific element exists in an array
* Returns `true` if found and `false` if not found

##### indexOf()

* Found the index position of an element
* Returns `-1` when the element does not exist

##### sort()

* Arranged array elements in alphabetical order

##### reverse()

* Reversed the order of array elements

##### splice()

* Removed elements from an array
* Added new elements at a specific position
* Learned how to modify existing arrays

##### forEach()

* Executed a function for each array element
* Accessed both element values and indexes

##### map()

* Created a new array from an existing array
* Converted fruit names to uppercase
* Learned that `map()` does not modify the original array

##### filter()

* Filtered array elements based on conditions
* Created an array of even numbers
* Created an array of odd numbers as a task

##### reduce()

* Reduced multiple array values into a single value
* Calculated the sum of all numbers in an array

#### Day 9 Task — Odd Numbers Filter

Built a program using `filter()` to:

* Extract only odd numbers from an array
* Return a new array without modifying the original array
* Practice callback functions and conditional filtering

#### Day 9 Task — `day9_calculator.html` · Calculator UI (Tailwind CSS)

Built the front-end of a calculator app using Tailwind CSS:

* Glassmorphism design with backdrop blur and gradient background
* Animated floating background shapes
* Live digital clock in the header
* Full calculator button layout (digits, operators, AC, backspace, %, decimal, equals)
* Hover and press micro-interactions on buttons (`btn-press` class)
* Google Fonts (Poppins) integration
* Display screen with a history line and main input readout

**Note:** On Day 9 this task covered only the UI/markup and the live clock script. The calculator logic was completed on Day 10 (see below).

---

### Day 10 — `day10_dom_events.html` + Calculator Logic · *DOM Manipulation & Event Listeners*

Learned how JavaScript interacts with the DOM (Document Object Model) and how to make pages interactive using event listeners.

#### DOM (Document Object Model)

* Understood the DOM as a tree-like representation of an HTML document
* Learned how JavaScript uses the DOM to read/change text, styles, and elements, and to handle events

#### Element Selection Methods

* `getElementsByClassName()` — selecting elements by class name
* `getElementsByTagName()` — selecting elements by tag name
* `getElementById()` — selecting a single element by ID
* `querySelector()` — selecting the first matching element
* `querySelectorAll()` — selecting all matching elements

#### innerHTML

* Used `innerHTML` to read and update the content of HTML elements

#### Events & Event Listeners

* Learned what an event is (click, mouseover, change, submit, load, etc.)
* Learned what an event listener is and how it runs a function in response to an event
* Practiced `addEventListener("click", ...)` with an alert popup
* Explored other common events: `mouseover`, `change`, `submit`, `load`

#### Day 10 Task — Completing the Calculator Logic (`day9_calculator.html`)

Finished the calculator built on Day 9 by adding full JavaScript functionality:

* `appendToDisplay()` — adds digits/operators to the display, clearing placeholder `0` or `Error`
* `clearDisplay()` — resets the display and history (AC button)
* `backspace()` — removes the last character from the display (⌫ button)
* `calculate()` — evaluates the expression, converting calculator symbols (`×`, `÷`, `−`, `%`) into valid JavaScript operators before using `eval()`
* Wired up all `data-value` and `data-action` buttons dynamically using `querySelectorAll()` and `addEventListener()`
* Added full **keyboard support** (number keys, `+ - * /`, `%`, `Enter`/`=`, `Backspace`, `Escape`) so the calculator works without clicking
* Handled error states (e.g., invalid expressions show `Error`)

---

### Day 11 — `day11.js` · *Synchronous vs Asynchronous JavaScript*

Explored how JavaScript handles synchronous and asynchronous code execution, along with Promises and async/await syntax.

#### Synchronous JavaScript

* Learned that synchronous code executes line by line, in order
* Confirmed execution order using simple `console.log()` statements from start to end of the program

#### Asynchronous Functions

* Simulated fetching data from a server using `setTimeout()`
* Created a `getData()` function that loops through an array of objects (`name`, `role`, `age`, `address`) using `forEach()` and logs each one after a 1-second delay
* Observed that code placed **after** an async function call runs **before** the async callback completes, proving JavaScript doesn't wait for the timeout to finish

#### Promises

* Learned that a Promise represents the eventual completion or failure of an asynchronous task
* Explored the three Promise states:

  * Pending
  * Fulfilled (Resolved)
  * Rejected
* Built a `loginPromise` example that resolves with `"Login successful"` or rejects with `"Login failed"` based on a boolean flag
* Handled the Promise result using `.then()` for success and `.catch()` for errors

#### Async / Await

* Learned that `async` is used to declare a function that returns a Promise
* Learned that `await` pauses execution inside an async function until the Promise resolves or rejects
* Built a `fetchData()` function returning a Promise that resolves after a 6-second delay
* Created an `async function displayData()` that uses `await` to pause until `fetchData()` resolves, then logs the result

---

### Day 12 — `day12.html` + `day12.js` · *Fetch API & CRUD Operations*

Learned how to use the Fetch API to communicate with a server and perform CRUD (Create, Read, Update, Delete) operations, using both `.then()/.catch()` chaining and `async/await` syntax.

#### Fetch API Basics

* Learned that the Fetch API is a built-in JavaScript API used to send HTTP requests and receive responses from a server
* Reviewed the common HTTP methods:

  * `GET` — Retrieve data
  * `POST` — Create new data
  * `PUT` — Update existing data
  * `PATCH` — Partially update data
  * `DELETE` — Remove data
* Practiced against the public [JSONPlaceholder](https://jsonplaceholder.typicode.com/) test API

#### GET Request — Read Data

* Built a `getPosts()` async function to fetch all posts from `/posts`
* Parsed the JSON response with `response.json()`
* Logged the fetched data to the console

#### POST Request — Create Data

* Sent a `POST` request to `/posts` with a JSON body (`title`, `body`, `userId`)
* Set the `Content-Type: application/json` header
* Logged the newly created post returned by the server

#### PUT Request — Update Data

* Sent a `PUT` request to `/posts/1` with updated `title` and `body` fields
* Replaced the existing post data and logged the updated response

#### DELETE Request — Remove Data

* Sent a `DELETE` request to `/posts/1`
* Checked `response.ok` to confirm successful deletion
* Logged a success message on completion

#### Two Approaches Practiced

* **`async/await` with `try...catch`** — used for all CRUD operations (GET, POST, PUT, DELETE) for cleaner, more readable asynchronous code and centralized error handling
* **`.then()` / `.catch()` chaining** — used as an alternative pattern for POST, PUT, and DELETE requests to compare syntax and behavior against `async/await`

---

### Day 13 — `day13.js` · *Arrow Functions, Template Literals, Import/Export & React Setup*

Learned modern ES6 syntax for writing shorter functions and cleaner strings, how JavaScript modules share code between files, and set up my first React project using Vite.

#### Arrow Functions

* Learned that arrow functions are a shorter syntax for writing functions, introduced in ES6 (ECMAScript 2015)
* Wrote a basic arrow function `hello()` that logs a message to the console
* Wrote an arrow function with parameters, `sum(a, b)`, that returns the sum of two numbers
* Learned that a function containing only one `return` statement can be written in an even shorter implicit-return form (e.g. `const sum = (a, b) => a + b;`)

#### Template Literals

* Learned that template literals are strings enclosed in backticks (`` ` ` ``) that allow embedding variables/expressions using `${}`
* Compared traditional string concatenation (`"name " + name`) with template literal syntax (`` `name is ${name} ${surname}` ``)
* Learned why template literals are useful:

  * Cleaner and more readable code
  * Easier string formatting
  * Support for multi-line strings
  * Expression interpolation using `${}`

#### Import and Export

* Learned that `export` allows sharing variables, functions, or classes from one JavaScript file to another, and `import` allows using them in another file
* Explored the two types of exports: **Named Export** and **Default Export**

##### Named Export

* Created and exported `add(a, b)` and `sub(a, b)` functions using named exports in `day13.js`
* Learned that named exports allow multiple values to be exported from the same file
* Learned that named imports must be wrapped in curly braces `{}` and must match the exported name exactly

##### Default Export

* Learned that a file can have only **one** default export
* Learned that default exports are imported without `{}` and can be given any name on import

##### Named vs Default Export — Key Differences

| Named Export | Default Export |
|---|---|
| Multiple exports allowed per file | Only one default export per file |
| Must be imported using `{ }` with the exact same name | Imported without `{ }`, any name allowed |

* Practiced importing `add` and `sub` from `day13.js` into another file using `import { add, sub } from "./day13.js";`
* Called `add(10, 5)` → `15` and `sub(10, 5)` → `5`, and logged both results to the console
* Reinforced that importing the wrong name (e.g. `subtract` instead of `sub`) causes an error, since named imports must exactly match the exported names

#### React Setup with Vite

* Set up a new React project named **`vite-project`** using Vite
* Explored the default Vite + React project structure (`src/`, `App.jsx`, `main.jsx`, `App.css`, `index.css`, `assets/`, `public/`, `vite.config.js`, `eslint.config.js`)
* Created a `components/` folder inside `src/assets/`
* Built my first React component, **`Button.jsx`**, inside `src/assets/components/`

---

### Day 14 — `vite.config.js` + `package.json` + `eslint.config.js` · *Tailwind CSS v4 Integration, React Components & Props*

Configured the **`vite-project`** React app to use **Tailwind CSS v4**, wiring it in directly through Vite's plugin system instead of the older PostCSS/`tailwind.config.js` setup, reviewed the rest of the project's tooling configuration, and expanded the React app with reusable, props-driven components.

#### Tailwind CSS v4 via the Vite Plugin

* Installed `tailwindcss` and the official `@tailwindcss/vite` plugin (both `^4.1.12`) as project dependencies
* Learned that Tailwind v4 no longer requires a separate `postcss.config.js` or `tailwind.config.js` for a basic setup — it plugs straight into the bundler
* Registered `tailwindcss()` inside `vite.config.js` alongside the existing `react()` plugin:

  ```js
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    plugins: [react(), tailwindcss()],
  })
  ```
* Understood that this lets Tailwind scan and generate utility classes automatically during Vite's dev server and build steps

#### Reviewing `package.json`

* Confirmed the standard Vite scripts: `dev`, `build`, `preview`, and `lint`
* Noted the dependency split between runtime `dependencies` (`react`, `react-dom`, `tailwindcss`, `@tailwindcss/vite`) and `devDependencies` (ESLint stack, Vite, type definitions)
* Reviewed the project running on **React 19.2.0** and **Vite 7.1.7**
* Learned about the `allowScripts` field for explicitly permitting a dependency's install scripts (used here for `esbuild`) as a security/consent measure in newer npm tooling

#### Reviewing `package-lock.json`

* Confirmed `lockfileVersion: 3`, the current npm lockfile format used to guarantee reproducible installs
* Verified the top-level `dependencies`/`devDependencies` block in the lockfile mirrors `package.json` exactly (`@tailwindcss/vite`, `react`, `react-dom`, `tailwindcss` as runtime deps; ESLint stack + Vite as dev deps)
* Explored how the lockfile pins **exact resolved versions and integrity hashes** for every transitive package (e.g. the `@babel/*` helper packages pulled in indirectly by the Vite/React/ESLint toolchain), which keeps installs identical across machines
* Learned why committing `package-lock.json` matters for a team project: it prevents "works on my machine" issues caused by minor version drift in nested dependencies

#### Reviewing the ESLint Flat Config (`eslint.config.js`)

* Studied the modern **flat config** format using `defineConfig` and `globalIgnores` from `eslint/config`
* Confirmed `dist` is globally ignored from linting
* Reviewed the rule set applied to all `**/*.{js,jsx}` files:

  * `js.configs.recommended` — base recommended JS rules
  * `reactHooks.configs.flat.recommended` — enforces Rules of Hooks
  * `reactRefresh.configs.vite` — keeps components compatible with Fast Refresh in Vite
* Noted `languageOptions` sets browser globals and enables JSX parsing via `ecmaFeatures: { jsx: true }`

#### Reviewing `index.html`

* Confirmed the Vite entry point: a single `#root` div and a module script pointing to `/src/main.jsx`
* Noted the favicon link and viewport meta tag used for responsive rendering

#### Environment & Git Hygiene

* Reviewed the project's `.env` file for environment-specific variables — currently empty, kept as a placeholder for future secrets/config (e.g. API base URLs, keys) and correctly excluded from version control
* Reviewed `.gitignore` in detail and confirmed it excludes several categories of files from Git tracking:

  * **Build output & dependencies**: `node_modules`, `dist`, `dist-ssr`
  * **Log files**: `logs`, `*.log`, `npm-debug.log*`, `yarn-debug.log*`, `yarn-error.log*`, `pnpm-debug.log*`, `lerna-debug.log*`
  * **Editor/IDE files**: `.vscode/*` (while still tracking `.vscode/extensions.json` for shared editor recommendations), `.idea`, `*.suo`, `*.ntvs*`, `*.njsproj`, `*.sln`, `*.sw?`
  * **OS files**: `.DS_Store`
  * **Local/env files**: `*.local`, `.env`
* Learned that keeping `.vscode/extensions.json` un-ignored is a common convention so a team can still share recommended VS Code extensions even while ignoring personal editor settings

#### Building Out React Components — Props, Composition & Styling

Expanded the `vite-project` React app beyond the single `Button.jsx` component from Day 13 by building a small component tree with props and wiring everything together in `App.jsx`.

* **`User.jsx`** — created a new functional component inside `src/assets/components/` that accepts `name` and `surname` as **props** (destructured directly in the function signature: `function User({ name, surname })`) and renders them inside `<h2>`/`<h3>` tags
* **`Button.jsx`** — refined the button component to define a `handleClick` function and wire it up with `onClick={handleClick}`, showing a browser `alert("Button was clicked!")` when the button is clicked — first hands-on practice with **event handling in React** (as opposed to `addEventListener` in vanilla JS from Day 10)
* **`App.jsx`** — updated the root component to:

  * Import both `User` and `Button` from `./assets/components/`
  * Import `App.css` for styling
  * Declare local variables (`name`, `surname`) and pass them down to `User` as props: `<User name={name} surname={surname} />`
  * Render `Button` alongside `User` inside a wrapping `<div className="app">`
  * Learned this demonstrates **component composition** — building a UI out of small, focused components combined inside a parent component
* **`App.css`** — added custom styling for the app shell and button:

  * `.app` class centers text, sets a `sans-serif` font, and adds top margin for the page shell
  * `button` styles: padding, font size, pointer cursor, rounded corners, no border, and a custom indigo background (`#4f46e5`) with light blue text (`rgb(188, 216, 255)`)
  * `button:hover` styles: darkens the background to a deeper indigo (`#4338ca`) for a hover feedback effect
  * Reinforced that plain CSS files can be imported directly into a component (`import "./App.css"`) alongside/instead of Tailwind utility classes
* Reviewed the project's `.env` file for environment-specific variables (kept out of version control)
* Reviewed `.gitignore` to confirm build output and dependency folders (e.g. `node_modules`, `dist`) are excluded from Git tracking

---

### Day 15 — `User.jsx` + `App.jsx` + `day14&15.js` · *Props Destructuring, Conditional Rendering & React Hooks*

Went deeper into props by learning destructuring with default values and conditional rendering, then moved into React Hooks — `useState` and `useEffect` — and built a working Stopwatch component.

#### `User.jsx` — Props Destructuring & Conditional Rendering

* Refactored `User` to destructure props directly out of `props` inside the function body instead of the function signature:

  ```js
  const { name = "Unknown User", age, college, Semester, semester, skills = [] } = props;
  ```
* Learned how to give props **default values** (`name = "Unknown User"`, `skills = []`) so the component doesn't break when a prop isn't passed
* Handled a prop that could be passed with either casing by accepting both `Semester` and `semester` and picking whichever one is defined:

  ```js
  const currentSemester = Semester || semester;
  ```
* Learned **conditional rendering** using the `&&` operator — a block only renders if the value on the left is truthy:

  * `{age && <p>...</p>}` — only shows Age if it was passed
  * `{college && <h2>...</h2>}` — only shows College if it was passed
  * `{currentSemester && <h3>...</h3>}` — only shows Semester if either version of the prop was passed
* Rendered the `skills` array using `map()` inside a `<ul>`, giving each `<li>` a `key` from its index
* Used a **ternary operator** to conditionally render either the skills list or a fallback `"No skills provided"` message depending on whether `skills.length > 0`
* Styled the component using Tailwind utility classes (`shadow-lg`, `rounded-2xl`, `border`, background/text colors, spacing utilities)

#### React Hooks — `useState` & `useEffect`

* Learned that `useState` is a React Hook that adds state to a functional component, and returns an array with the current value and a setter function:

  ```js
  const [count, setCount] = useState(0);
  ```
* Learned that calling the setter function tells React to re-render the component with the updated state
* Learned that `useEffect` lets a functional component run **side effects**, and behaves differently depending on its dependency array:

  * No dependency array → runs after every render
  * Empty dependency array `[]` → runs once, after the component mounts
  * Dependency array with values `[count]` → runs whenever one of those values changes
* Reviewed common real-world use cases for `useEffect`: fetching data from APIs, updating the document title, controlling timers (`setTimeout`/`setInterval`), adding/removing event listeners, and syncing with external/browser APIs

#### Counter Example (kept commented as reference)

* Built a simple `Counter` component using `useState` with an `increase()` function that calls `setCount(count + 1)` on every button click
* Kept this commented out in the file as a quick reference for basic `useState` usage

#### Stopwatch Example — `App.jsx`

* Built a working **Stopwatch** component using both `useState` and `useEffect` together:

  * `seconds` state tracks the elapsed time, `running` state tracks whether the stopwatch is active
  * `useEffect` starts a `setInterval` that increments `seconds` every 1000ms whenever `running` is `true`, and depends on `[running]` so it re-runs whenever that value changes
  * Used the **cleanup function** (`return () => clearInterval(timer)`) to clear the previous interval before starting a new one / when the component unmounts, preventing multiple intervals from stacking up
  * Added **Start** and **Stop** buttons that call `setRunning(true)` and `setRunning(false)` respectively
* Learned why the functional update form `setSeconds((prev) => prev + 1)` is used inside `setInterval` — it always works off the latest state instead of a stale closed-over value

---

### Day 16 — `Timer.jsx` + `context/UserContext.jsx` + `Navbar.jsx` + `Menu.jsx` + `Profile.jsx` + `App.jsx` · *React Lifecycle & Context API*

Learned about the React component lifecycle (mounting, updating, unmounting) using `useEffect`, and learned how to share data across components without prop drilling using the **Context API**. Reorganized the `components/` folder with new components and added a dedicated `context/` folder.

#### React Lifecycle — `Timer.jsx`

* Built a `Timer` component that uses `useState` to track `seconds` and `useEffect` to start a `setInterval` that increments `seconds` every 1000ms
* Used the functional update form `setSeconds((prev) => prev + 1)` inside the interval, consistent with the Stopwatch pattern from Day 15
* Passed an **empty dependency array `[]`** to `useEffect` so the interval is set up only once, right after the component **mounts**
* Returned a **cleanup function** from `useEffect` (`return () => { clearInterval(timer); console.log(" component unMounted") }`) that clears the interval and logs a message when the component **unmounts**
* Learned the three lifecycle phases in the context of this example:

  * **Mount** — component is created and added to the DOM (interval starts, `Timer` first appears)
  * **Update** — component re-renders when `seconds` state changes every second
  * **Unmount** — component is removed from the DOM (interval is cleared to avoid memory leaks / duplicate timers)
* Wrote a commented-out lifecycle demo in `App.jsx` where a `showTimer` boolean state, toggled by a button, conditionally renders `{showTimer && <Timer />}` — clicking "Start Timer" mounts `Timer`, clicking "Stop Timer" unmounts it

#### React Context API — `context/UserContext.jsx`

* Created a new `context/` folder inside `src/` to keep context files separate from regular components
* Built `UserContext.jsx` using `createContext()` from React:

  ```js
  import { createContext } from "react";

  const UserContext = createContext();

  export default UserContext;
  ```
* Learned that the Context API lets data be shared across components **without passing props manually through every level** (avoiding "prop drilling")

#### Providing Context — `App.jsx`

* Imported `UserContext` and the `Navbar` component into `App.jsx`
* Declared a `name` variable (`"Darshana"`) to share across the component tree
* Wrapped `Navbar` in a `UserContext.Provider`, passing `name` as the `value`:

  ```jsx
  <UserContext.Provider value={name}>
    <Navbar />
  </UserContext.Provider>
  ```
* Learned that everything rendered **inside** the `Provider` — no matter how deeply nested — can read the shared `value`

#### Consuming Context — `Navbar.jsx`, `Menu.jsx` & `Profile.jsx`

* Built a small nested component chain to prove context works across multiple levels without passing props at each step:

  * **`Navbar.jsx`** — a simple wrapper component that renders `Menu`, without needing to know about `UserContext` at all
  * **`Menu.jsx`** — imports `useContext` and `UserContext`, calls `useContext(UserContext)` to read the shared `name` value directly, renders `Profile`, and displays `"welcome {user1} in menu"`
  * **`Profile.jsx`** — also calls `useContext(UserContext)` independently and displays `"welcome {user}"`
* Learned that both `Menu` and `Profile` can consume the **same** context value even though neither received it as a prop from its parent — this is the core benefit of the Context API over prop drilling
* Confirmed the full render tree for today's example: `App` → `UserContext.Provider` → `Navbar` → `Menu` → `Profile`, with `Menu` and `Profile` both pulling `"Darshana"` straight from context

#### File Organization

* Split components across two folders inside `src/`:

  * `assets/components/` — `Button.jsx`, `User.jsx`, `Menu.jsx`, `Navbar.jsx`, `Profile.jsx`, `Timer.jsx`
  * `context/` — `UserContext.jsx`
* Practiced relative import paths across folders, e.g. `import UserContext from '../context/userContext.jsx'` from inside `components/`

---

### Day 17 — `day14,15,16&17.js` + `Profile.jsx` + `emaple.md` · *Fetch API in React*

Learned how to fetch data from an external server inside a React component by combining the Fetch API (from Day 12) with `useState` and `useEffect` (from Day 15), and sketched out a component-tree plan for an upcoming multi-page layout.

#### What is an API?

* Learned that **API (Application Programming Interface)** allows two applications to communicate with each other
* Understood that APIs are used to get data from a server, following the flow: `React App <------> API Server`

#### What is the Fetch API?

* Learned that `fetch()` is a built-in JavaScript method used to get data from an API
* Reviewed the basic syntax:

  ```js
  fetch("API_URL")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  ```

#### Why Use the Fetch API?

* Get data from the server
* Display dynamic data
* Connect frontend with backend
* Update UI with live data

#### `useEffect` + Fetch API

* Learned that `useEffect()` is used for fetching because **fetching data is a side effect**
* Passed an empty dependency array `[]` so the fetch runs once, right after the component mounts:

  ```js
  useEffect(() => {
    fetch("API_URL")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  ```

#### `useState` + Fetch API

* Learned that `useState` is used to store the fetched data:

  ```js
  const [users, setUsers] = useState([]);
  ```

#### Steps of the Fetch API (in React)

1. Create state using `useState()`
2. Use `useEffect()`
3. Call `fetch()`
4. Convert the response into JSON
5. Store the data using `setState()`
6. Display the data using `map()`

#### Example — `Users` Component

Built a `Users` component that fetches a list of users from the JSONPlaceholder API and renders them:

```jsx
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
```

* Fetched data from `https://jsonplaceholder.typicode.com/users` inside `useEffect`
* Stored the response in `users` state using `setUsers(data)`
* Rendered each user's `name` and `email` with `map()`, giving each item a `key` from `user.id`

#### Loading State

* Learned to track a `loading` state so the UI can show a loading indicator while data is being fetched:

  ```js
  const [loading, setLoading] = useState(true);
  ```
* `loading` stays `true` while data is fetching, and gets set to `false` once the data has arrived

#### Error Handling

* Learned to track an `error` state so failed requests can be handled gracefully:

  ```js
  const [error, setError] = useState(null);
  ```
* If fetching fails, the error gets stored inside `setError()` instead of crashing the component

#### Common Use Cases of the Fetch API

* Users List
* Products
* Weather App
* News App
* Dashboard
* Blog Website

#### Revisited: Async/Await, try...catch & CRUD (from Day 11 & Day 12)

Reinforced earlier concepts alongside the new React-specific fetch pattern:

* **`async` / `await`** — `async` marks a function as asynchronous, and `await` pauses execution until a Promise resolves
* **`try...catch`** — `try` runs the code, `catch` handles any errors that occur
* **CRUD** — Create, Read, Update, Delete, the four operations commonly performed against an API
* **HTTP Methods** — `GET` (read), `POST` (create), `PUT` (update), `PATCH` (update specific fields), `DELETE` (remove)
* **GET Request** — fetches (reads) data from the server
* **POST Request** — creates new data, sending a JSON body with the `Content-Type: application/json` header
* **`JSON.stringify()`** — converts a JavaScript object into a JSON string before sending it to the server in a request body
* **Controlled Inputs** — used `useState` to control form inputs (`title`, `body`) with `value` and `onChange={(e) => setTitle(e.target.value)}`
* **JSONPlaceholder API** — reviewed the free fake REST API (`https://jsonplaceholder.typicode.com/`) used for learning and testing, e.g. `https://jsonplaceholder.typicode.com/posts`

#### Complete Fetch API Flow (Reference)

1. Create state using `useState()`
2. Create an async function
3. Use `fetch()` to request data
4. Use `await response.json()`
5. Store the data using `setState()`
6. Display data using `map()`
7. Handle errors using `try...catch`
8. Use `POST` to add new data
9. Use `PUT`/`PATCH` to update data
10. Use `DELETE` to remove data

#### `Profile.jsx` — Updated for Day 17

Updated the `Profile` component (originally built on Day 16) to read a new value from `UserContext`:

```jsx
import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
  const age = useContext(UserContext)
  return (
    <>
      <h1>MY age is {age}</h1>
    </>
  )
}

export default Profile
```

* Reused `useContext(UserContext)` from Day 16, now reading an `age` value instead of `name`
* Reinforced that any value can be passed through `UserContext.Provider`, and any consuming component can pull it out with `useContext()`

#### `emaple.md` — Component Tree Planning

* Created a new planning file, `emaple.md`, to sketch out the component structure for an upcoming multi-section app before writing any code:

  ```text
  App() - Navbar() - Home(), Aboutuse(), Features()
  Home() --- Buttton()
  ```
* Planned that `App` will render a `Navbar` alongside `Home`, `Aboutuse` (About Us), and `Features` sections
* Planned that `Home` will render a `Button` component nested inside it
* Learned the value of sketching a component tree on paper/markdown **before** implementation, to plan composition and prop flow ahead of time

---

## 🛠️ Technologies Used

| Technology        | Usage                                                |
| ----------------- | ---------------------------------------------------- |
| HTML5             | Structure and semantic markup                        |
| CSS3              | Styling, layouts, and responsiveness                 |
| Tailwind CSS      | Utility-first CSS framework (v4, integrated via Vite plugin) |
| JavaScript (ES6+) | Logic, conditions, loops, functions, arrays, objects, DOM, events, async programming, Fetch API, arrow functions, template literals, modules |
| React.js          | Component-based UI development, props, destructuring, conditional rendering, composition, event handling, Hooks (`useState`, `useEffect`), lifecycle, Context API & Fetch API integration via Vite |
| Vite              | Fast React project scaffolding, dev server & build tool (v7) |
| ESLint            | Flat-config linting for JS/JSX, React Hooks & Fast Refresh rules |
| Node.js           | Running JavaScript in terminal                       |
| Google Fonts      | Typography                                           |

---

## 🚀 How to View

Clone the repository:

```bash
git clone https://github.com/Darshana-Bhandari/Internship.git
cd Internship
```

Open any `.html` file directly in your browser.

For JavaScript files:

```bash
node day6.js
node Day7.js
node day8.js
node day9.js
node day11.js
node day12.js
node day13.js
```

For the React project:

```bash
cd vite-project
npm install
npm run dev
```

---

## 📈 Learning Journey

```text
Day 1  → HTML basics & personal page
Day 2  → Forms, lists, links & a real booking system
Day 3  → Semantic HTML, tables & CSS introduction
Day 4  → Full healthcare website with HTML & CSS
Day 5  → Tailwind CSS framework
Day 6  → JavaScript fundamentals & Node.js setup
Day 7  → Switch statements, loops & grade calculator
Day 8  → Functions, scope, objects, arrays & while loops
Day 9  → Advanced array methods (map, filter, reduce, splice, sort) + Calculator UI with Tailwind CSS
Day 10 → DOM manipulation, element selection methods, event listeners + completed Calculator logic
Day 11 → Synchronous vs Asynchronous JavaScript, Promises & Async/Await
Day 12 → Fetch API & CRUD operations (GET, POST, PUT, DELETE) with async/await and .then()/.catch()
Day 13 → Arrow functions, template literals, named & default exports/imports + React project setup with Vite (first component: Button.jsx)
Day 14 → Tailwind CSS v4 integrated into the Vite React project via @tailwindcss/vite; full review of package.json, package-lock.json, the ESLint flat config, index.html, and env/git configuration; built out User.jsx & Button.jsx with props and event handling, composed them in App.jsx, and styled the app with App.css
Day 15 → Props destructuring with default values & conditional rendering in User.jsx; learned React Hooks (useState & useEffect); built a Counter example and a working Stopwatch component (Start/Stop) with interval cleanup in App.jsx
Day 16 → React component lifecycle (mount/update/unmount) with Timer.jsx; introduced the Context API with a new context/ folder (UserContext.jsx); wrapped Navbar in UserContext.Provider in App.jsx; consumed shared context data in nested Menu.jsx and Profile.jsx components without prop drilling
Day 17 → Fetch API in React using useEffect + useState; built a Users component fetching from JSONPlaceholder; learned loading & error states; revisited async/await, try...catch, CRUD & HTTP methods in a React context; updated Profile.jsx to read age from UserContext; sketched an App/Navbar/Home/About Us/Features component tree in emaple.md
Day 18+ → Coming soon...
```

---

## 🎯 Internship Goals

* [x] Learn core HTML structure and tags
* [x] Build forms and interactive UI components
* [x] Apply CSS styling (inline, internal, external)
* [x] Use Tailwind CSS
* [x] Learn JavaScript fundamentals
* [x] Learn JavaScript control flow (switch, loops)
* [x] Set up Node.js environment
* [x] Learn JavaScript functions
* [x] Learn JavaScript arrays
* [x] Learn Advanced Array Methods
* [x] Learn JavaScript objects
* [x] Understand variable scope
* [x] DOM Manipulation
* [x] Asynchronous JavaScript (Promises & Async/Await)
* [x] Fetch API & CRUD Operations
* [x] ES6 Advanced Concepts (Arrow Functions, Template Literals, Modules)
* [x] React.js (project setup & first component)
* [x] Tailwind CSS v4 + Vite plugin integration
* [x] React props & component composition
* [x] Props destructuring & conditional rendering
* [x] React Hooks (useState & useEffect)
* [x] React Component Lifecycle (mount, update, unmount)
* [x] React Context API
* [x] Fetch API in React (useEffect + useState, loading & error states)
* [ ] Express.js
* [ ] MongoDB
* [ ] Full MERN Stack Projects

---

## ⭐ Progress Status

**Current Progress:** Day 17 Completed

### Skills Learned So Far

* HTML5
* CSS3
* Tailwind CSS (v3 & v4)
* JavaScript Basics
* Operators
* Conditionals
* Switch Statements
* Loops
* Functions
* Scope
* Objects
* Arrays
* Advanced Array Methods
* forEach()
* map()
* filter()
* reduce()
* splice()
* Node.js Fundamentals
* DOM Manipulation
* Element Selection (querySelector, querySelectorAll, getElementsByClassName, getElementsByTagName)
* innerHTML
* Event Listeners (click, mouseover, change, submit, load)
* Synchronous vs Asynchronous JavaScript
* Promises (pending, fulfilled, rejected)
* Promise handling with `.then()` / `.catch()`
* Async/Await syntax
* Fetch API (GET, POST, PUT, DELETE)
* CRUD operations with a REST API
* Arrow Functions
* Template Literals
* Named & Default Exports/Imports (ES Modules)
* React.js project setup with Vite
* Building React components (`Button.jsx`, `User.jsx`)
* React props & component composition (`App.jsx`)
* React event handling (`onClick`)
* Tailwind CSS v4 setup via `@tailwindcss/vite`
* Custom component styling with plain CSS (`App.css`)
* ESLint flat config (`eslint/config`, React Hooks & React Refresh rules)
* npm lockfiles (`package-lock.json`) and reproducible installs
* Props destructuring with default values
* Conditional rendering (`&&` and ternary operators)
* React Hooks — `useState`
* React Hooks — `useEffect` (dependency arrays & cleanup functions)
* Building a Stopwatch with `setInterval`/`clearInterval`
* React Component Lifecycle — mounting, updating & unmounting
* React Context API — `createContext()`, `Context.Provider`, `useContext()`
* Sharing data across nested components without prop drilling
* Fetch API in React with `useEffect` + `useState`
* Fetching and rendering live data from a REST API (JSONPlaceholder Users)
* Loading state pattern for async data fetching
* Error handling pattern with `useState` for failed requests
* Planning component structure/composition ahead of implementation (`emaple.md`)

---

*This repository is actively updated as my MERN Stack internship progresses. Every commit reflects a new learning milestone and practical implementation.*

*Thank youu*
