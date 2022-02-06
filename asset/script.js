const menuToggle = document.querySelector('.burger input');
const navSlide = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  navSlide.classList.toggle('slide');
});
