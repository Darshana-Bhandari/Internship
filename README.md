# MERN Stack Internship

This repository documents my day-by-day progress during my MERN Stack internship. Each commit represents a new day of learning, starting from the fundamentals of HTML & CSS and progressing toward JavaScript and full-stack web development.

---

## 📁 Repository Structure

```
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
├── package.json                 # Node.js project setup
├── package-lock.json            # Node.js dependency lock file
└── internship/                  # Additional internship files/resources
```

---

##  Daily Progress

### Day 1 — `darsu.html` · *Introduction to HTML*
Built a personal introduction page covering:
- Basic HTML document structure (`<!DOCTYPE>`, `<head>`, `<body>`)
- Headings, paragraphs, and images
- Unordered lists for skills
- Contact information section

---

### Day 2 — `day2.html` · *HTML Core Elements*
Practiced fundamental HTML tags:
- All heading levels (`<h1>` through `<h6>`)
- Paragraphs, images, and anchor links
- Ordered and unordered lists
- HTML forms with inputs (text, email, password, phone, radio, select, checkbox)
- Form submission button

**Day 2 Task — `day2_ticket.html` · *Movie Ticket Booking Form***  
Built a complete Online Movie Ticket Booking System form with:
- Personal details (name, email, phone)
- Movie, date, and show time selection dropdowns
- Ticket quantity input
- Seat type selection (Regular / VIP / Premium) via radio buttons
- Food add-ons (Popcorn, Cold Drink, Burger) via checkboxes
- Special request textarea
- Submit and Reset buttons

---

### Day 3 — `day3.html` · *Semantic HTML & CSS Introduction*
Introduced semantic HTML and CSS styling:
- Semantic elements: `<header>`, `<nav>`, `<table>`
- Internal CSS styling (`<style>` tag in `<head>`)
- Inline CSS on individual elements
- External CSS link (`<link rel="stylesheet">`)
- HTML tables with `<thead>`, `<th>`, `<tr>`, `<td>`
- Navigation bar with anchor links

---

### Day 4 — `day4.html` + `day4.css` · *Full Healthcare Website — MedCare*
Built a complete, multi-section healthcare website with external CSS:

**Sections covered:**
- **Header** — Sticky navbar with logo and navigation links
- **Hero** — Full-width landing section with stats (15K+ patients, 40+ doctors, 98% satisfaction)
- **About** — Company history with animated progress bars
- **Services** — 6-card grid (Cardiology, Neurology, Pediatrics, Orthopedics, Ophthalmology, General Medicine)
- **Doctors** — Doctor profile cards with ratings and case counts
- **Departments** — Department pills/badges (ICU, Emergency, OPD, Pharmacy, etc.)
- **Appointment Booking** — Two-column layout with perks and a booking form
- **Patient Records** — HTML table with status badges
- **Testimonials** — Patient review cards with star ratings
- **Contact** — Contact info cards (address, phone, email, hours)
- **Footer** — Branded footer

**CSS skills used:** Flexbox, Grid layout, CSS variables, hover effects, progress bars, badge components, responsive design.

---

### Day 5 — `day5carepluse_tailwind.html` · *CarePlus CMS with Tailwind CSS*
Rebuilt a clinic management system UI using **Tailwind CSS** (utility-first framework):

**Features:**
- Sticky header with logo and responsive navigation
- Hero section with dashboard overview stats (38 appointments, 12 doctors)
- Services grid (General Consultation, Dental, Pediatrics, Lab, Vaccination, Emergency)
- Doctors table with department and availability status
- Patient Registration form with a clean grid layout
- Contact section and footer

**New skills learned:** Tailwind CSS utility classes, CDN-based Tailwind setup, responsive grid with `md:grid-cols-*`, backdrop blur effects, gradient backgrounds.

---

### Day 6 — `day6.js` · *JavaScript Fundamentals*
Started JavaScript! Covered core language concepts:

**Variables & Data Types**
- `let` (reassignable) vs `const` (fixed) declarations
- Data types: `number`, `string`, `boolean`, `undefined`, `null`
- Using `typeof` to check variable types

**Operators**
- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Comparison: `==`, `!=`, `>=`, `<=`
- Logical: `&&` (AND), `||` (OR)
- Assignment / compound operators: `+=`, `-=`

**Conditionals**
- `if / else` — voting eligibility checker (age >= 18)
- `if / else if / else` — grade classifier based on marks

**Node.js Setup**
- Initialized a Node.js project (`package.json`, `package-lock.json`)
- Running JavaScript outside the browser with Node.js

---

### Day 7 — `Day7.js` + `day7_task.js` · *Switch Statements & Loops*
Continued JavaScript with control flow and loops:

**Switch Statements (`Day7.js`)**
- Day-of-week finder using `switch(day)` with `prompt()` input
- Calculator using switch — Addition, Subtraction, Multiplication, Division
- Mark-to-grade converter using `switch(Math.floor(marks/10))`

**Loops (`Day7.js`)**
- `for` loop — printed a message 100 times
- Sum of natural numbers up to N using a `for` loop (e.g., sum up to 77)

**Day 7 Task — `day7_task.js` · *Grade Calculator with Switch(true)***
Built an interactive grade calculator using the `switch(true)` pattern with `prompt()`:
- Grade A+ → marks >= 90
- Grade A  → marks >= 80
- Grade B  → marks >= 70
- Grade C  → marks >= 60
- Grade D  → marks >= 50
- Grade F  → below 50

---

## 🛠️ Technologies Used

| Technology | Usage |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, Flexbox, Grid, animations |
| Tailwind CSS | Utility-first styling (Day 5) |
| JavaScript (ES6+) | Variables, operators, conditionals, loops (Day 6–7) |
| Node.js | Running JavaScript in the terminal (Day 6+) |
| Google Fonts | Typography (Inter font family) |

---

## 🚀 How to View

Since these are plain HTML/CSS/JS files, no installation needed for most files:

```bash
git clone https://github.com/Darshana-Bhandari/Internship.git
cd Internship
```

- Open any `.html` file directly in your browser.
- For `day4.html`, keep `day4.css` in the same folder.
- For JS files, run in terminal with Node.js:
  ```bash
  node day6.js
  node Day7.js
  ```

---

## 📈 Learning Journey

```
Day 1 → HTML basics & personal page
Day 2 → Forms, lists, links & a real booking system
Day 3 → Semantic HTML, tables & CSS intro
Day 4 → Full multi-section website with external CSS
Day 5 → Tailwind CSS framework
Day 6 → JavaScript: variables, data types, operators, conditionals + Node.js setup
Day 7 → JavaScript: switch statements, loops & grade calculator task
Day 8+ → (Coming soon...)
```

---

## 🎯 Internship Goals

- [x] Learn core HTML structure and tags
- [x] Build forms and interactive UI components
- [x] Apply CSS styling (inline, internal, external)
- [x] Use a CSS framework (Tailwind CSS)
- [x] Learn JavaScript fundamentals (variables, operators, conditionals)
- [x] Learn JavaScript control flow (switch, loops)
- [x] Set up Node.js environment
- [ ] JavaScript functions, arrays & objects
- [ ] DOM manipulation
- [ ] Build with React.js
- [ ] Connect to a backend (Node.js + Express)
- [ ] Work with MongoDB

---

*This repository is actively updated as the internship progresses. ⭐ Star it to follow along!*
