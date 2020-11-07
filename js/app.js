const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.nav');

const menuToggle = () => {
    const menuOpenAttribute = 'nav-open'
    const menuIconOn = './images/icon-hamburger.svg';
    const menuIconOff = './images/icon-close.svg';
    const menuIcon = menuBtn.firstElementChild;

    if (!menu.hasAttribute(menuOpenAttribute)) {
        menuIcon.setAttribute('src', menuIconOff)
        menu.setAttribute(menuOpenAttribute, 'true')
    } else {
        menuIcon.setAttribute('src', menuIconOn)
        menu.removeAttribute(menuOpenAttribute)
    }
};

menuBtn.addEventListener('click', menuToggle);
