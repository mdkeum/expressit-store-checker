# Expressit Store Domain Checker & Product Display

## Overview

This React application is built as part of the Expressit Frontend Developer Internship task. It allows users to:

- Check the availability of a custom store domain.
- Register a new store with necessary details.
- Redirect to a product listing page after successful registration.
- View products in a responsive, eye-catching grid layout.
- Click on products to see detailed information on a dynamic route.

The app demonstrates proficiency in React, React Router, Tailwind CSS, and handling asynchronous API calls.

---

## Features

- **Domain Availability Check:**  
  Users can enter a domain name to check if it is available or already taken.  
- **Store Registration Form:**  
  A clean form captures user details like store name, email, country, currency, and category.  
- **Redirection After Registration:**  
  After successfully creating a store, users are redirected to the product listing page.  
- **Product Grid Display:**  
  Products are displayed in a responsive grid with cards designed for mobile, tablet, and desktop screens.  
- **Product Details:**  
  Clicking a product card opens a detailed product view using dynamic routing.  
- **Error Handling & Placeholders:**  
  Graceful handling of API errors and missing images with fallback placeholders.  

---

## Technologies Used

- React  
- React Router DOM  
- Tailwind CSS  
- Fetch API for backend communication  
- Vite for development server and build tooling

---

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expressit-store-checker.git
   cd expressit-store-checker
2. Install dependencies:
   ```
   npm install
3. Run the development server:
   ```
   npm run dev
4. Open your browser at http://localhost:5173

## Folder Structure
```
src/
├── components/       # Reusable UI components
├── pages/            # Route components like StoreForm, Products, ProductDetail
├── App.jsx           # Main router setup
├── index.css         # Tailwind CSS styles

## Notes
The backend API endpoint for domain checking and store creation may be unstable or unavailable. Fallbacks and error messages are implemented.

Product images fallback to placeholders if the image URL is missing.

Responsive design is achieved using Tailwind CSS grid and flex utilities.

## Future Improvements
Integrate a fully functional backend API.

Add loading spinners and better UX for async operations.

Implement form validation with libraries like React Hook Form or Formik.

Add unit and integration tests.

## Author
Md. Keum – Frontend Developer Intern

## License
This project is for internship/demo purposes only.


<--! 
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

-->
