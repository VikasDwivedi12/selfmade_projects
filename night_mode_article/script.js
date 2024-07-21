const logoContainer = document.getElementsByClassName('logo-container')[0];
const body = document.getElementsByTagName('body')[0];

logoContainer.addEventListener('click', function(){
    body.classList.toggle('night-mode');
    logoContainer.classList.toggle('logo-night-mode');
})