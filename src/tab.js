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

	const menu = document.createElement('button');
	menu.textContent = 'Menu';
	menu.classList.add('btn-menu-tab');
	menu.addEventListener('click', () => {renderTab(tabBody, menuTab())});

	const home = document.createElement('button');
	home.textContent = 'home';
	home.classList.add('btn-home-tab');
	home.addEventListener('click', () => {renderTab(tabBody, homeTab())});

	const about = document.createElement('button');
	about.textContent = 'About Us';
	about.classList.add('btn-about-tab');
	about.addEventListener('click', () => {renderTab(tabBody, aboutTab())});

	const contact = document.createElement('button');
	contact.textContent = 'Contact';
	contact.classList.add('btn-contact-tab');
	contact.addEventListener('click', () => {renderTab(tabBody, contactTab())});

	navbar.appendChild(menu);
	navbar.appendChild(home);
	navbar.appendChild(about);
	navbar.appendChild(contact);

	body.appendChild(navbar);
	body.appendChild(tabBody);
}

