"use strict";

const toTop = document.querySelector('.gotopbtn');

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


const imgAll = document.querySelectorAll('.hidden')

let observer = new IntersectionObserver((enteries, observer) => {
  enteries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.visibility = "visible";
      entry.target.style.transition = "1s"; 
      entry.target.style.transform = "none"; 
      observer.unobserve(entry.target);
    }
  })
}, {
  threshold: 0.5,
})

document.querySelectorAll('.work__img').forEach(img => {observer.observe(img)})