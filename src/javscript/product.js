//making an array of objects with our products
const products = [
    {
        id: 1,
        image: "https://i.postimg.cc/Hk0gTYxz/acer-swift-5-core-i7-main.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Laptops",
    },
    {
        id: 2,
        image: "https://i.postimg.cc/PJckM266/acer-chromebook-spin-713-core-i5-Main.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Laptops",
    },
    {
        id: 3,
        image: "https://i.postimg.cc/pLjPsMMK/Apple-Mac-Book-Pro-16-Space-grey-Main.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Laptops",
    },
    {
        id: 4,
        image: "https://i.postimg.cc/50sJXx8W/ASUS-Expert-Book-B7-flip-Main.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Laptops",
    },
    {
        id: 5,
        image: "https://i.postimg.cc/QNnssdXp/ASUS-Vivo-Book-Pro-16x-main.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Laptops",
    },
    {
        id: 6,
        image: "https://i.postimg.cc/2yLtCmww/A03P1.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Cellphones",
    },
    {
        id: 7,
        image: "https://i.postimg.cc/GmFZBL1g/I11P1.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Cellphones",
    },
    {
        id: 8,
        image: "https://i.postimg.cc/sftj7gt3/I14proP1.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Cellphones",
    },
    {
        id: 9,
        image: "https://i.postimg.cc/6pKBb1WS/C20P1.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Cellphones",
    },
    {
        id: 10,
        image: "https://i.postimg.cc/rmPb6zSs/OP9P1.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Cellphones",
    },
    {
        id: 11,
        image:"https://i.postimg.cc/RV7BtQ7T/gaming-Monitor.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Accessories",
    },
    {
        id: 12,
        image:"https://i.postimg.cc/W3qR1Mpg/keyboard-1.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Accessories",
    },
    {
        id: 13,
        image:"https://i.postimg.cc/FKR5wM2P/mouse-1.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Accessories",
    },
    {
        id: 14,
        image:"https://i.postimg.cc/Vsb1fc5p/cpu-cooler.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Accessories",
    },
    {
        id: 15,
        image:"https://i.postimg.cc/x19S3JgV/headset-1.jpg",
        name: "",
        desc: "",
        price: 45,
        category: "Accessories",
    },
];
// end of the array of object
// creating a function to display our objects
function productsDisplay() {
    // we target the products section so that every that we add falls underneath the products section
    const ourProducts = document.getElementById("products");
    //loop through products to display them individually
    // Now we targetting Laptops
    products.forEach((product) => {
        // using if statements
        if (product.category == "Laptops") {
            const elementProduct = document.createElement("div")
            elementProduct.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <p>R ${product.price}</p>
            <button onclick="addToCart(${product.id})" >Add to Cart</button>`;
            ourProducts.appendChild(elementProduct);
        }
    })

    // Cellphones
    products.forEach((product) => {
        // using if statements
        if (product.category == "Cellphones") {
            const elementProduct = document.createElement("div")
            elementProduct.innerHTML = `

            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <p>R ${product.price}</p>
            <button onclick="addToCart(${product.id})" >Add to Cart</button>`;
            ourProducts.appendChild(elementProduct);
        }
    })

    // Accessories
    products.forEach((product) => {
        // using if statements
        if (product.category == "Accessories") {
            const elementProduct = document.createElement("div")
            elementProduct.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <p>R ${product.price}</p>
            <button onclick="addToCart(${product.id})" >Add to Cart</button>`;
            ourProducts.appendChild(elementProduct);
        }
    })
}


const cart = [];
function addToCart(productId) {
    const cartContainer = document.getElementById("cart-container");
    const product = products.find((product) => product.id === productId);
  
    if (product && product.quantity > 0) {
      cart.push(product);
      product.quantity--;
      updateCart();
    }
}

function updateCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    cart.forEach(product => {
        const cartItem = document.createElement("div")
        cartItem.innerHTML = `<span>${product.name}</span>
        <span>${product.price}</span>
        `
        cartContainer.appendChild(cartItem)
    }) 
}

productsDisplay()