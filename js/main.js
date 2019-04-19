function slideLeft() {
    document.getElementById('leftContent').classList.add('active-screen');
    document.getElementById('mainContent').classList.add('non-active');
}

function slideRight() {
    document.getElementById('rightContent').classList.add('active-screen');
    document.getElementById('mainContent').classList.add('non-active-right');
}

function slideBackLeft() {
    document.getElementById('rightContent').classList.remove('active-screen');
    document.getElementById('mainContent').classList.remove('non-active-right');
}

function slideBackRight() {
    document.getElementById('leftContent').classList.remove('active-screen');
    document.getElementById('mainContent').classList.remove('non-active');
}



