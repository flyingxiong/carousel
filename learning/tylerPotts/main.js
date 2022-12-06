const next_btn = document.querySelector('#next');
const prev_btn = document.querySelector('#prev');
const slider = document.querySelector('.slider');

let first_slide
let last_slide

let projects = [
    {
        title: "project 1",
        type: "Website",
        content: "Lorem ipsum dolor",
        image: "https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-221206-Daily-Deals-Cookies-Day08-en.jpg",

    },
    {
        title: "project 1",
        type: "Website",
        content: "Lorem ipsum dolor",
        image: "https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-221205-disney-en.jpg",
    },
    {
        title: "project 1",
        type: "Website",
        content: "Lorem ipsum dolor",
        image: "https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220912-clothing-en.jpg",
    }
]

projects.forEach(({title, type, content, image}, i) => {
    const slide = document.createElement('div')
    slide.classList.add('slider__slide')
    slide.style.backgroundImage = "url('"+ image +"')"
    if (i === 0) {
        first_slide = slide
        slide.classList.add('active');

    } else if ( i + 1 === projects.length) {
        last_slide = slide
    }

    const slide_content = document.createElement('div')
    slide_content.classList.add('slider__content')

    const content_title = document.createElement('h3')
    content_title.classList.add('slider__title')
    content_title.textContent = title

    const  content_type = document.createElement('span')
    content_type.textContent = type

    const content_content = document.createElement('div')
    content_content.classList.add('slider__desc')
    content_content.textContent = content

    content_title.appendChild(content_type)
    slide_content.appendChild(content_title)
    slide_content.appendChild(content_content)
    slide.appendChild(slide_content)
    slider.appendChild(slide)
})

next_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active')
    let nextSibling = active_slide.nextElementSibling
    console.log(nextSibling)
    if (nextSibling === null) {
        nextSibling = first_slide;
    }

    if (nextSibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active')
        nextSibling.classList.add('active')
    }
})


prev_btn.addEventListener('click', () => {
    const active_slide = document.querySelector('.slider__slide.active')
    let nextSibling = active_slide.previousElementSibling

    if (nextSibling === null || !nextSibling.classList.contains('slider__slide')) {
        nextSibling = last_slide;
    }

    if (nextSibling.classList.contains('slider__slide')) {
        active_slide.classList.remove('active')
        nextSibling.classList.add('active')
    }
})
