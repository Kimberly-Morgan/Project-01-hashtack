var burger = document.querySelector('.burger');
var nav = document.querySelector('#' + burger.dataset.target);
var header = document.querySelector('.headroom');

//Bulma responsive nav
burger.addEventListener('click', function(){
  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});

//Headroom (using Animate.css styles)
var headroom = new Headroom(header, {
  tolerance: {
    down : 10,
    up : 20
  },
  offset : 205
});
headroom.init();

const button = document.getElementById('button');
	button.addEventListener('click', () => {
		button.classList.add('is-loading');
	});