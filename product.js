// Initialize all the products by category
if (!localStorage.getItem('products')) {
    const products = {
        featured: [
            { image: 'img/featured/1.jpg', category: "Featured", name: 'Adidas Samba', price: 'RM 90.00', rating: 5, sizes : ["5UK", "6UK", "7UK", "8UK", "9UK"]},
            { image: 'img/featured/2.jpg', category: "Featured", name: 'New Balance 2002r', price: 'RM 100.00', rating: 5, sizes : ["5UK", "6UK", "7UK", "8UK", "9UK"]},
            { image: 'img/featured/3.jpg', category: "Featured", name: 'School Bag', price: 'RM 50.00', rating: 4, sizes : ["10L", "26L", "28L"]},
            { image: 'img/featured/4.jpg', category: "Featured", name: 'Bandana', price: 'RM 90.00', rating: 5, sizes : ["S", "M"]},
          ],
          clothes: [
            { image: 'img/shop/24.jpg', category: "Clothes", name: 'White T-shirt', price: 'RM 40.00', rating: 5, sizes: ["S", "M", "L", "XL"] },
            { image: 'img/shop/25.jpg', category: "Clothes", name: 'Maroon T-shirt', price: 'RM 50.00', rating: 4, sizes: ["S", "M", "L", "XL"] },
            { image: 'img/shop/1.jpg', category: "Clothes", name: 'Blue T-shirt', price: 'RM 60.00', rating: 3, sizes: ["S", "M", "L", "XL"]},
            { image: 'img/shop/26.jpg', category: "Clothes", name: 'Green T-shirt', price: 'RM 40.00', rating: 5, sizes: ["S", "M", "L", "XL"]},
          ],
          watches: [
            { image: 'img/watches/1.jpg', category: "Watches", name: 'Tag Heuer', price: 'RM 568.00', rating: 5, sizes : ["38mm", "40mm", "42mm", "45mm"] },
            { image: 'img/watches/2.jpg', category: "Watches", name: 'Rolex', price: 'RM 500.00', rating: 5, sizes : ["38mm", "40mm", "42mm", "45mm"]  },
            { image: 'img/watches/3.jpg', category: "Watches", name: 'Casio', price: 'RM 299.00', rating: 5, sizes : ["38mm", "40mm", "42mm", "45mm"]  },
            { image: 'img/watches/4.jpg', category: "Watches", name: 'G-Shock', price: 'RM 782.00', rating: 5, sizes : ["38mm", "40mm", "42mm", "45mm"]  },
          ],
          shoes: [
            { image: 'img/shoes/1.jpg', category: "Shoes", name: 'Adidas Ultraboost', price: 'RM 700.00', rating: 5, sizes : ["5UK", "6UK", "7UK", "8UK", "9UK"]},
            { image: 'img/shoes/2.jpg', category: "Shoes", name: 'Nike AJ4', price: 'RM 458.00', rating: 3, sizes : ["5UK", "6UK", "7UK", "8UK", "9UK"]},
            { image: 'img/shoes/3.jpg', category: "Shoes", name: 'Nike Running', price: 'RM 302.00', rating: 2, sizes : ["5UK", "6UK", "7UK", "8UK", "9UK"]},
            { image: 'img/shoes/4.jpg', category: "Shoes", name: 'Puma Suede', price: 'RM 150.00', rating: 4, sizes : ["5UK", "6UK", "7UK", "8UK", "9UK"]},
          ],
          shirts: [
            { image: 'img/shop/1.jpg', category: "shirts", name: 'Plain T-shirt', price: 'RM 700.00', rating: 5, sizes : ["S", "M", "L", "XL"]},
            { image: 'img/shop/6.jpg', category: "shirts", name: 'Winter Jacket', price: 'RM 458.00', rating: 3, sizes : ["S", "M", "L", "XL"]},
            { image: 'img/shop/8.jpg', category: "shirts", name: 'Windbraker', price: 'RM 302.00', rating: 2, sizes : ["S", "M", "L", "XL"]},
            { image: 'img/shop/23.jpg', category: "shirts", name: 'Casual Shirt', price: 'RM 150.00', rating: 4, sizes : ["S", "M", "L", "XL"]},
          ],
          others: [
            { image: 'img/shop/15.jpg', category: "others", name: 'Converse Beanie', price: 'RM 700.00', rating: 5, sizes : ["S", "M"]},
            { image: 'img/shop/11.jpg', category: "others", name: 'Cowboy Hat', price: 'RM 458.00', rating: 3, sizes : ["S", "M"]},
            { image: 'img/shop/4.jpg', category: "others", name: 'Nike Marina Blue', price: 'RM 302.00', rating: 2, sizes : ["10L", "26L", "28L"]},
            { image: 'img/shop/9.jpg', category: "others", name: 'Strip Bag', price: 'RM 150.00', rating: 4, sizes : ["10L", "26L", "28L"]},
          ]
    };
    localStorage.setItem('products', JSON.stringify(products));
  }
  
  const products = JSON.parse(localStorage.getItem('products'));
  
  // Function to render products for a specific category
  function renderProducts(category, containerId) {
    const productContainer = document.getElementById(containerId);
    if (!productContainer) return; // Exit if container is not found
  
    products[category].forEach((product, index) => {
      const stars = Array(product.rating).fill('<i class="fas fa-star"></i>').join('');
      const productHTML = `
        <div class="product text-center col-lg-3 col-md-4 col-12">
          <img class="img-fluid mb-3" src="${product.image}" alt="${product.name}">
          <div class="star">${stars}</div>
          <h5 class="p-name">${product.name}</h5>
          <h4 class="p-price">${product.price}</h4>
          <button class="buy-btn" onclick="viewProductDetails('${category}', ${index})">Buy Now</button>
        </div>
      `;
      productContainer.insertAdjacentHTML('beforeend', productHTML);
    });
  }

  // Function to render all products
  function renderAllProducts(containerId) {
    const productContainer = document.getElementById(containerId);
    if (!productContainer) return; // Exit if container is not found

    Object.keys(products).forEach(category => {
        products[category].forEach((product, index) => {
            const stars = Array(product.rating).fill('<i class="fas fa-star"></i>').join('');
            const productHTML = `
                <div class="product text-center col-lg-3 col-md-4 col-12">
                    <img class="img-fluid mb-3" src="${product.image}" alt="${product.name}">
                    <div class="star">${stars}</div>
                    <h5 class="p-name">${product.name}</h5>
                    <h4 class="p-price">${product.price}</h4>
                    <button class="buy-btn" onclick="viewProductDetails('${category}', ${index})">Buy Now</button>
                </div>
            `;
            productContainer.insertAdjacentHTML('beforeend', productHTML);
        });
    });
}


// Function to filter and render products based on search query
function filterAndRenderProducts(containerId, searchQuery) {
  const productContainer = document.getElementById(containerId);
  if (!productContainer) return;

  // Clear the container
  productContainer.innerHTML = '';

  // Filter and render products
  Object.keys(products).forEach(category => {
      products[category]
          .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .forEach((product, index) => {
              const stars = Array(product.rating).fill('<i class="fas fa-star"></i>').join('');
              const productHTML = `
                  <div class="product text-center col-lg-3 col-md-4 col-12">
                      <img class="img-fluid mb-3" src="${product.image}" alt="${product.name}">
                      <div class="star">${stars}</div>
                      <h5 class="p-name">${product.name}</h5>
                      <h4 class="p-price">${product.price}</h4>
                      <button class="buy-btn" onclick="viewProductDetails('${category}', ${index})">Buy Now</button>
                  </div>
              `;
              productContainer.insertAdjacentHTML('beforeend', productHTML);
          });
  });
}




  // Handle "Buy Now" button click
  function viewProductDetails(category, index) {
    const selectedProduct = products[category][index];
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    window.location.href = 'sproductD.html';
  }
  