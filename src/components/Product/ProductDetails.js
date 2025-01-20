export default function ProductDetails(product) {
  const render = () => `
  <div class="product-details-container">
    <h1 class="product-details-title">Product Details</h1>
    <!-- Product details sub container -->
    <div class="product-details-sub-container">
        <!-- Back button container -->
        <div class="back-button-container">
            <button 
            title="Go Back to Product List"
            class="product-details-back-button">
                <i class="fa-solid fa-arrow-left left-arrow"></i>
                Go Back
            </button>
        </div>

        <!-- Product Details -->
        <div class="product-details-main-container">
        
            <!-- Product Image -->
            <div class="product-detail-img-container">
                <img 
                class="product-detail-img"
                src=${product.image} 
                alt=${product.name} 
                />
            </div>

            <!-- Product Details -->
            <div class="product-detail-content-container">
                <h1 class="p-details-title">
                    ${product.name}
                </h1>
                <h2 class="p-details-brand">
                   Brand: ${product.brand}
                </h2>
                <h2 class="p-details-price">
                    ${product.price}
                </h2>
                <h2 class="p-details-category">
                    Category: ${product.category}
                </h2>
                <h3 class="p-details-description">
                    Description:
                </h3>
                <p class="p-details-description-content">
                    ${product.description}
                </p>
                <p class="p-details-stock">
                    Stock: ${product.stock}
                </p>
            </div>

        </div>
    </div>

  </div>
  `;
  return render();
}
