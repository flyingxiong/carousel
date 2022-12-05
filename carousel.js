const imgs = [
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-221205-Daily-Deals-Cookies-Day07-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-221205-disney-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220912-clothing-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-221205-michelin-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-221205-tv-savings-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-1005-23-P4-MVM-Wk1-en.jpg',
]

const descriptions = [
    'Daily Deals',
    'Disney',
    'Clothing',
    'Michelin',
    'TVs',
    'Member-only Savings'
]

const data = {
    imgs,
    descriptions,  // when the key and value names are the same, we can use key name here
    index: 0,
    timerID: null,
    arrayButtons: []
}

const objs = {
    img: document.querySelector('.carousel img'),
    btnBar: document.querySelector('.carousel .btnBar'),
    navPrev: document.querySelector('.btnNav.prev'),
    navNext: document.querySelector('.btnNav.next'),
}

const cbClick = function (evt) {
    console.log('click', evt.target.dataset.imgid)

    let {imgid} = evt.target.dataset  //object distruction
    console.log('type of imgid', typeof (imgid))
    imgid = Number(imgid)

    objs.img.src = data.imgs[imgid]
} //call back click, use cb to present a group of call back functions

const timeHandler = function () {
    data.index++
    if (data.index === data.imgs.length) {
        data.index = 0
    }
    update(data.index)
}

const startAnimate = function () {
    data.timerID = setInterval(timeHandler,  3 * 1000)  //one time timer: setTimeout()
}

const stopAnimate = function () {
    if (data.timerID) {
        clearInterval(data.timerID)
        data.timerID = null
    }

}

const updatedSelected = function (index) {
    data.arrayButtons.forEach(function (ele, inx) {
        ele.className = ''
        data.arrayButtons[index].className = 'btnSelected'

    })
}


const cbMouseEnter = function (evt) {
    // debugger
    stopAnimate()
}

const cbMouseLeave = function (evt) {
    startAnimate()
}

const update = function (index) {
    updatedSelected(index)
    objs.img.src = data.imgs[index]
}

const cbPagePrev = function () {
    if (data.index > 0) {
        data.index--
        update(data.index)
    }
}

const cbPageNext = function () {
    if (data.index < data.imgs.length -1) {
        data.index++
        update(data.index)
    }
}

const createCarousel = function () {
    objs.img.src = data.imgs[data.index]
    objs.img.addEventListener('mouseenter', cbMouseEnter)
    objs.img.addEventListener('mouseleave', cbMouseLeave)
    console.log(objs.navPrev)
    objs.navPrev.addEventListener('click', cbPagePrev)
    objs.navNext.addEventListener('click', cbPageNext)


    for (let i = 0; i < imgs.length; i++) {
        let eleBtn = document.createElement('button')
        eleBtn.innerText = data.descriptions[i]
        eleBtn.dataset.imgid = i
        eleBtn.addEventListener('click', cbClick) //do not use as cbClick()

        objs.btnBar.appendChild(eleBtn)
        data.arrayButtons.push(eleBtn)
        if (i === 0) {
            updatedSelected(i)
        }
    }
}

createCarousel()
startAnimate()


//    navPrev: document.querySelector('.btnNav.prev'), is different from .btnNav .prev