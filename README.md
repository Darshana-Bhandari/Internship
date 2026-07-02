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
├── package.json                 # Node.js project setup
├── package-lock.json            # Node.js dependency lock file
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

## 🛠️ Technologies Used

| Technology        | Usage                                                |
| ----------------- | ---------------------------------------------------- |
| HTML5             | Structure and semantic markup                        |
| CSS3              | Styling, layouts, and responsiveness                 |
| Tailwind CSS      | Utility-first CSS framework                          |
| JavaScript (ES6+) | Logic, conditions, loops, functions, arrays, objects, DOM, events |
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
Day 11+ → Coming soon...
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
* [ ] ES6 Advanced Concepts
* [ ] React.js
* [ ] Express.js
* [ ] MongoDB
* [ ] Full MERN Stack Projects

---

