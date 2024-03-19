const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

function handleLogin(email, password) {
    switch (email) {
        case 'kiel@gmail.com':
            if (password === 'kiel123') {
                alert('Login successful');
                window.location.href = "https://kielanthony.github.io/layout6/";
            } else {
                alert('Incorrect password');
            }
            break;
        default:
            alert('No user found');
    }
}

function handleRegistration(username, email, password) {
    alert('Registration successful');
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    handleLogin(email, password);
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    handleRegistration(username, email, password);
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

