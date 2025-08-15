let list = document.querySelectorAll('.main .list .item');
let carousel = document.querySelector('.main');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let mockup = document.querySelector('.mockup');

let count = list.length;
let active = 0;
let leftMockup = 0;
let left_each_item = 100 / (list.length - 1);


next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    leftMockup = leftMockup + left_each_item;
    carousel.classList.remove('right');
    changeCarousel();
}
prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    leftMockup = leftMockup - left_each_item;
    carousel.classList.add('right');
    changeCarousel();
}
function changeCarousel() {
    let hidden_old = document.querySelector('.item.hidden');
    if(hidden_old) hidden_old.classList.remove('hidden');

    let active_old = document.querySelector('.item.active');
    active_old.classList.remove('active');
    active_old.classList.add('hidden');

    list[active].classList.add('active');

    mockup.style.setProperty('--left', leftMockup + '%');

    // Change navbar color based on current juice theme
    updateNavbarColor();

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}

function updateNavbarColor() {
    const header = document.querySelector('header');
    const colors = [
        'rgba(234, 61, 65, 0.95)', // Strawberry red
        'rgba(45, 86, 67, 0.95)',  // Avocado green
        'rgba(231, 160, 67, 0.95)' // Orange
    ];
    
    header.style.background = colors[active];
    header.style.transition = 'background 0.5s ease';
}


// Initialize navbar color
updateNavbarColor();

// auto run 3s
let refreshInterval = setInterval(()=> {next.click()}, 3000);