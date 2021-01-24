const slider_container = document.querySelector(".slider");
const slide = document.querySelector(".slide");
const arrowLeft = document.querySelector(".arrow-nav--left");
const arrowRight = document.querySelector(".arrow-nav--right");


function moveSlide(){
    slide.firstElementChild.classList.toggle("active");
    slide.lastElementChild.classList.toggle("active");
}

let interval_slides = setInterval(moveSlide,4000);
function stop_interval(){
    clearInterval(interval_slides);
}

function start_interval(){
    interval_slides = setInterval(moveSlide,6000);
}



slider_container.addEventListener("mouseover", stop_interval);
slider_container.addEventListener("mouseleave", start_interval);
arrowLeft.addEventListener("click", moveSlide);
arrowRight.addEventListener("click", moveSlide);