import AddEditBrand from "../../components/Brand/AddEditBrand.js";
import BrandDetails from "../../components/Brand/BrandDetails.js";
import BrandList from "../../components/Brand/BrandList.js";
import DashboardHomePage from "../../components/DashboardComponents/DashboardHomePage.js";
import AddEditProduct from "../../components/Product/AddEditProduct.js";
import ProductDetails from "../../components/Product/ProductDetails.js";
import ProductList from "../../components/Product/ProductList.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import sampleBrandData from "../../data/SampleBrandData.js";
import sampleProductData from "../../data/SampleProductData.js";

export default function Dashboard() {
  const [getIsSidebarOpen, setIsSidebarOpen] = window.useState(false);

  const render = () => `
  <div class="section-container dasboard-container">
    ${Sidebar(getIsSidebarOpen())}
    <div class="dashboard-main-content">
      <div id="hamburger-content"></div>
      <div id="section-content"></div> 
    </div> 
  </div>
`;

  const toggleSidebar = () => {
    setIsSidebarOpen(!getIsSidebarOpen());
    updateSidebarState();
  };

  const updateSidebarState = () => {
    const sidebar = document.getElementById("sidebar");
    const hamburgerContentContainer =
      document.getElementById("hamburger-content");

    if (getIsSidebarOpen()) {
      sidebar.classList.add("hamburger");
      sidebar.classList.remove("hamburger-none");

      hamburgerContentContainer.innerHTML = `
        <button id="hamburger-icon">
          <i class="fa-solid fa-xmark close-icon"></i>
        </button>
      `;
    } else {
      sidebar.classList.add("hamburger-none");
      sidebar.classList.remove("hamburger");

      hamburgerContentContainer.innerHTML = `
        <button id="hamburger-icon">
          <i class="fa-solid fa-bars menu-icon"></i>
        </button>
      `;
    }

    // Re-attach event listener for the updated button
    const hamburgerIcon = document.getElementById("hamburger-icon");
    if (hamburgerIcon) {
      hamburgerIcon.addEventListener("click", toggleSidebar);
    }
  };

  // State variables using custom `useState` function
  const [getActiveSection, setActiveSection] = window.useState("products");

  // Product related state variables
  const [getProductsData, setProductsData] = window.useState([]);
  const [getShowAddEditProduct, setShowAddEditProduct] = window.useState(false);
  const [getProductToEdit, setProductToEdit] = window.useState(null);
  const [getProductDetails, setProductDetails] = window.useState(null);
  const [getProductListQuery, setProductListQuery] = window.useState("");

  // Brand related state variables
  const [getBrandsData, setBrandsData] = window.useState([]);
  const [getShowAddEditBrand, setShowAddEditBrand] = window.useState(false);
  const [getBrandToEdit, setBrandToEdit] = window.useState(null);
  const [getBrandDetails, setBrandDetails] = window.useState(null);
  const [getBrandListQuery, setBrandListQuery] = window.useState("");

  // Product Related things

  // Load products from SampleProductData and set to state
  const loadProducts = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    const mergedProducts = [...sampleProductData, ...storedProducts].reduce(
      (unique, product) => {
        if (!unique.some((p) => p.id === product.id)) unique.push(product);
        return unique;
      },
      []
    );

    setProductsData(mergedProducts);
  };

  // Update Products in Local Storage
  const updateProductsInStorage = (updatedProducts) => {
    const addedProducts = updatedProducts.filter(
      (product) =>
        !sampleProductData.some(
          (sampleProduct) => sampleProduct.id === product.id
        )
    );
    localStorage.setItem("products", JSON.stringify(addedProducts));
    setProductsData(updatedProducts);
  };

  // Load brands from SampleBrandData and set to state
  const loadBrands = () => {
    const storedBrands = JSON.parse(localStorage.getItem("brands")) || [];

    const mergedBrands = [...sampleBrandData, ...storedBrands].reduce(
      (unique, brand) => {
        if (!unique.some((b) => b.id === brand.id)) unique.push(brand);
        return unique;
      },
      []
    );
    setBrandsData(mergedBrands);
  };

  // Update Brands in Local Storage
  const updateBrandsInStorage = (updatedBrands) => {
    const addedBrands = updatedBrands.filter(
      (brand) =>
        !sampleBrandData.some((sampleBrand) => sampleBrand.id === brand.id)
    );
    localStorage.setItem("brands", JSON.stringify(addedBrands));
    setBrandsData(updatedBrands);
  };

  // Product Related Handlers

  const handleAddProduct = () => {
    setProductToEdit(null);
    setShowAddEditProduct(true);
    setActiveSection("products");
    renderSection();
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setShowAddEditProduct(true);
    renderSection();
  };

  // Go back to Product list from form
  const handleGoBackToProductList = () => {
    setShowAddEditProduct(false);
    setActiveSection("products");
    renderSection();
  };

  const handleViewProductDetails = (product) => {
    setProductDetails(product);
    setActiveSection("productDetails");
    renderSection();
  };

  const handleGoBackFromProductDetails = () => {
    setProductDetails(null);
    setActiveSection("products");
    renderSection();
  };

  // Product Delete Logic
  const handleDeleteProduct = (productId) => {
    const updatedProducts = getProductsData().filter(
      (product) => product.id !== productId
    );

    updateProductsInStorage(updatedProducts);
    renderSection();
  };

  // Add Product logic
  const handleSaveProduct = (product) => {
    let updatedProducts;

    if (product.id) {
      // Update existing product
      updatedProducts = getProductsData().map((p) =>
        p.id === product.id ? product : p
      );
    } else {
      // Add new product
      updatedProducts = [...getProductsData(), { ...product, id: Date.now() }];
    }

    updateProductsInStorage(updatedProducts);
    setShowAddEditProduct(false);
    renderSection();
  };

  // Brand Related Handlers

  const handleAddBrand = () => {
    setBrandToEdit(null);
    setShowAddEditBrand(true);
    setActiveSection("brands");
    renderSection();
  };

  const handleEditBrand = (brand) => {
    setBrandToEdit(brand);
    setShowAddEditBrand(true);
    renderSection();
  };

  // Go back to Product list from form
  const handleGoBackToBrandList = () => {
    setShowAddEditBrand(false);
    setActiveSection("brands");
    renderSection();
  };

  const handleViewBrandDetails = (brand) => {
    setBrandDetails(brand);
    setActiveSection("brandDetails");
    renderSection();
  };

  const handleGoBackFromBrandDetails = () => {
    setBrandDetails(null);
    setActiveSection("brands");
    renderSection();
  };

  // Brand Delete Logic
  const handleDeleteBrand = (brandId) => {
    const updatedBrands = getBrandsData().filter(
      (brand) => brand.id !== brandId
    );

    updateBrandsInStorage(updatedBrands);
    renderSection();
  };

  // Add Brand logic
  const handleSaveBrand = (brand) => {
    let updatedBrands;

    if (brand.id) {
      // Update existing brand
      updatedBrands = getBrandsData().map((b) =>
        b.id === brand.id ? brand : b
      );
    } else {
      // Add new brand
      updatedBrands = [...getBrandsData(), { ...brand, id: Date.now() }];
    }

    updateBrandsInStorage(updatedBrands);
    setShowAddEditBrand(false);
    setActiveSection("brands");
    renderSection();
  };

  // Section rendering logic
  const renderSection = () => {
    const contentElement = document.getElementById("section-content");

    if (getActiveSection() === "products") {
      if (getShowAddEditProduct()) {
        contentElement.innerHTML = AddEditProduct(getProductToEdit());

        if (document.querySelector(".add-edit-product-container")) {
          const [getFormData, setFormData] = window.useState({
            id: null,
            name: "",
            category: "",
            brand: "",
            image: "",
            description: "",
            price: "",
            stock: "",
          });

          if (getProductToEdit()) {
            setFormData(getProductToEdit());
          }

          const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...getFormData(), [name]: value });
          };

          const inputFields = document.querySelectorAll(".form-input-field");

          inputFields.forEach((inputField) =>
            inputField.addEventListener("change", handleInputChange)
          );

          const produtForm = document.getElementById("Product-form");

          produtForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (
              !getFormData().name ||
              !getFormData().category ||
              !getFormData().brand ||
              !getFormData().image ||
              !getFormData().description ||
              !getFormData().price ||
              !getFormData().stock
            ) {
              alert("Please fill out all fields.");
              return;
            }
            handleSaveProduct(getFormData());
          });

          const goBackButton = document.querySelector(".product-back-button");

          goBackButton.addEventListener("click", handleGoBackToProductList);
        }
      } else {
        contentElement.innerHTML = ProductList(
          getProductsData(),
          getProductListQuery()
        );

        // Attach event listeners after rendering ProductList
        if (document.querySelector(".product-list-container")) {
          const searchField = document.getElementById(
            "product-list-search-input-field"
          );

          searchField.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            setProductListQuery(query);

            const filteredProducts = getProductsData().filter(
              (product) =>
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query)
            );

            const productListTableBody = document.querySelector(
              ".products-list-table tbody"
            );

            if (productListTableBody) {
              productListTableBody.innerHTML = filteredProducts
                .map(
                  (product, index) => `
                  <tr>
                    <td class="p-tbody-tr-td">${index + 1}</td>
                    <td class="p-tbody-tr-td">
                      <div
                        title="View Product Details"
                        class="product-img-container"
                        data-id="${product.id}"
                      >
                        <img
                          class="table-product-img"
                          src="${product.image}"
                          alt="${product.name}"
                        />
                        <span class="table-product-name">${product.name}</span>
                      </div>
                    </td>
                    <td class="p-tbody-tr-td">${product.category}</td>
                    <td class="p-tbody-tr-td">${product.brand}</td>
                    <td class="p-tbody-tr-td">${product.stock}</td>
                    <td class="p-tbody-tr-td">${product.price}</td>
                    <td class="p-tbody-tr-td actions">
                      <button
                        title="Edit"
                        class="edit-button"
                        data-id="${product.id}"
                      >
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button
                        title="Delete"
                        class="delete-button"
                        data-id="${product.id}"
                      >
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                `
                )
                .join("");
            }
          });

          const productImageContainers = document.querySelectorAll(
            ".product-img-container"
          );

          productImageContainers.forEach((productImageContainer) => {
            productImageContainer.addEventListener("click", (e) => {
              const productId = e.currentTarget.getAttribute("data-id");
              const productToView = getProductsData().find(
                (product) => product.id === parseInt(productId)
              );
              handleViewProductDetails(productToView);
            });
          });

          const addProductButton = document.querySelector(
            ".add-product-button"
          );
          addProductButton.addEventListener("click", handleAddProduct);

          const editProductButtons = document.querySelectorAll(".edit-button");

          const deleteProductButtons =
            document.querySelectorAll(".delete-button");

          editProductButtons.forEach((editButton) =>
            editButton.addEventListener("click", (e) => {
              const productId = e.currentTarget.getAttribute("data-id");
              const productToEdit = getProductsData().find(
                (product) => product.id === parseInt(productId)
              );
              handleEditProduct(productToEdit);
            })
          );

          deleteProductButtons.forEach((deleteButton) =>
            deleteButton.addEventListener("click", (e) => {
              const productId = e.currentTarget.getAttribute("data-id");
              handleDeleteProduct(parseInt(productId));
            })
          );
        }
      }
    } else if (getActiveSection() === "productDetails") {
      contentElement.innerHTML = ProductDetails(getProductDetails());

      if (document.querySelector(".product-details-container")) {
        const goBackFromProductDetails = document.querySelector(
          ".product-details-back-button"
        );

        goBackFromProductDetails.addEventListener(
          "click",
          handleGoBackFromProductDetails
        );
      }
    } else if (getActiveSection() === "brands") {
      if (getShowAddEditBrand()) {
        contentElement.innerHTML = AddEditBrand(getBrandToEdit());

        if (document.querySelector(".add-edit-brand-container")) {
          const [getFormData, setFormData] = window.useState({
            id: null,
            name: "",
            logoUrl: "",
            description: "",
            category: "",
            noOfProducts: "",
          });

          if (getBrandToEdit()) {
            setFormData(getBrandToEdit());
          }

          const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...getFormData(), [name]: value });
          };

          const brandInputFields = document.querySelectorAll(
            ".brand-form-input-field"
          );

          brandInputFields.forEach((brandInputField) =>
            brandInputField.addEventListener("change", handleInputChange)
          );

          const brandForm = document.getElementById("Brand-form");

          brandForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (
              !getFormData().name ||
              !getFormData().logoUrl ||
              !getFormData().description ||
              !getFormData().category ||
              !getFormData().noOfProducts
            ) {
              alert("Please fill out all fields.");
              return;
            }
            handleSaveBrand(getFormData());
          });

          const goBackButtonFromBrandForm =
            document.querySelector(".brand-back-button");

          goBackButtonFromBrandForm.addEventListener(
            "click",
            handleGoBackToBrandList
          );
        }
      } else {
        contentElement.innerHTML = BrandList(
          getBrandsData(),
          getBrandListQuery()
        );

        // Attach event listeners after rendering BrandList
        if (document.querySelector(".brand-list-container")) {
          const searchFieldForBrand = document.getElementById(
            "brand-list-search-input-field"
          );

          searchFieldForBrand.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            setBrandListQuery(query);

            const filteredBrands = getBrandsData().filter(
              (brand) =>
                brand.name.toLowerCase().includes(query) ||
                brand.category.toLowerCase().includes(query)
            );

            const brandListTableBody = document.querySelector(
              ".brands-list-table tbody"
            );

            if (brandListTableBody) {
              brandListTableBody.innerHTML = filteredBrands
                .map(
                  (brand, index) => `
                  <tr>
                            <!-- Serial ID -->
                            <td class="b-tbody-tr-td">${index + 1}</td>
                            <!-- Brand with Image -->
                            <td class="b-tbody-tr-td">
  
                              <div
                              title="View Brand Details"
                              class="brand-img-container"
                              data-id="${brand.id}"
                              >
                                <img
                                class="table-brand-img" 
                                src="${brand.logoUrl}" 
                                alt="${brand.name}" 
                                />
                                <span class="table-brand-name">
                                  ${brand.name}
                                </span>
                              </div>
  
                            </td>
                            <td class="b-tbody-tr-td">
                                ${brand.description}
                            </td>
                            <td class="b-tbody-tr-td">
                                ${brand.category}
                            </td>
                            <td class="b-tbody-tr-td">
                                ${brand.noOfProducts}
                            </td>
                            <!-- Edit & Delete Actions Buttons -->
                            <td class="b-tbody-tr-td actions">
                                
                                <button
                                title="Edit"
                                class="edit-brand-button"
                                data-id="${brand.id}"
                                >
                                  <i class="fa-regular fa-pen-to-square"></i>
                                </button>
  
                                <button
                                title="Delete"
                                class="delete-brand-button"
                                data-id="${brand.id}"
                                >
                                  <i class="fa-regular fa-trash-can"></i>
                                </button>
  
                            </td>
                        </tr>
                          `
                )
                .join("");
            }
          });

          const brandImageContainers = document.querySelectorAll(
            ".brand-img-container"
          );

          brandImageContainers.forEach((brandImageContainer) => {
            brandImageContainer.addEventListener("click", (e) => {
              const brandId = e.currentTarget.getAttribute("data-id");
              const brandToView = getBrandsData().find(
                (brand) => brand.id === parseInt(brandId)
              );
              handleViewBrandDetails(brandToView);
            });
          });

          const addBrandButton = document.querySelector(".add-brand-button");
          addBrandButton.addEventListener("click", handleAddBrand);

          const editBrandButtons =
            document.querySelectorAll(".edit-brand-button");

          const deleteBrandButtons = document.querySelectorAll(
            ".delete-brand-button"
          );

          editBrandButtons.forEach((editBrandButton) =>
            editBrandButton.addEventListener("click", (e) => {
              const brandId = e.currentTarget.getAttribute("data-id");
              const brandToEdit = getBrandsData().find(
                (brand) => brand.id === parseInt(brandId)
              );
              handleEditBrand(brandToEdit);
            })
          );

          deleteBrandButtons.forEach((deleteBrandButton) =>
            deleteBrandButton.addEventListener("click", (e) => {
              const brandId = e.currentTarget.getAttribute("data-id");
              handleDeleteBrand(parseInt(brandId));
            })
          );
        }
      }
    } else if (getActiveSection() === "brandDetails") {
      contentElement.innerHTML = BrandDetails(getBrandDetails());

      if (document.querySelector(".brand-details-container")) {
        const goBackFromBrandDetails = document.querySelector(
          ".brand-details-back-button"
        );

        goBackFromBrandDetails.addEventListener(
          "click",
          handleGoBackFromBrandDetails
        );
      }
    } else if (getActiveSection() === "dashboard") {
      contentElement.innerHTML = DashboardHomePage();
    }
  };

  // Render initial content
  const contentContainer = document.getElementById("content-container");
  contentContainer.innerHTML = render();

  // Initialize sidebar and hamburger state
  updateSidebarState();

  // Load products, brands and render section
  loadProducts();
  loadBrands();
  renderSection();

  // Sidebar event listeners and Sidebar Menu Options Selection logic

  const updateActiveMenuOption = () => {
    const menuButtons = document.querySelectorAll(".menu-button");
    menuButtons.forEach((button) => {
      button.classList.remove("active-menu-option");
    });
  };

  const handleSelectSection = (section) => {
    setActiveSection(section);
    updateActiveMenuOption(section);
    renderSection();
  };

  const sidebarComponent = document.getElementById("sidebar");

  if (sidebarComponent) {
    const dashboardOption = document.getElementById("dashboard-option");
    const productOption = document.getElementById("product-option");
    const brandOption = document.getElementById("brand-option");
    const logOutOption = document.getElementById("logout-option");

    productOption.classList.add("active-menu-option");

    dashboardOption.addEventListener("click", () => {
      handleSelectSection("dashboard");
      dashboardOption.classList.add("active-menu-option");
    });

    productOption.addEventListener("click", () => {
      handleSelectSection("products");
      productOption.classList.add("active-menu-option");
    });
    brandOption.addEventListener("click", () => {
      handleSelectSection("brands");
      brandOption.classList.add("active-menu-option");
    });

    logOutOption.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      alert("You have logged out!");
      window.navigateTo("/login");
    });
  }

  renderSection();
}
