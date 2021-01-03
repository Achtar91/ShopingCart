let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");

let register_btn = document.querySelector("#sign_up");

function register(e){
    e.preventDefault();
    if(userName.value === "" ||
       email.value === "" ||
       password.value === "") {
            alert("please fill data");
    }
    else{
        localStorage.setItem("username", userName.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);

        setTimeout( () =>{

            window.location = "login.html";
        }, 1500);
    }
}

register_btn.addEventListener("click", register);