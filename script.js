let imgs = [
    'imgs/background/sec_six/human1.png',
    'imgs/background/sec_six/human2.png',
    'imgs/background/sec_six/human3.png'
]

let person_text = [
    'The attention of a traveller, should be particularly turned, in the first place, to the various works of Nature, to mark the distinctions of the climates he may explore, and to offer such useful observations on the different productions as may occur.',
    'The attention of a traveller, should be particularly turned, in the first place, to the various works of Nature, to mark the distinctions of the climates he may explore, and to offer such useful observations on the different productions as may occur.',
    'The attention of a traveller, should be particularly turned, in the first place, to the various works of Nature, to mark the distinctions of the climates he may explore, and to offer such useful observations on the different productions as may occur.'
]

let person_names = [
    'Jennifer Smith',
    'John Doe',
    'Alexandra Smith'
]

let person_spec = [
    'Web Designer',
    'General Manager',
    'Magazine Editor'
]



let s_six_tabs = document.querySelector('.slider_tabs')
for (let i = 0; i < imgs.length; i++) {
    s_six_tabs.innerHTML += `<p onclick="scroll_card(${i})" class="tab"></p>`
}

let tags_p = document.querySelectorAll('.tab')
console.log(tags_p)

let sec_six_container = document.querySelector('.sec_six_container')
scroll_card(0)

function scroll_card(n) {
    sec_six_container.innerHTML = `
    <img src="${imgs[n]}" alt="slide">
    <h3>""</h3>
    <p>${person_text[n]}</p>
    <h4>${person_names[n]}</h4>
    <h5>${person_spec[n]}</h5>
    `
    for (let i = 0; i < imgs.length; i++) {
        tags_p[i].classList.remove('active')
    }
    tags_p[n].className += (' active')
}



// Кнопка вверх 
(function() {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
        console.log(scrolled)
        console.log(coords)
        if (scrolled > 20) {
            head_act.classList.add('active');
        }

        if (scrolled < 20) {
            head_act.classList.remove('active');
        }
        if (scrolled > coords) {
            goTopBtn.classList.add('active');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('active');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -10);
            setTimeout(backToTop, 7);
        }
    }

    var goTopBtn = document.querySelector('.button_to_top');
    var head_act = document.querySelector('.header')
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();

let btn_down = document.querySelector('.down')
let phone = document.querySelector('.phone_content')

function open_phone() {
    phone.classList.add('active')
}

function close_phone() {
    phone.classList.remove('active')
}
let links = document.querySelector('.pc_links')

function modal_in_modal() {
    links.classList.add('active')
    btn_down.outerHTML = `<i class="fa-solid fa-angle-up down" onclick="modal_in_modal_close()"></i>`
}

function modal_in_modal_close() {
    links.classList.remove('active')
        // btn_down.outerHTML = ``
        // phone.innerHTML = `<i class="fa-solid fa-angle-down down" onclick="modal_in_modal()" style="color:black;"> </i>`

}

let modal_buy_now = document.querySelector('.modal_buy_now')

function buy_now_modal() {
    modal_buy_now.classList.add('active')
}

function mbn_close() {
    modal_buy_now.classList.remove('active')
}

let video_tag = document.querySelector('.video')

function video_anim() {
    video_tag.classList.add('active')
}

function video_close() {
    video_tag.classList.remove('active')
}