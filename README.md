# Finance Dashboard UI
live link: https://financial-dashboard-8yq8.vercel.app/

## Overview

This project is a frontend-only Finance Dashboard built to help users track their financial activity in a simple and intuitive way. It provides a clear overview of spending, allows users to explore transactions, and highlights useful insights.

The focus of this project is on UI design, component structure, and state management rather than backend integration.

---

## Features

### Dashboard Overview

* Summary cards for Expenses, Balance, and Top Category
* Clean and responsive layout
* Quick insights panel for financial observations

### Transactions Section

* List of transactions with:

  * Title
  * Category
  * Amount
  * Date
* Search functionality
* Filter by income and expense
* Add transaction (Admin role only)

### Role-Based UI

* Two roles: Viewer and Admin
* Viewer: Can only view data
* Admin: Can add transactions
* Role switching implemented on frontend

### Insights Section

* Highlights key financial observations such as:

  * Highest spending category
  * Monthly spending trend

### Right Panel

* Quick insights
* Upcoming payments
* Savings progress

---

## Tech Stack

* React (Functional Components + Hooks)
* Tailwind CSS for styling
* Lucide Icons

---

## State Management

* React useState for:

  * Transactions data
  * Filters and search
  * Active tab
  * User role

---

## UI/UX Highlights

* Clean and minimal design
* Consistent spacing and typography
* Responsive layout for different screen sizes
* Smooth hover interactions

---

## Setup Instructions

1. Clone the repository

2. Install dependencies
   npm install

3. Start the development server
   npm run dev

---

## Notes

* This is a frontend-only project using mock data
* No backend or authentication is implemented
* Role-based behavior is simulated for demonstration

---

## Future Improvements

* Backend integration
* Persistent database storage
* Advanced analytics and charts
* Authentication system

---

## Author

Developed as part of a frontend assignment to demonstrate UI design, state handling, and component-based architecture.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
