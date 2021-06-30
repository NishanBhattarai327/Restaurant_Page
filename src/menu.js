import imgBamboo from './assets/img/beans-bamboo-shoots.png';
import imgChatamari from './assets/img/Chatamari-Nepal.png';
import imgChewra from './assets/img/chewra-sabzi.png';
import imgDalBhat from './assets/img/Dal-Bhat-Nepali-Vegetarian.png';
import imgDalBhatTarkari from './assets/img/Dal-bhat.png';
import imgDhido from './assets/img/Dhido-Nepalese-food.png';
import imgGundruk from './assets/img/Gundruk-and-Rice.png';
import imgMomo from './assets/img/Momo-in-Nepal.png';
import imgAlooAcchar from './assets/img/pickled-potatoes-aloo-acchar.png';
import imgPuwa from './assets/img/Puwa-Nepal.png';
import imgGedaGudi from './assets/img/samay-Baji-Nepal.png';
import imgSel from './assets/img/Sel_Roti_Nepalese-Food.png';
import imgYomari from './assets/img/Yomari-food-nepal.png';

export default function menuTab() {
	const menu = document.createElement('div');
	menu.classList.add('menu');

	menu.appendChild(menuCard(imgBamboo, {name:'Beans Bamboo Shoots', price: 200}));
	menu.appendChild(menuCard(imgChatamari, {name:'Chatamari', price: 100}));
	menu.appendChild(menuCard(imgChewra, {name:'Chewra Sabzi', price: 50}));
	menu.appendChild(menuCard(imgDalBhat, {name:'Special Dal Bhat Tarkari', price: 200}));
	menu.appendChild(menuCard(imgDalBhatTarkari, {name:'Dal Bhat Tarkari', price: 400}));
	menu.appendChild(menuCard(imgGundruk, {name:'Gundruk ra Bhat', price: 150}));
	menu.appendChild(menuCard(imgMomo, {name:'Mitho Momo', price: 110}));
	menu.appendChild(menuCard(imgAlooAcchar, {name:'Aloo Dhum', price: 50}));
	menu.appendChild(menuCard(imgGedaGudi, {name:'Geda Gudi ra Biscut', price: 300}));
	menu.appendChild(menuCard(imgSel, {name:'Sel Roti', price: 50}));
	menu.appendChild(menuCard(imgYomari, {name:'Yomari', price: 30}));

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
					Rs ${text.price}
				</div>
			</div>
		</div>
	`;
	return div;
}