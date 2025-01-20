export default function Sidebar(isHamburgerClick) {
  const render = () => `
  <aside id="sidebar" class="${
    isHamburgerClick ? "hamburger" : "hamburger-none"
  }" >

  <!--Menu-->
  <div class="menu-section">
    <h1 class="menu-title">MENU</h1>
    
    <!-- Menu Option -->
    <div id="dashboard-option" class="menu-button">
      <i class="fa-solid fa-signal other-menu-icon"></i>
      Dashboard
    </div>

    <!-- Menu Option -->
    <div id="product-option" class="menu-button"
    >
      <i class="fa-solid fa-cube other-menu-icon"></i>
      Products
    </div>

    <!-- Menu Option -->
    <div id="brand-option" class="menu-button">
      <i class="fa-solid fa-tag other-menu-icon"></i>
      Brands
    </div>

    <!-- Menu Option -->
    <div class="menu-button">
      <i class="fa-regular fa-user other-menu-icon"></i>
      Customer
    </div>

    <!-- Menu Option -->
    <div class="menu-button">
      <i class="fa-solid fa-list other-menu-icon"></i>
      Category
    </div>

    <!-- Menu Option -->
    <div class="menu-button">
      <i class="fa-solid fa-cart-shopping other-menu-icon"></i>
      Orders
    </div>

    <!-- Menu Option -->
    <div class="menu-button">
      <i class="fa-regular fa-comment-dots other-menu-icon"></i>
      Chats
    </div>
  </div>

  <!--other section-->
  <div class="menu-section">
      <h1 class="menu-title">OTHER</h1>
       <!-- Menu Option -->
      <div class="menu-button">
        <i class="fa-solid fa-gear other-menu-icon"></i>
        Settings
      </div>
       <!-- Menu Option -->
      <div class="menu-button" id="logout-option">
        <i class="fa-solid fa-arrow-right-from-bracket other-menu-icon"></i>
        Logout
      </div>
  </div>

  </aside>
  `;

  return render();
}
