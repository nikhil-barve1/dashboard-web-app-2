export default function AddEditBrand(brand) {
  const render = () => `
  <div class="add-edit-brand-container">
    <h1 class="add-edit-brand-title">
        ${brand ? "Edit Brand" : "Add Brand"}
    </h1>

    <form id="Brand-form" class="add-edit-brand-form">
    <div class="brand-form-container">

        <!-- col-1 -->
        <div class="brand-col-1">
            <!-- name -->
            <div class="brand-input-container">
                <label for="name">Name</label>
                <input 
                    class="brand-form-input-field"
                    type="text" 
                    name="name" 
                    id="name"
                    placeholder="Brand Name"
                    value="${brand?.name || ""}" 
                />
            </div>
            <!-- Category -->
            <div class="brand-input-container">
                <label for="category">Category</label>
                <select 
                    class="brand-form-input-field"
                    id="category"
                    name="category" 
                >
                    <option value="" hidden>
                        Select Category
                    </option>
                    <option value="Furniture" ${
                      brand?.category === "Furniture" ? "selected" : ""
                    }>Furniture</option>
                    <option value="Men'clothing" ${
                      brand?.category === "Men'clothing" ? "selected" : ""
                    }>Men's Clothing</option>
                    <option value="Perfume" ${
                      brand?.category === "Perfume" ? "selected" : ""
                    }>Perfume</option>
                    <option value="Makeup" ${
                      brand?.category === "Makeup" ? "selected" : ""
                    }>Makeup</option>
                </select>
            </div>
            
            <!-- Brand Logo Image -->
            <div class="brand-input-container">
                <label for="logoUrl">Brand Logo Image</label>
                    <input
                    class="brand-form-input-field"
                    type="url"
                    name="logoUrl"
                    id="logoUrl"
                    placeholder="Brand Logo Image URL"
                    value="${brand?.logoUrl || ""}" 
                />
            </div>
        </div>

        <!-- col-2 -->
        <div class="brand-col-2">
        <!-- Description -->
        <div class="brand-input-container">
            <label for="description">Description</label>
            <textarea 
            rows="5"
            class="brand-form-input-field"
            name="description" 
            id="description"
            placeholder="Description"
            >${brand?.description || ""}</textarea> 
        </div>
        <!-- No. of Products -->
        <div class="brand-input-container">
            <label for="noOfProducts">No. of Products</label>
                <input 
                class="brand-form-input-field"
                type="text" 
                name="noOfProducts" 
                id="noOfProducts" 
                placeholder="No. of products"
                value="${brand?.noOfProducts || ""}" 
            />
        </div>
        </div>
    </div>

        <!-- brand-form-footer -->
        <div class="brand-form-footer">
            <button 
            class="brand-back-button"
            type="button">
                Go Back to Brand List
            </button>
            <button 
            class="brand-submit-button"
            type="submit">
                ${brand ? "Save Changes" : "Add New Brand"}
            </button>
        </div>
    </form>

  </div>
  `;

  return render();
}
