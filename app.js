const sections = document.querySelectorAll('section')
const bubble = document.querySelector('.bubble')
const gradients = ['linear-gradient(to right, #ed4264, #ffedbc)','linear-gradient(to right, #085078, #85d8ce)','linear-gradient(to right, #1d976c, #93f9b9)'
];

const options = {
    threshhold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);
function navCheck(entries) {
    entries.forEach(entry => {
        console.log(entry);
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});