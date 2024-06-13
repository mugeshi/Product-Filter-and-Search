let products = {
    data:[
        {
            productName:"Regular white T-Shirt",
            category: "Topwear",
            price: "30",
            image: "white-tshirt.jpg",
        },
        {
            productName:"Beige Short Skirt",
            category: "Bottomwear",
            price: "100",
            image: "short-skirt.jpg",
        },
        {
            productName:"sport watch",
            category: "watch",
            price: "99",
            image: "sporty-smartwatch.jpg",
        },
        {
            productName:"Basic Knitted Top",
            category: "Topwear",
            price: "120",
            image: "knitted-top.jpg"
        },
        {
            productName:"Black Leather Jacket",
            category: "Jacket",
            price: "121",
            image: "black-leather-jacket.jpg",
        },
        {
            productName:"Stylish pink Trousers",
            category: "Bottomwear",
            price: "89",
            image: "pink-trouser.jpg"
        },
        {
            productName:"Brown Men's Jacket",
            category: "Jacket",
            price: "289",
            image: "brown-jacket.jpg"
        },
        {
            productName:"Comfy Gray Pants",
            category: "Bottomwear",
            price: "480",
            image: "comfy-gray-pants.jpg",
        },
    ],
};

for (let i of products.data) {
    // Create Card
    let card = document.createElement("div");
    // Card should have category and should stay hidden
    card.classList.add("card", i.category, "hide"); 
    // Image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container"); 
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Container
    let container = document.createElement("div");
    container.classList.add("container");

    // Product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    // Product price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

// Parameter passed from button (parameter same as category)
function filterProduct(value) {
    // Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        // Check if value equals innerText
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    // Select all cards
    let elements = document.querySelectorAll(".card");
    // Loop through all cards
    elements.forEach((element) => {
        // Display all cards on 'all' button click
        if (value === "all") {
            element.classList.remove("hide");
        } else {
            // Check if element contains category class
            if (element.classList.contains(value)) {
                // Display element based on category
                element.classList.remove("hide");
            } else {
                // Hide other elements
                element.classList.add("hide");
            }
        }
    });
}

// Search button click
document.getElementById("search").addEventListener("click", () => {
    // Initialization
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    
    // Loop through all elements
    elements.forEach((element, index) => {
        // Check if text includes the search value
        if (element.innerText.toUpperCase().includes(searchInput)) {
            // Display matching card
            cards[index].classList.remove("hide");
        } else {
            // Hide others
            cards[index].classList.add("hide");
        }
    });
});

// Initially display all products
window.onload = () => {
    filterProduct("all");
};
