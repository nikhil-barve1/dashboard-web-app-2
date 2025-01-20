export default function DashboardNavbar() {
  const [getIsDropdownOpen, setIsDropdownOpen, subscribeToDropdown] =
    window.useState(false);
  const [getUser, setUser, subscribeToUser] = window.useState(null);

  // Fetch logged-in user details
  const fetchUser = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedInUser);
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    const currentState = getIsDropdownOpen();
    setIsDropdownOpen(!currentState); // Update state immediately
  };

  // Close dropdown on outside click
  const handleOutsideClick = (event) => {
    if (
      !event.target.closest(".drop-down") &&
      !event.target.closest(".profile-container")
    ) {
      setIsDropdownOpen(false);
    }
  };

  // Add event listeners
  const addEventListeners = () => {
    const profileContainer = document.querySelector(".profile-container");
    const logOutButton = document.querySelector("#logOutButton");

    if (profileContainer) {
      profileContainer.addEventListener("click", toggleDropdown);
    }

    if (logOutButton) {
      logOutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        alert("You have logged out!");
        window.navigateTo("/");
      });
    }

    document.addEventListener("mousedown", handleOutsideClick);
  };

  // Render HTML
  const render = () => {
    const isDropdownOpen = getIsDropdownOpen();
    const user = getUser();
    return `
        <header class="section-container navbar-header">
          <div class="logo-section">
            <a href="/dashboard" onclick="navigateTo('/dashboard')">
              <h1 class="logo-link">Shop Name</h1>
            </a>
          </div>
  
          <div class="navbar-notification-profile-container">
            <div class="search-bar"></div>
  
            <div class="notification-profile-section">
              <div class="notification" title="Notifications">
                <i id="bell" class="fa-regular fa-bell"></i>
                <span class="notification-count">4</span>
              </div>
            
              <div class="profile-container" title="Profile">
                <img class="profile-img" src="./src/assets/images/profile_image.png" alt="profile-photo" />
  
                <div class="user-info">
                  <p class="user-name">${user?.name || "User Name"}</p>
                  <p class="user-email">${user?.email || "user@example.com"}</p>
                </div>
                <img class="down-arrow" src="./src/assets/icons/down_arrow.svg" alt="down arrow">
              </div>
            </div>
            
            <!-- Dropdown Menu -->
            <div class="drop-down" style="display: ${
              isDropdownOpen ? "block" : "none"
            };">
              <ul>
                <li>My Profile</li>
                <li id="logOutButton">Log Out</li>
              </ul>
            </div>
          </div>
        </header>
      `;
  };

  // Initialize dropdown logic
  const initialize = () => {
    fetchUser();
    addEventListeners();
  };

  // Subscribe to state changes and re-render
  subscribeToDropdown(() => {
    const navbarContainer = document.getElementById("navbar-container");
    navbarContainer.innerHTML = render();
    addEventListeners(); // Reattach event listeners
  });

  subscribeToUser(() => {
    const navbarContainer = document.getElementById("navbar-container");
    navbarContainer.innerHTML = render();
    addEventListeners(); // Reattach event listeners
  });

  // Initial render and setup
  initialize();
  return render();
}
