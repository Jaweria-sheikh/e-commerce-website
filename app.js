const products = [

    {
        id: 1,
        name: "Minimal Watch",
        category: "Fashion",
        price: 89.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
        description:
            "A timeless minimalist watch designed for everyday wear. Elegant, comfortable and versatile."
    },

    {
        id: 2,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 129.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
        description:
            "Premium wireless headphones with immersive sound, comfortable ear cushions and long battery life."
    },

    {
        id: 3,
        name: "Classic Sneakers",
        category: "Fashion",
        price: 74.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
        description:
            "Comfortable everyday sneakers with a clean modern design that works with any outfit."
    },

    {
        id: 4,
        name: "Modern Chair",
        category: "Home",
        price: 159.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=700",
        description:
            "A stylish modern chair that adds comfort and personality to your living space."
    },

    {
        id: 5,
        name: "Smart Watch",
        category: "Electronics",
        price: 199.99,
        rating: 4.8,
        image: "https://static.vecteezy.com/system/resources/thumbnails/070/315/260/small/white-smartwatch-pink-background-minimalist-mockup-free-photo.jpg",
        description:
            "Track your activity, notifications and daily goals with this modern smart watch."
    },

    {
        id: 6,
        name: "Leather Backpack",
        category: "Fashion",
        price: 94.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700",
        description:
            "A premium backpack with a timeless design and plenty of space for everyday essentials."
    },

    {
        id: 7,
        name: "Ceramic Lamp",
        category: "Home",
        price: 49.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700",
        description:
            "A beautiful ceramic lamp that creates a warm and relaxing atmosphere."
    },

    {
        id: 8,
        name: "Skincare Set",
        category: "Beauty",
        price: 59.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=700",
        description:
            "A carefully selected skincare set for a simple and refreshing daily routine."
    },

    {
        id: 9,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 69.99,
        rating: 4.6,
        image: "https://lamax-electronics.com/cdn/shop/files/mimg_LXWSMSO2PLABA.jpg?v=1732874816&width=2048",
        description:
            "Compact Bluetooth speaker with powerful audio and a stylish portable design."
    },

    {
        id: 10,
        name: "Sunglasses",
        category: "Fashion",
        price: 39.99,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700",
        description:
            "Classic sunglasses with a stylish frame designed for everyday use."
    },

    {
        id: 11,
        name: "Coffee Maker",
        category: "Home",
        price: 119.99,
        rating: 4.7,
        image: "https://as2.ftcdn.net/v2/jpg/06/77/63/63/1000_F_677636392_zcZ8x0kPpWwYJEPb0hUVDrovOXq7sP91.jpg",
        description:
            "Make delicious coffee at home with this compact and easy-to-use coffee maker."
    },

    {
        id: 12,
        name: "Perfume",
        category: "Beauty",
        price: 79.99,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xGM2-LIQt9Q44qKSqNQ06VCBpN9jdr2kEgYFkZ8coQhppKiF_HCrZLc&s=10",
        description:
            "A sophisticated fragrance with a beautiful long-lasting scent."
    }

];


// ==========================================
// STATE
// ==========================================

