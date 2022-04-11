let menuBtn = document.querySelector('.show-btn');
let menu = document.querySelector('.navigation');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('hide');
	menu.classList.toggle('hide');
})