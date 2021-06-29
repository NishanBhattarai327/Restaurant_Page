import * as tab from './tab';
import './assets/css/style.css';
import imgSalad from './assets/img/salad.png';

const body = document.getElementById('content');

//adding tab swithching navigation bar to the content of the page
tab.attachNavbarTo(body);


//Add the image
const img = new Image();
img.width = 500;
img.height = 400;
img.src = imgSalad;

body.appendChild(img);