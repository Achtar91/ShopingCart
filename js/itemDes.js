let products = JSON.parse(localStorage.getItem("product"));
let productId = localStorage.getItem("productId");
let ProductDetDom = document.querySelector(".item-det");
let productsDet = products.find( (item) => item.id == productId);

console.log(productsDet);

    ProductDetDom.innerHTML =  
          ` <img src="${productsDet.imageUrl}">
            <h2>${productsDet.titel}</h2>
            <p>size:${productsDet.size}</p>`






