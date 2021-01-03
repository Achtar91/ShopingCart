let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#loginbtn");

let getUser = localStorage.getItem ("username");
let getPasword = localStorage.getItem ("password");

loginBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(userName.value === "" ||
       password.value === "") {
        alert("please fill data");
    } 
    else {
        if(getUser &&
            getUser.trim() === userName.value.trim() && getPasword &&
             getPasword === password.value){

            setTimeout( () =>{
                window.location = "index.html";
            }, 1500);
        }
    }


        
});