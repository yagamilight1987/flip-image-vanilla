document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    document.addEventListener('keyup', (event) => {
        const key = event.key.toLowerCase();
        const horizontal = ['arrowright', 'arrowleft'];
        const vertical = ['arrowdown', 'arrowup'];
        if (horizontal.indexOf(key) > -1) {
            flip('x');
        }
        if (vertical.indexOf(key) > -1) {
            flip('y');
        }
    });

    const loadButton = document.getElementById('load');
    loadButton.addEventListener('click', () => {
        const value = document.getElementById('imageUrl').value;
        if (value && /^(https?):\/\/[^\s$.?#].[^\s]*(png|jpg|jpeg)$/.test(value)) {
            document.getElementById('my-image').src = value;
        }
    });
});

let scaleX = 1;
let scaleY = 1;

function flip(orientation) {
    if (orientation === 'x') {
        scaleX = scaleX * -1;
    } else if (orientation === 'y') {
        scaleY = scaleY * -1;
    }
    const element = document.getElementById('my-image');
    element.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
}
