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


// Email verification

const $input = d.querySelector("input[type=email]"),
$btn = d.querySelector(".btn-input"),
$textError = d.querySelector(".text-error-input"),
$iconError = d.querySelector(".icon-error-input"),
regexEmail = /(^$|^.*@.*\..*$)/;

$btn.addEventListener("click", checkEmail);
$input.addEventListener("keydown", checkEmail);

function checkEmail() {
    if ($input.value == "" || !regexEmail.test($input.value)) {
        $input.classList.add("border-error");
        $textError.classList.remove("none"); 
        $iconError.classList.remove("none"); 
    }else {
        $input.classList.remove("border-error");
        $textError.classList.add("none"); 
        $iconError.classList.add("none"); 
    }
}



