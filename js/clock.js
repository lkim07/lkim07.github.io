// current clock
const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const years = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    clock.innerText = `${years} \n ${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);
getClock();