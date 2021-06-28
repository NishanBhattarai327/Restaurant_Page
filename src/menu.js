export default function menuTab() {
	const menu = document.createElement('div');
	menu.classList.add('menu');

	menu.appendChild(createHeading());
	return menu;
}

function createHeading() {
	let heading = document.createElement('header');
	heading.classList.add('menu-heading');
	heading.innerHTML = "<h2>Menu </h2><br>What Do you want to eat?";
	return heading;
}