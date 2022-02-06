let arrRight = document.querySelector('.header__arrowRight'),
    arrLeft = document.querySelector('.header__arrowLeft')
    elem = document.querySelector('.header__main__container'),
    value = 0,
    arr = [];

elemL = elem.cloneNode(true);
elemL.style.transform = 'translate(100vw)';
elemL.style.position = 'absolute'

elem.parentElement.append(elemL)

elemR = elem.cloneNode(true);
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

