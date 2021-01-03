let userInfo = document.querySelector("#user-info");
let userDom = document.querySelector("#user");
let logOut = document.querySelector(".logout");
let userName = localStorage.getItem ("username");
let links = document.querySelector("#links");

if(userName){
    links.remove();
    userInfo.style.display =  "flex";
    userDom.innerHTML = (localStorage.getItem ("username"));
}

logOut.addEventListener('click' , function(e){
    e.preventDefault();
    localStorage.clear();
    setTimeout( () =>{
        window.location = "register.html";
    }, 1500);
    
});