export default function AddEditProduct(product) {
  const render = () => `
  <div class="add-edit-product-container">
    <h1 class="add-edit-product-title">
        ${product ? "Edit Product" : "Add Product"}
    </h1>

    <form id="Product-form" class="add-edit-product-form">
        <div class="product-form-container">

            <!-- col-1 -->
            <div class="col-1">
                <!-- name -->
                <div class="input-container">
                    <label for="name">Name</label>
                    <input 
                        class="form-input-field"
                        type="text" 
                        name="name" 
                        placeholder="Product Name"
                        id="name"
                        value="${product?.name || ""}" 
                    />
                </div>
                <!-- Category -->
                <div class="input-container">
                    <label for="category">Category</label>
                    <select 
                        class="form-input-field"
                        name="category" 
                        id="category"
                    >
                        <option value="" hidden>
                            Select Category
                        </option>
                        <option value="Furniture" ${
                          product?.category === "Furniture" ? "selected" : ""
                        }>Furniture</option>
                        <option value="Men'clothing" ${
                          product?.category === "Men'clothing" ? "selected" : ""
                        }>Men's Clothing</option>
                        <option value="Perfume" ${
                          product?.category === "Perfume" ? "selected" : ""
                        }>Perfume</option>
                        <option value="Makeup" ${
                          product?.category === "Makeup" ? "selected" : ""
                        }>Makeup</option>
                    </select>
                </div>
                <!-- Brand -->
                <div class="input-container">
                    <label for="brand">Brand</label>
                    <select 
                    class="form-input-field"
                    name="brand" 
                    id="brand"
                    >
                        <option value="" hidden>
                        Select Brand
                        </option>
                        <option value="CraftFurnish" ${
                          product?.brand === "CraftFurnish" ? "selected" : ""
                        }>CraftFurnish</option>
                        <option value="ThreadCloth" ${
                          product?.brand === "ThreadCloth" ? "selected" : ""
                        }>ThreadCloth</option>
                        <option value="SweetFragrance" ${
                          product?.brand === "SweetFragrance" ? "selected" : ""
                        }>SweetFragrance</option>                   
                    </select>
                </div>
                <!-- Product Image -->
                <div class="input-container">
                    <label for="image">Product Image URL</label>
                     <input
                        class="form-input-field"
                        type="url"
                        name="image"
                        id="image"
                        placeholder="Product Image URL"
                        value="${product?.image || ""}" 
                    />
                </div>
            </div>

             <!-- col-2 -->
             <div class="col-2">
                <!-- Description -->
                <div class="input-container">
                    <label for="description">Description</label>
                    <textarea 
                    rows="5"
                    class="form-input-field"
                    name="description" 
                    id="description"
                    placeholder="Description"
                    >${product?.description || ""}</textarea> 
                </div>
                <!-- Price -->
                <div class="input-container">
                    <label for="price">Price</label>
                    <input 
                        class="form-input-field"
                        type="text" 
                        name="price" 
                        id="price" 
                        placeholder="Price"
                        value="${product?.price || ""}" 
                    />
                </div>
                <!-- Stock -->
                <div class="input-container">
                    <label for="stock">Stock</label>
                     <input 
                        class="form-input-field"
                        type="text" 
                        name="stock" 
                        id="stock" 
                        placeholder="Stock"
                        value="${product?.stock || ""}" 
                    />
                </div>
             </div>
        </div>

         <!-- product-form-footer -->
            <div class="product-form-footer">
                <button 
                class="product-back-button"
                type="button">
                    Go Back to Product List
                </button>
                <button 
                class="product-submit-button"
                type="submit">
                    ${product ? "Save Changes" : "Add New Product"}
                </button>
            </div>
    </form>

  </div>
  `;
  return render();
}
