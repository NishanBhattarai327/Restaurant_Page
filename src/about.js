export default function aboutTab() {
	let about = document.createElement('div');
	about.classList.add('about');
	
	about.innerHTML = '<h1>This is About Us</h1>';

	return about;
}