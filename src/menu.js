import imgSalad from './assets/img/salad.png';

export default function menuTab() {
	const menu = document.createElement('div');
	menu.classList.add('menu');

	//Add the image
	const img = new Image();
	img.width = 500;
	img.height = 400;
	img.src = imgSalad;

	menu.appendChild(createHeading());
	menu.appendChild(img);

	return menu;
}

function createHeading() {
	let heading = document.createElement('header');
	heading.classList.add('menu-heading');
	heading.innerHTML = "<h2>Menu </h2><br>What Do you want to eat?";
	return heading;
}