let cart = JSON.parse(localStorage.getItem("lavelleCart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("lavelleWishlist")) || [];

let currentFilter = "All";

let currentProduct = null;


// ==========================================
// DOM ELEMENTS
// ==========================================

const productGrid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const sortSelect =
    document.getElementById("sortSelect");

const noProducts =
    document.getElementById("noProducts");

const cartSidebar =
    document.getElementById("cartSidebar");

const overlay =
    document.getElementById("overlay");

const cartItems =
    document.getElementById("cartItems");

const emptyCart =
    document.getElementById("emptyCart");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const cartFooter =
    document.querySelector(".cart-footer");

const productModal =
    document.getElementById("productModal");

const checkoutModal =
    document.getElementById("checkoutModal");

const toast =
    document.getElementById("toast");


// ==========================================
// SAVE DATA
// ==========================================

function saveData() {

    localStorage.setItem(
        "lavelleCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "lavelleWishlist",
        JSON.stringify(wishlist)
    );

}


// ==========================================
// RENDER PRODUCTS
// ==========================================

function renderProducts() {

    let filteredProducts = [...products];

    // Category filter

    if (currentFilter !== "All") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.category === currentFilter
            );

    }


    // Search

    const searchTerm =
        searchInput.value.toLowerCase().trim();

    if (searchTerm) {

        filteredProducts =
            filteredProducts.filter(product =>
                product.name
                    .toLowerCase()
                    .includes(searchTerm)
            );

    }


    // Sorting

    const sortValue =
        sortSelect.value;

    if (sortValue === "low") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    }

    if (sortValue === "high") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    }

    if (sortValue === "rating") {

        filteredProducts.sort(
            (a, b) => b.rating - a.rating
        );

    }


    productGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        noProducts.style.display = "block";

        return;

    }

    noProducts.style.display = "none";


    filteredProducts.forEach(product => {

        const isWishlisted =
            wishlist.includes(product.id);

        const card =
            document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <button
                    class="wishlist ${isWishlisted ? "active" : ""}"
                    data-wishlist="${product.id}"
                >
                    ${isWishlisted ? "♥" : "♡"}
                </button>

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-title">
                    ${product.name}
                </h3>

                <div class="rating">
                    ${getStars(product.rating)}
                    <span>(${product.rating})</span>
                </div>

                <div class="product-bottom">

                    <span class="price">
                        $${product.price.toFixed(2)}
                    </span>

                    <button
                        class="add-btn"
                        data-add="${product.id}"
                        title="Add to cart"
                    >
                        +
                    </button>

                </div>

            </div>
        `;


        // Open product details when image/title clicked

        card.querySelector(".product-image")
            .addEventListener("click", () => {

                openProductModal(product);

            });


        card.querySelector(".product-title")
            .addEventListener("click", () => {

                openProductModal(product);

            });


        productGrid.appendChild(card);

    });

}


// ==========================================
// STAR RATING
// ==========================================

function getStars(rating) {

    const fullStars =
        Math.floor(rating);

    let stars = "";

    for (let i = 0; i < 5; i++) {

        stars +=
            i < fullStars ? "★" : "☆";

    }

    return stars;

}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(productId) {

    const existing =
        cart.find(item =>
            item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }


    saveData();

    updateCart();

    showToast("Product added to cart!");

}


// ==========================================
// UPDATE CART
// ==========================================

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let totalItems = 0;


    cart.forEach(item => {

        const product =
            products.find(
                product => product.id === item.id
            );

        if (!product) return;


        const itemTotal =
            product.price * item.quantity;

        total += itemTotal;

        totalItems += item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div>

                <h4>${product.name}</h4>

                <span class="cart-item-price">
                    $${product.price.toFixed(2)}
                </span>

                <div class="quantity">

                    <button
                        data-decrease="${product.id}"
                    >
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button
                        data-increase="${product.id}"
                    >
                        +
                    </button>

                </div>

                <button
                    class="remove"
                    data-remove="${product.id}"
                >
                    Remove
                </button>

            </div>

            <strong>
                $${itemTotal.toFixed(2)}
            </strong>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.textContent =
        `$${total.toFixed(2)}`;


    document.querySelector(".cart-count")
        .textContent = totalItems;


    document.querySelector(".wishlist-count")
        .textContent = wishlist.length;


    if (cart.length === 0) {

        emptyCart.style.display = "block";

        cartFooter.classList.add("disabled");

    } else {

        emptyCart.style.display = "none";

        cartFooter.classList.remove("disabled");

    }

}


// ==========================================
// CART QUANTITY
// ==========================================

function changeQuantity(productId, amount) {

    const item =
        cart.find(item =>
            item.id === productId
        );

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== productId
            );

    }


    saveData();

    updateCart();

}


// ==========================================
// REMOVE ITEM
// ==========================================

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveData();

    updateCart();

    showToast("Product removed.");

}


// ==========================================
// WISHLIST
// ==========================================

function toggleWishlist(productId) {

    if (wishlist.includes(productId)) {

        wishlist =
            wishlist.filter(
                id => id !== productId
            );

        showToast("Removed from wishlist.");

    } else {

        wishlist.push(productId);

        showToast("Added to wishlist!");

    }


    saveData();

    renderProducts();

    updateCart();

}


// ==========================================
// PRODUCT MODAL
// ==========================================

function openProductModal(product) {

    currentProduct = product;

    document.getElementById("modalImage").src =
        product.image;

    document.getElementById("modalTitle").textContent =
        product.name;

    document.getElementById("modalCategory").textContent =
        product.category;

    document.getElementById("modalRating").innerHTML =
        `${getStars(product.rating)} (${product.rating})`;

    document.getElementById("modalDescription").textContent =
        product.description;

    document.getElementById("modalPrice").textContent =
        `$${product.price.toFixed(2)}`;


    productModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeProductModal() {

    productModal.classList.remove("active");

    document.body.style.overflow = "";

}


// ==========================================
// CART SIDEBAR
// ==========================================

function openCart() {

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeCart() {

    cartSidebar.classList.remove("active");

    overlay.classList.remove("active");

    document.body.style.overflow = "";

}


// ==========================================
// CHECKOUT
// ==========================================

function openCheckout() {

    if (cart.length === 0) {

        showToast("Your cart is empty.");

        return;

    }


    const total =
        cart.reduce((sum, item) => {

            const product =
                products.find(
                    product => product.id === item.id
                );

            return sum +
                product.price * item.quantity;

        }, 0);


    document.getElementById("checkoutTotal")
        .textContent =
        `$${total.toFixed(2)}`;


    checkoutModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeCheckout() {

    checkoutModal.classList.remove("active");

    document.body.style.overflow = "";

}


// ==========================================
// TOAST
// ==========================================

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}


// ==========================================
// EVENT LISTENERS
// ==========================================


// Add product

productGrid.addEventListener("click", event => {

    const addButton =
        event.target.closest("[data-add]");

    const wishlistButton =
        event.target.closest("[data-wishlist]");


    if (addButton) {

        const productId =
            Number(addButton.dataset.add);

        addToCart(productId);

    }


    if (wishlistButton) {

        const productId =
            Number(wishlistButton.dataset.wishlist);

        toggleWishlist(productId);

    }

});


// Cart buttons

cartItems.addEventListener("click", event => {

    const increase =
        event.target.closest("[data-increase]");

    const decrease =
        event.target.closest("[data-decrease]");

    const remove =
        event.target.closest("[data-remove]");


    if (increase) {

        changeQuantity(
            Number(increase.dataset.increase),
            1
        );

    }


    if (decrease) {

        changeQuantity(
            Number(decrease.dataset.decrease),
            -1
        );

    }


    if (remove) {

        removeFromCart(
            Number(remove.dataset.remove)
        );

    }

});


// Filters

document.querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".filter-btn")
                .forEach(btn =>
                    btn.classList.remove("active")
                );


            button.classList.add("active");


            currentFilter =
                button.dataset.filter;


            renderProducts();

        });

    });


// Category cards

document.querySelectorAll(".category-card")
    .forEach(button => {

        button.addEventListener("click", () => {

            currentFilter =
                button.dataset.category;


            document
                .querySelectorAll(".filter-btn")
                .forEach(btn => {

                    btn.classList.toggle(
                        "active",
                        btn.dataset.filter === currentFilter
                    );

                });


            renderProducts();


            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


// Search

searchInput.addEventListener(
    "input",
    renderProducts
);


// Sorting

sortSelect.addEventListener(
    "change",
    renderProducts
);


// Cart

document.getElementById("cartBtn")
    .addEventListener("click", openCart);

document.getElementById("closeCart")
    .addEventListener("click", closeCart);

overlay.addEventListener(
    "click",
    closeCart
);


// Start shopping

document.getElementById("startShopping")
    .addEventListener("click", () => {

        closeCart();

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


// Product modal

document.getElementById("closeProductModal")
    .addEventListener(
        "click",
        closeProductModal
    );


document.getElementById("modalAddBtn")
    .addEventListener("click", () => {

        if (currentProduct) {

            addToCart(currentProduct.id);

            closeProductModal();

        }

    });


// Checkout

checkoutBtn.addEventListener(
    "click",
    openCheckout
);


document.getElementById("closeCheckout")
    .addEventListener(
        "click",
        closeCheckout
);


// Checkout form

document.getElementById("checkoutForm")
    .addEventListener("submit", event => {

        event.preventDefault();


        document.getElementById("checkoutContent")
            .style.display = "none";


        document.getElementById("successMessage")
            .style.display = "block";


        cart = [];

        saveData();

        updateCart();

    });


// Continue shopping

document.getElementById("continueShopping")
    .addEventListener("click", () => {

        document.getElementById("successMessage")
            .style.display = "none";


        document.getElementById("checkoutContent")
            .style.display = "block";


        document.getElementById("checkoutForm")
            .reset();


        closeCheckout();

    });


// Newsletter

document.getElementById("newsletterForm")
    .addEventListener("submit", event => {

        event.preventDefault();

        showToast(
            "Thanks for subscribing!"
        );

        event.target.reset();

    });


// Mobile menu

document.getElementById("menuBtn")
    .addEventListener("click", () => {

        document
            .getElementById("mobileMenu")
            .classList.toggle("active");

    });


// Close mobile menu after clicking

document.querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("mobileMenu")
                .classList.remove("active");

        });

    });


// Theme

document.getElementById("themeBtn")
    .addEventListener("click", () => {

        document.body.classList.toggle("dark");


        const isDark =
            document.body.classList.contains("dark");


        localStorage.setItem(
            "lavelleTheme",
            isDark ? "dark" : "light"
        );


        document.getElementById("themeBtn")
            .textContent =
            isDark ? "☀️" : "🌙";

    });


// Load saved theme

if (
    localStorage.getItem("lavelleTheme")
    === "dark"
) {

    document.body.classList.add("dark");

    document.getElementById("themeBtn")
        .textContent = "☀️";

}


// Close modal when clicking outside

productModal.addEventListener("click", event => {

    if (event.target === productModal) {

        closeProductModal();

    }

});


checkoutModal.addEventListener("click", event => {

    if (event.target === checkoutModal) {

        closeCheckout();

    }

});


// ESC key

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeCart();

        closeProductModal();

        closeCheckout();

    }

});


// ==========================================
// INITIALIZE
// ==========================================

renderProducts();

updateCart();