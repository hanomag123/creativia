import {DOM} from './scroll.js'

function loadBg() {
    let header = DOM.find('.header');
    header.classList.add('load');
}

export {loadBg}