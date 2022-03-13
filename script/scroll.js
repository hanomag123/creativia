class DOM {
    static find(selector) {
        return document.querySelector(selector)
    }
    static findAll(selector) {
        return document.querySelectorAll(selector)
    }
}

function find() {
    let target = event.target.dataset
    if (target.scroll) {
        event.preventDefault()
        let elem = DOM.find(target.scroll);
        elem.scrollIntoView({behavior: "smooth"})
    }
}

function hide() {
    let button = DOM.find('.site__upButton')
    window.pageYOffset > 10 ? button.hidden = false : button.hidden = true;
}

hide()

export {find, hide, DOM}