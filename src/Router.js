import { loadNavbar } from "./App.js";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import LoginPage from "./Pages/Login/LoginPage.js";
import SignUpPage from "./Pages/SignUp/SignUpPage.js";

export function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  loadPage(path);
}

function loadPage(path) {
  const routes = {
    "/": LoginPage, // Home page (Login page)
    "/login": LoginPage, // Login page
    "/signup": SignUpPage, // Signup page
    "/dashboard": Dashboard, // Dashboard page
  };

  const renderPage = routes[path] || routes["/"]; // Default to LoginPage if route is not found
  renderPage(); // Call the function to render the page content

  loadNavbar(); // Load Navbar dynamically after the content
}

// Handle browser back/forward actions
window.onpopstate = () => loadPage(window.location.pathname);

// Initialize router on page load
document.addEventListener("DOMContentLoaded", () => {
  loadPage(window.location.pathname); // Load the page based on current URL
});

// Attach functions to the global `window` object
window.navigateTo = navigateTo;
