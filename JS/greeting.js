//get elements from input area
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/*function onLoginBtnClick() {
    //input validity check
    const username = loginInput.value;
    console.log(username);
    if (username === "") {
        alert("Please write your name!")
    } else if (username > 15) {
        alert("Your name is too long")
    }
    else {
        console.log("Hello ", username);
    }
}*/


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
   
    //greeting.innerText = "Hello " +username; // `Hello ${username}` variable inside the string
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}
//loginButton.addEventListener("click", onLoginBtnClick);
//loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(name){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello " +name; 
}

const savedUsername =  localStorage.getItem("username");

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello " +savedUsername; 

    paintGreetings(savedUsername);

}