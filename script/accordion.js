import { DOM } from "./scroll.js";




class Accord {
    static getArr(arr) {
        arr.forEach(el => {
            el.addEventListener('click', this.getItem)
        })
    }
    static getItem() {
        let arr = DOM.findAll('.about__accordion-content')
        let target = this.querySelector('.about__accordion-content')
        arr.forEach(el => {
            if (el !== target) {
                el.hidden = true
                el.closest('.about__accordion-item').classList.remove('select')
            }
        })
        target.hidden = !target.hidden
        target.closest('.about__accordion-item').classList.toggle('select')
    }
    static init(arr) {
        this.getArr(arr)
    }
}

export default Accord


