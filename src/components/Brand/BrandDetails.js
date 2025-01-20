export default function BrandDetails(brand) {
  const render = () => `
    <div class="brand-details-container">
      <h1 class="brand-details-title">Brand Details</h1>

      <!-- Brand details sub container -->
      <div class="brand-details-sub-container">
          <!-- Back button container -->
          <div class="brand-back-button-container">
              <button 
              title="Go Back to Brand List"
              class="brand-details-back-button">
                  <i class="fa-solid fa-arrow-left left-arrow"></i>
                  Go Back
              </button>
          </div>
  
          <!-- Brand Details -->
          <div class="brand-details-main-container">
          
              <!-- Brand Image -->
              <div class="brand-detail-img-container">
                  <img 
                  class="brand-detail-img"
                  src=${brand.logoUrl} 
                  alt=${brand.name} 
                  />
              </div>
  
              <!-- Brand Details -->
              <div class="brand-detail-content-container">
                  <h1 class="b-details-title">
                      ${brand.name}
                  </h1>
                  <h2 class="b-details-category">
                      Category: ${brand.category}
                  </h2>
                  <h3 class="b-details-description">
                      Description:
                  </h3>
                  <p class="b-details-description-content">
                      ${brand.description}
                  </p>
                  <p class="b-details-noOfProducts">
                       No. of Products Available: ${brand.noOfProducts}
                  </p>
              </div>
  
          </div>
      </div>
  
    </div>
    `;
  return render();
}
