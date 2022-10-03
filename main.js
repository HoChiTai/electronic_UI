
const btn_featured = document.querySelectorAll(".featured-product-btn li");

btn_featured.forEach(btn => {
  btn.addEventListener("click", () => {
      document.querySelector('.featured-product-btn li.active').classList.remove("active");
      btn.classList.add('active');
  })
})