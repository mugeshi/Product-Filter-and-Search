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
        productName:"sport",
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


for (let i of products.data){
    // Create Card
    let card = document.createElement("div");
    // Card should have category
    card.classList.add("card", i.category); 
    // Image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container"); 
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
}