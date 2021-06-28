export default function homeTab() {
	const home = document.createElement('div');
	home.classList.add('home');

	home.innerHTML = '<h1>From HOMe</h1>';
	return home;
}