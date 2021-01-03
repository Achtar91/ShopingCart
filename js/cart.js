
let productDiv = document.querySelector(".product-item");
let noProduct = document.querySelector(".no-products");

if(JSON.parse(localStorage.getItem("productInCart")).length === 0)
    noProduct.innerHTML = "There is no products !!";


function drawProduct(allProduct = []){
    let product = JSON.parse(localStorage.getItem("productInCart")) || allProduct;
    let productsUi =  product.map((item) =>{
         return `
                  <div class="product">
                        <div class="product-img" ><img src=${item.imageUrl} alt="headphone"></div>
                        <div class="product-info">
                            <h2 class="item-name">${item.titel}</h2>
                            <p class="item-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <span class="item-size">size :  ${item.size}</span>
                        </div>
                        <div class="product-action">
                            <button class="add-btn" onclick="removeFromCart(${item.id})"><span>Remove</span></button>
                            <i class="fav far fa-heart"></i>
                        </div>
                  </div> `;
     })
     productDiv.innerHTML = productsUi;
 }

 drawProduct();

//Remove items from carts
 function removeFromCart(id){
     let productItemsInCart = localStorage.getItem("productInCart")
    if(productItemsInCart){
        let items = JSON.parse(productItemsInCart);
        let newItemes = items.filter( (item) => item.id !== id);
        localStorage.setItem("productInCart" , JSON.stringify(newItemes));
        drawProduct(newItemes);
    }
 }


