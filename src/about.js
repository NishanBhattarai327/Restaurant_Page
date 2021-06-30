export default function aboutTab() {
	let about = document.createElement('div');
	about.classList.add('about');
	
	about.appendChild(pTag(`
		<h2><u>Nepali Food Restaurant</u></h2>
		<br><br>
		East and West Nepali Resturant is the Best. We are world No.1
		in the business. None of the Resturant of any of the country in 
		the whole multiverse can give you a food as Good as Us. As Well 
		as we sever you <i>101%</i> only and only nepali food. Remember nowhere
		in the <strong>multiverse</strong>.
	`));

	return about;
}

function pTag(text) {
	const p = document.createElement('p');
	p.classList.add('about-us-message');
	p.innerHTML = text;
	return p;
}