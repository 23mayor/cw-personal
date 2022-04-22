let sideBarBtn = document.querySelector('.show-btn');
let sideBar = document.querySelector('.navigation');
sideBarBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('hide');
	sideBar.classList.toggle('hide');
})