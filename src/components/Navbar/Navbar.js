export const Navbar = () => {
  return `
    <header class="section-container navbar-header">
      <a href="/" onclick="event.preventDefault(); navigateTo('/');">
        <h1 class="nav-a-h1">Shop Name</h1>
      </a>
      <nav>
        <a href="/login" onclick="event.preventDefault(); navigateTo('/login');">
          <button class="navbar-btns" title="Login">
            <span>Login</span>
              <i id="login-icon" class="fa-solid fa-right-to-bracket"></i>           
          </button>
        </a>
        <a href="/signup" onclick="event.preventDefault(); navigateTo('/signup');">
          <button class="navbar-btns" title="Sign Up">
            <span>Sign Up</span>
              <i id="signup-icon" class="fa-solid fa-user-plus"></i>
          </button>
        </a>
      </nav>
    </header>
  `;
};
