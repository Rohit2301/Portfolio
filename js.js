const newtoggle = document.querySelector('.nav_toggle');

newtoggle.addEventListener('click', () => {
    document.body.classList.toggle('nav_open');
});


const newtoggle1 = document.querySelector('.nav_link');
newtoggle1.addEventListener('click', () => {
    document.body.classList.toggle('.nav_open2');
});
