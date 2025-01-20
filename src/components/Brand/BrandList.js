export default function BrandList(brands, query) {
  const render = () => `
      <div class="brand-list-container">
        <h1 class="brand-list-title">
          Brands
        </h1>

        <div class="brand-list-sub-container">
            <div class="brand-list-navbar">
                <!-- SearchBar Component -->

                <div 
                  class="brand-list-search-bar" title="Search Brand by name or category" 
                  tabindex="-1"
                >
                  <i id="brand-search-icon" class="fa-solid fa-magnifying-glass"></i>
                  
                  <input 
                    id="brand-list-search-input-field"
                    type="search"
                    placeholder="Search Brand by name or category"
                  />
                </div>

                 <!-- Add Brand Button -->
                <div class="add-brand-button">
                    <i class="fa-solid fa-plus"></i>
                    Add Brand
                </div>

            </div>

             <!-- Brands list table -->
            <div class="brands-list-table-container">
                <table class="brands-list-table">
                     <thead>

                      <tr class="b-table-heading-row">
                          <th>#</th>
                          <th>Brand</th>
                          <th>Description</th>
                          <th>Catgory</th>
                          <th>No. of Products</th>
                          <th>Actions</th>
                      </tr>

                    </thead>

                    <!-- table body -->
                    <tbody>
                      ${brands
                        .filter(
                          (brand) =>
                            brand.name.toLowerCase().includes(query) ||
                            brand.category.toLowerCase().includes(query)
                        )
                        .map(
                          (brand, index) => `
                          <tr>
                            <!-- Serial ID -->
                            <td class="b-tbody-tr-td">${index + 1}</td>
                            <!-- Product with Image -->
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
                        .join("")}
                    </tbody>

                </table>
            </div

        </div>
      </div>
      `;

  return render();
}
