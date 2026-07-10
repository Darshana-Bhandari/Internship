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
├── package.json                 # Node.js project setup
├── package-lock.json            # Node.js dependency lock file
├── vite-project/                # Day 13 — React project scaffolded with Vite
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── components/
│   │   │   │   ├── Button.jsx   # Day 13/14 — Button component with onClick handler
│   │   │   │   └── User.jsx     # Day 14 — Props-based component (name & surname)
│   │   │   ├── hero.png
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   ├── App.css              # Day 14 — Styling for the app shell & button
│   │   ├── App.jsx              # Day 14 — Composes User & Button components
│   │   ├── day13.js
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

---

## 🛠️ Technologies Used

| Technology        | Usage                                                |
| ----------------- | ---------------------------------------------------- |
| HTML5             | Structure and semantic markup                        |
| CSS3              | Styling, layouts, and responsiveness                 |
| Tailwind CSS      | Utility-first CSS framework (v4, integrated via Vite plugin) |
| JavaScript (ES6+) | Logic, conditions, loops, functions, arrays, objects, DOM, events, async programming, Fetch API, arrow functions, template literals, modules |
| React.js          | Component-based UI development, props, composition, and event handling (via Vite) |
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
Day 15+ → Coming soon...
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
* [ ] Express.js
* [ ] MongoDB
* [ ] Full MERN Stack Projects

---

## ⭐ Progress Status

**Current Progress:** Day 14 Completed

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

---

*This repository is actively updated as my MERN Stack internship progresses. Every commit reflects a new learning milestone and practical implementation.*

*Thank youu*
