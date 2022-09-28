const clock = document.querySelector(".js-clock .clock-text");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minitues = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours} : ${minitues} : ${seconds}`
}

getClock(); //Call as soon as open the page
setInterval(getClock, 1000);


/*
const clock = document.querySelector(".js-clock .clock__text");

function getTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  clock.innerHTML = time;
  return;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  return;
}

init();
*/