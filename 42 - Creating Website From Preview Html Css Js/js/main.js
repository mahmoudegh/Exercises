document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
  }).mount();
});

var links = document.querySelectorAll('.navbar ul li a');

function activeLink(e) {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  e.target.classList.add('active');
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', activeLink);
}
