const pyramid = document.getElementById("pyramid");

let isDragging = false;
let previousClientX = 0;
let previousClientY = 0;
let initialTransform;

pyramid.addEventListener("mousedown", (event) => {
    isDragging = true;
    previousClientX = event.clientX;
    previousClientY = event.clientY;
    initialTransform = window.getComputedStyle(pyramid).getPropertyValue("transform");
});

pyramid.addEventListener("mousemove", (event) => {
    if (isDragging) {
        const deltaX = event.clientX - previousClientX;
        const deltaY = event.clientY - previousClientY;
        pyramid.style.transform = initialTransform + " rotateX(" + deltaY + "deg) rotateY(" + deltaX + "deg)";
    }
});

pyramid.addEventListener("mouseup", () => {
    isDragging = false;
});

const colorPicker = document.getElementById("colorPicker");
const inputValue = document.getElementById("inputValue");
const pyramidElement = document.querySelector(".pyramid");

colorPicker.addEventListener("input", function (event) {
    const newColor = event.target.value;
    const faces = document.querySelectorAll(".face");
    faces.forEach((face) => {
        face.style.backgroundColor = newColor;
    });
});

inputValue.addEventListener("input", function (event) {
    const newDuration = `${event.target.value}s`;
    pyramidElement.style.animationDuration = newDuration;
});

const configuracion = document.querySelector('.configuracion');
const menu = document.getElementById('menu');

let menuDesplegado = false;
let currentPosition = -250;

configuracion.addEventListener('click', function() {
    if (menuDesplegado) {
        menu.style.transform = `translateX(${currentPosition}px)`;
    } else {
        menu.style.transform = 'translateX(0px)';
    }
    menuDesplegado = !menuDesplegado;
});

const originalVisibility = {
    front: true,
    back: true,
    left: true,
    right: true
};

function toggleVisibility(clase) {
    const elemento = document.querySelector(`.face.${clase}`);
    if (elemento.style.display === 'none') {
        elemento.style.display = 'block';
        originalVisibility[clase] = true;
    } else {
        elemento.style.display = 'none';
        originalVisibility[clase] = false;
    }
}
