import selRoti from './assets/img/Sel_Roti_Nepalese-Food.png';

export default function homeTab() {
	const home = document.createElement('div');
	home.classList.add('home');
	home.style.backgroundImage = `url(${selRoti})`;

	home.appendChild(pTag(`
		<h1>Welcome To 101% Nepali Resturant</h1>
		<br>
		"Our body is Food we Eat" <br>
		So eat Without any doubt. This is the food that you Need
		. That, Every cell of your body need.
	`));

	return home;
}

function pTag(text) {
	const p = document.createElement('p');
	p.classList.add('home-text');
	p.innerHTML = text;

	return p;
}