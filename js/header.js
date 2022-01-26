console.clear();
const parentGrid = document.querySelector('.navlist_grid');
parentGrid.addEventListener('click', (e) => {
	const eClick = e.target;

	if (eClick.closest('div').classList.contains('list_item-acordion')) {
		eClick.parentElement.children[1].classList.toggle('nav_hidden');
		eClick.classList.toggle('rotate_angle');
	}
});
const menuBtn = document.querySelector('.menu_button');
const menuList = document.querySelector('.navlist_grid');
const menuClose = document.querySelector('.menu_button_close');

menuBtn.addEventListener('click', (e) => {
	if (menuBtn) {
		menuList.classList.toggle('menu_hidden');
		document.body.style.overflow = 'hidden';
	}
});
menuClose.addEventListener('click', (e) => {
	if (menuClose) {
		document.body.style.overflow = 'scroll';
		menuList.classList.toggle('menu_hidden');
	}
});
