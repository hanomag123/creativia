import {find, hide, DOM} from './scroll.js'
import Accord from './accordion.js'


let arrRight = DOM.find('.header__arrowRight'),
    arrLeft = DOM.find('.header__arrowLeft'),
    elem = DOM.find('.header__main__container'),
    value = 0,
    arr = [];

let elemL = elem.cloneNode(true);
elemL.style.transform = 'translate(100vw)';
elemL.style.position = 'absolute'

elem.parentElement.append(elemL)

let elemR = elem.cloneNode(true);
elemR.style.transform = 'translate(-100vw)';
elemR.style.position = 'absolute'

elem.parentElement.append(elemR)


arr = document.querySelectorAll('.header__main__container');

arrRight.onclick = function() {
    if (value === -100) {
        value = 0
    }
    value -= 100;
    elem.parentElement.style.transform = `translate(${value}vw)`;
}
arrLeft.onclick = function() {
    if (value === 100) {
        value = 0
    }
    value += 100;
    elem.parentElement.style.transform = `translate(${value}vw)`;
}

document.addEventListener('click', find)
document.addEventListener('scroll', hide)

let arrAcc = DOM.findAll('.about__accordion-item')


Accord.init(arrAcc)