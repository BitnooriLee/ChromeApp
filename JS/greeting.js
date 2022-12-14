const nameContainer = document.querySelector(".js-name");

function paintName(name) {
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `Hello ${name}`;
  nameContainer.appendChild(title);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem("username", value);
  paintName(value);
}

function paintInput() {
  const input = document.createElement("input");
  input.placeholder = "Type your name here";
  input.type = "text";
  input.className = "name__input";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
}

function loadName() {
  const name = localStorage.getItem("username");
  if (name === null) {
    paintInput();
  } else {
    paintName(name);
  }
}

function init() {
  loadName();
}

init();



/* 
//get elements from input area
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



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

*/