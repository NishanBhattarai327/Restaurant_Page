import menuTab from './menu.js';
import homeTab from './home.js';
import contactTab from './contact.js';
import aboutTab from './about.js';
import * as helperFunc from './helperFunc'
export { attachNavbarTo };

function renderTab(body, tab) {
	/*append the new tab to the body by removing the previous tab*/
	if(body) {
		const availableTabContent = document.querySelector('.tab');
		if(availableTabContent)
			body.removeChild(availableTabContent);

		tab.classList.add('tab');
		body.appendChild(tab);
	}
}

function attachNavbarTo(body) {
	const navbar = document.createElement('div');
	navbar.classList.add("navbar");

	const tabBody = document.createElement('div');
	tabBody.classList.add('tab-content');

	const home = document.createElement('button');
	home.textContent = 'home';
	home.classList.add('btn-home-tab', 'btn', 'btn-tab');
	home.addEventListener('click', () => {renderTab(tabBody, homeTab())});

	const menu = document.createElement('button');
	menu.textContent = 'Menu';
	menu.classList.add('btn-menu-tab', 'btn', 'btn-tab');
	menu.addEventListener('click', () => {renderTab(tabBody, menuTab())});

	const about = document.createElement('button');
	about.textContent = 'About Us';
	about.classList.add('btn-about-tab', 'btn', 'btn-tab');
	about.addEventListener('click', () => {renderTab(tabBody, aboutTab())});

	const contact = document.createElement('button');
	contact.textContent = 'Contact';
	contact.classList.add('btn-contact-tab', 'btn', 'btn-tab');
	contact.addEventListener('click', () => {renderTab(tabBody, contactTab())});

	navbar.appendChild(home);
	navbar.appendChild(menu);
	navbar.appendChild(about);
	navbar.appendChild(contact);

	/*Default tab*/
	renderTab(tabBody, aboutTab());

	body.appendChild(navbar);
	body.appendChild(tabBody);
}

