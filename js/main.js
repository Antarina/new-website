function slideLeft() {
    document.getElementById('leftContent').classList.add('active-screen');
    document.getElementById('mainContent').classList.add('non-active');
}

function slideRight() {
    document.getElementById('rightContent').classList.add('active-screen');
    document.getElementById('mainContent').classList.add('non-active-right');
}

function slideDown() {
    document.getElementById('bottomContent').classList.add('active-screen');
    document.getElementById('mainContent').classList.add('non-active-bottom');
    document.getElementById('home').classList.remove('active');
    document.getElementById('biography').classList.add('active');
    document.getElementById('rightContent').classList.remove('active-screen');
    document.getElementById('leftContent').classList.remove('active-screen');
}

function slideBackLeft() {
    document.getElementById('rightContent').classList.remove('active-screen');
    document.getElementById('mainContent').classList.remove('non-active-right');
}

function slideBackRight() {
    document.getElementById('leftContent').classList.remove('active-screen');
    document.getElementById('mainContent').classList.remove('non-active');
}

function slideToTop() {
    document.getElementById('bottomContent').classList.remove('active-screen');
    document.getElementById('mainContent').classList.remove('non-active-bottom');
    document.getElementById('home').classList.add('active');
    document.getElementById('biography').classList.remove('active');
    document.getElementById('mainContent').classList.remove('non-active-right');
    document.getElementById('mainContent').classList.remove('non-active');
    document.getElementById('leftContent').classList.remove('active-screen');
    document.getElementById('rightContent').classList.remove('active-screen');
    const container = document.querySelector('.container')
    container.scrollTop
    container.scrollLeft
}