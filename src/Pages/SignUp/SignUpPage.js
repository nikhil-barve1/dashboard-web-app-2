export default function SignUpPage() {
  const render = () => `
  <div class="container">
  <h1 class="title">Sign Up</h1>
  <div class="form-container">
    <div class="input-container-box">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter Full Name" />
    </div>
    <div class="input-container-box">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Email" />
    </div>
    <div class="input-container-box">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Password" />
    </div>
    <button id="signUpButton" class="sign-up-button">Sign Up</button>
    <p class="login-text">
      Already have an account? <a class="login-link" onclick="navigateTo('/login')">
      Login
      </a>
    </p>
  </div>
</div>

  `;

  const handleSignUp = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUsers.some((user) => user.email === email)) {
      alert("Email already exists. Please use a different email.");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    alert("Sign up successful! You can now log in.");
    navigateTo("/login");
  };

  document.getElementById("content-container").innerHTML = render();
  document
    .getElementById("signUpButton")
    .addEventListener("click", handleSignUp);
}
