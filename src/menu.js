import imgSalad from './assets/img/salad.png';

export default function menuTab() {
	const menu = document.createElement('div');
	menu.classList.add('menu');

	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));
	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));
	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));
	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));
	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));
	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));
	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));
	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));
	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));
	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));
	menu.appendChild(menuCard(imgSalad, {name:'I am salad', price: 500}));

	return menu;
}

function createHeading(text) {
	let heading = document.createElement('header');
	heading.classList.add('menu-heading');
	heading.innerHTML = text;
	return heading;
}

function pTag(text) {
	const p = document.createElement('p');
	p.innerHTML = text;
	return p;
}

function menuCard(imgSrc, text) {
	const div = document.createElement('div');
	div.classList.add('responsive');
	div.innerHTML = `
		<div class='gallery'>
			<img class='food-img' src="${imgSrc}" alt="menu food"> 
			<div class='overlay'>
				<div class='desc'>
					${text.name} <br>
					Price Rs ${text.price}
				</div>
			</div>
		</div>
	`;
	return div;
}