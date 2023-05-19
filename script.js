
const toggleSwitch = document.querySelector('.toggle');
const primaryHeader = document.getElementById('primary-header');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(event) {
    if (event.target.checked) {
        window.localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        window.localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// preferred theme
(() => {
    const currentTheme = window.localStorage.getItem('theme');

    if (currentTheme && currentTheme === 'dark') {
        toggleSwitch.checked = 'true';
        darkMode();
    }
})()


// Dark mode

function darkMode() {
    document.documentElement.setAttribute('data-theme', 'dark');

    toggleIcon.children[0].innerText = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    changeImageTheme('dark');
}

//Light mode

function lightMode() {
    document.documentElement.setAttribute('data-theme', 'light');
    
    toggleIcon.children[0].innerText = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    changeImageTheme('light');
}

/* Helper */

function changeImageTheme(theme) {
    image1.src = `img/undraw_proud_coder_${theme}.svg`;
    image2.src = `img/undraw_feeling_proud_${theme}.svg`;
    image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}