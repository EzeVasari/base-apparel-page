const d = document;

const changeSrc = (element, src) => {
    const $element = d.querySelector(element);

    $element.src = src;
}

function resizeHeroImage(width) {

    if (width >= 992) {
        changeSrc(".hero img", "images/hero-desktop.jpg");
    } else {
        changeSrc(".hero img", "images/hero-mobile.jpg");
    }
};

d.addEventListener("DOMContentLoaded", (e) => { resizeHeroImage(e.target.defaultView.innerWidth) });
window.addEventListener("resize", (e) => { resizeHeroImage(e.target.innerWidth) });


