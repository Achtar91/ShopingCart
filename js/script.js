
/* set Products */
let productDiv = document.querySelector(".product-item");
let proudcListDom = document.querySelector(".itemsList");
let productMeniuDom = document.querySelector(".products-list")
let badgeDom = document.querySelector(".badge");
let shopingCartIcon =  document.querySelector(".shoppingCart");
let product = JSON.parse(localStorage.getItem("product"));
console.log(product);

shopingCartIcon.addEventListener("click", OpenCartMeniu);

//show products in the page 
(function drawProduct(){
   let productsUi =  product.map((item) =>{
        return `
                 <div class="product">
                       <div class="product-img" ><img src=${item.imageUrl} alt="headphone"></div>
                       <div class="product-info">
                           <a   class="item-name" onclick="getId(${item.id})">${item.titel}</a>
                           <p class="item-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                           <span class="item-size">size :  ${item.size}</span>
                       </div>
                       <div class="product-action">
                           <button class="add-btn" onclick="addToCart(${item.id})"><span>Add to cart</span></button>
                           <i class="fav far fa-heart"></i>
                       </div>
                 </div> `;
    })
    productDiv.innerHTML = productsUi;
})();


//Check if is there items in localstorage
let addedItem = localStorage.getItem("productInCart")
? JSON.parse(localStorage.getItem("productInCart"))
 : [];
 
if(addedItem){
   addedItem.map( (item) => {
       proudcListDom.innerHTML += `<p>${item.titel}</p>`;
   }); 
   badgeDom.style.display = "block";
   badgeDom.innerHTML += addedItem.length;
}

//Add items to cart
function addToCart(id){
    if(localStorage.getItem ("username")) {
        let choosenItem = product.find( (item) => item.id === id);
        proudcListDom.innerHTML += `<p>${choosenItem.titel}</p>`

        addedItem = [...addedItem, choosenItem];
        localStorage.setItem("productInCart", JSON.stringify(addedItem));
        let countProduct = document.querySelectorAll(".products-list div p");
        badgeDom.style.display = "block";
        badgeDom.innerHTML = countProduct.length;
      }
      else {
          window.location = "login.html";
      }
}

//Open cart meniu
function OpenCartMeniu(){
    if(productMeniuDom != "") {
        if( productMeniuDom.style.display == "none") {
            productMeniuDom.style.display = "block";
        }
        else {
            productMeniuDom.style.display = "none";
        }   
    }
}




function getId(id){
    localStorage.setItem("productId",id);
    window.location = "itemDesc.html"
}
