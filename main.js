// const buttons = document.querySelectorAll("[data-carousel-button]");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselButton === "next" ? 1 : -1
//         const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         console.log(newIndex);
//         if (newIndex < 0) newIndex = slides.children.length - 1
//         if (newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active;
//     })
// })

// const carousel = document.querySelector('.carousel-app');
// const slider = document.querySelector('.slider');

// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');
// let direction;

// next.addEventListener('click', function() {
//   direction = -1;
//   carousel.style.justifyContent = 'flex-start';
//   slider.style.transform = 'translate(-20%)';  
// });

// prev.addEventListener('click', function() {
//   if (direction === -1) {
//     direction = 1;
//     slider.appendChild(slider.firstElementChild);
//   }
//   carousel.style.justifyContent = 'flex-end';    
//   slider.style.transform = 'translate(20%)';  
  
// });

// slider.addEventListener('transitionend', function() {
//   // get the last element and append it to the front

//   console.log(slider);
//   if (direction === 1) {
//     console.log(slider.lastElementChild);
//     slider.prepend(slider.lastElementChild);

//   } else {
//     console.log(slider.firstElementChild);
//     slider.appendChild(slider.firstElementChild);
//   }
  
//   slider.style.transition = 'none';
//   slider.style.transform = 'translate(0)';
//   setTimeout(() => {
//     slider.style.transition = 'all 0.5s';
//   })
// }, false);


const btn_featured = document.querySelectorAll(".featured-product-btn li");

btn_featured.forEach(btn => {
  btn.addEventListener("click", () => {
      document.querySelector('.featured-product-btn li.active').classList.remove("active");
      btn.classList.add('active');
  })
})