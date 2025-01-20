export default function ProductList(products, query) {
  const render = () => `
    <div class="product-list-container">
        <h1 class="product-list-title">
          Products
        </h1>
        <div class="product-list-sub-container">
            <div class="product-list-navbar">
                
                <!-- SearchBar Component -->
                <div 
                class="product-list-search-bar" title="Search Products by name or category or brand" 
                tabindex="-1"
                >
                  <i id="search-icon" class="fa-solid fa-magnifying-glass"></i>

                  <input 
                  id="product-list-search-input-field"
                  type="search"
                  placeholder="Search Products by name or category or brand"
                  />
                </div>

                <!-- Add Product Button -->
                <div class="add-product-button">
                    <i class="fa-solid fa-plus"></i>
                    Add Product
                </div>

            </div>

            <!-- Products list table -->
            <div class="products-list-table-container">
                <table class="products-list-table">
                    <thead>

                      <tr class="p-table-heading-row">
                          <th>#</th>
                          <th>Product</th>
                          <th>Category</th>
                          <th>Brand</th>
                          <th>Stock</th>
                          <th>Price</th>
                          <th>Actions</th>
                      </tr>

                    </thead>

                    <!-- table body -->
                    <tbody>
                      ${products
                        .filter(
                          (product) =>
                            product.name.toLowerCase().includes(query) ||
                            product.category.toLowerCase().includes(query) ||
                            product.brand.toLowerCase().includes(query)
                        )
                        .map(
                          (product, index) => `
                        <tr>
                          <!-- Serial ID -->
                          <td class="p-tbody-tr-td">${index + 1}</td>
                          <!-- Product with Image -->
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
                              <span class="table-product-name">
                                ${product.name}
                              </span>
                            </div>

                          </td>
                          <td class="p-tbody-tr-td">
                              ${product.category}
                          </td>
                          <td class="p-tbody-tr-td">
                              ${product.brand}
                          </td>
                          <td class="p-tbody-tr-td">
                              ${product.stock}
                          </td>
                          <td class="p-tbody-tr-td">
                              ${product.price}
                          </td>
                          <!-- Edit & Delete Actions Buttons -->
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
                        .join("")}
                      
                    </tbody>

                </table>
            </div>

        </div>
    </div>
    `;

  return render();
}
