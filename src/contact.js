export default function contactTab() {
	const contact = document.createElement('div');
	contact.classList.add('contact');
	
	contact.appendChild(pTag(`
		<h2><u>Contact Us</u></h2>
		<br><br><br>
		Phone Number: <span class='number'>9800011100</span><br>
		Tel. Number: <span class='number'>025-7865</span><br>
		Location: <span class='location'>Submit Of Sagarmatha, Nepal</span><br>
		<br>
	`));

	return contact;
}

function pTag(text) {
	const p = document.createElement('p');
	p.classList.add('contact-info');
	p.innerHTML = text;
	return p;
}