var spans = document.getElementsByTagName('span');
var image = document.querySelector('.image');
var button = document.querySelector('.button');

function doSetTimeout(i) {
    setTimeout(function () {
        spans[i].classList.add('animate-in');
        // Trigger image animation after the last span of h2
        if (i === spans.length - 1) {
            setTimeout(function () {
                image.classList.add('animate-in');
            }, var(--duration));
        }
    }, 120 * i);
}

function animateButton() {
    setTimeout(function () {
        button.classList.add('animate-in');
    }, 120 * spans.length + var(--duration) * 2); // Wait for image animation to complete
}

window.addEventListener('load', function () {
    for (var i = 0; i < spans.length; i++) {
        doSetTimeout(i);
    }
    animateButton();
});
