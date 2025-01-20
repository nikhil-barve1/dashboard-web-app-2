import { Navbar } from "./components/Navbar/Navbar.js";
import DashboardNavbar from "./Pages/Dashboard/DashboardNavbar.js";

export function loadNavbar() {
  const navbarContainer = document.getElementById("navbar-container");
  const path = window.location.pathname;

  // Load Dashboard navbar if the path is /dashboard
  if (path === "/dashboard") {
    navbarContainer.innerHTML = DashboardNavbar();
  } else {
    // Otherwise, load the standard Navbar
    navbarContainer.innerHTML = Navbar();
  }
}
