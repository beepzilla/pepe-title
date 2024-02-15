var spans = document.getElementsByTagName('span');
var image = document.querySelector('.image');
var button = document.querySelector('.button');

function doSetTimeout(i) {
    setTimeout(function () {
        spans[i].classList.add('animate-in');
    }, 120 * i);
}

function animateImageAndButton() {
    setTimeout(function () {
        image.classList.add('animate-in');
    }, 120 * spans.length);

    setTimeout(function () {
        button.classList.add('animate-in');
    }, 120 * spans.length + 550); // 550ms is the duration of the animation
}

window.addEventListener('load', function () {
    for (var i = 0; i < spans.length; i++) {
        doSetTimeout(i);
    }
    animateImageAndButton();
});
