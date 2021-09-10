

const checkPoint = 200;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll < checkPoint) {
        opacity = 0;
    } else {
        opacity = 1;
    }
    document.querySelector('.img-hero-pg1').style.opacity = opacity;
});

window.onload = setTimeout( () => {
    document.querySelector('.page-four').style.transform = "scale(1, 1)";
}, 300);
window.onload = setTimeout(() => {
    document.querySelector('.page-three').style.transform = "scale(1, 1)";
}, 400);
window.onload = setTimeout(() => {
    document.querySelector('.page-two').style.transform = "scale(1, 1)";
}, 500);

const originalValuePar = window.innerHeight / 9;
const originalValueRotate = window.innerHeight / 2;
console.log(originalValuePar)


window.addEventListener("scroll", () => {
    const topLetters = document.querySelectorAll('.top-letters');
    topLetters.forEach(updateScrollPar);

    function updateScrollPar(element) {
        const scrollViewer = window.pageYOffset;
        const viewpointViewer = window.innerHeight;
        topValue = viewpointViewer/9;
        element.style.top = (topValue + scrollViewer) + "px";

    } 
    const rotateValue = document.querySelectorAll('.rotate');
    rotateValue.forEach(updateRotatePar);

    function updateRotatePar(elementScrollRotate) {
        const scrollViewer = window.pageYOffset;
        const viewpointViewer = window.innerHeight;
        const normalValue = (viewpointViewer / 2);
        elementScrollRotate.style.top = (normalValue + scrollViewer) + "px";
    }
})
window.onload = () => {
    const top = document.querySelectorAll('.top-letters');
    top.forEach(updateTop);

    function updateTop(element) {
        element.style.top = originalValuePar + "px";
    }
    const middle = document.querySelectorAll('.rotate');
    middle.forEach(updateMiddle);

    function updateMiddle(elementRotate) {
        elementRotate.style.top = originalValueRotate + "px";
    }
    const icon = document.querySelector('.icon-one');
    icon.style.marginTop = originalValuePar +"px";
}




