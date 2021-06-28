import * as tab from './tab';
import './css/style.css';

const $body = document.getElementById('content');

//adding tab swithching navigation bar to the content of the page
tab.attachNavbarTo($body);