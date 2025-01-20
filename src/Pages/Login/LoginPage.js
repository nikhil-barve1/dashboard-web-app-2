export default function LoginPage() {
  const render = () => `
      <div class="container">
        <h1 class="title">Login</h1>
  
        <div class="form-container">
          <div class="input-container-box">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
  
          <div class="input-container-box">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
  
          <a href="#" class="forgot-password">Forgot password?</a>
  
          <button class="login-button" id="loginButton" type="button">Login</button>
  
          <p class="signup-text">
            Don't have an account?
            <a class="signup-link" onclick="navigateTo('/signup')">Sign up</a>
          </p>
        </div>
  
        <div class="demo-info">
          ( For Demo <br />
          Email: "user1@example.com" <br />
          Password: "Password@1234#" )
        </div>
      </div>
    `;

  // State variables
  let email = "";
  let password = "";

  function handleInputChange(event) {
    const { id, value } = event.target;
    if (id === "email") email = value;
    if (id === "password") password = value;
  }

  function handleLogin() {
    // Sample login data (simulate imported data)
    const sampleLoginData = [
      {
        name: "User 1",
        email: "user1@example.com",
        password: "Password@1234#",
      },
      {
        name: "User 2",
        email: "user2@example.com",
        password: "Password@5678#",
      },
    ];

    const localStorageData = JSON.parse(localStorage.getItem("users")) || [];

    const allUsers = [...sampleLoginData, ...localStorageData];

    const user = allUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      // alert("Login Successful!");
      // Simulate navigation to dashboard
      window.navigateTo("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  }

  // Render content
  const contentContainer = document.getElementById("content-container");
  contentContainer.innerHTML = render();

  // Attach event listeners after rendering
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");

  if (emailInput && passwordInput && loginButton) {
    emailInput.addEventListener("input", handleInputChange);
    passwordInput.addEventListener("input", handleInputChange);
    loginButton.addEventListener("click", handleLogin);
  }
}
