/*Remeber to include the library cookie js, to get this function working*/

if (!Cookies.get('age_verification')) {
    $('.age-verification-overlay').css('display', 'block');
    // remember to set none in css
}

jQuery('.age-verification-btn-yes').on('click', function (e) {
    e.preventDefault();
    Cookies.set('age_verification', 1, { expires: 30 });
    $('.age-verification-overlay').css('display', 'none');

});




const closeModalButtons = document.querySelectorAll('[id^="closeModal"]');
const switchToRegistrationLink = document.getElementById('switchToRegistration');
const switchToLoginLink = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const registrationForm = document.getElementById('registrationForm');
const modalContainer = document.getElementById('modalContainer');
const overlay = document.getElementById('overlay');
closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        closeModal();
    });
});
switchToRegistrationLink.addEventListener('click', () => {
    switchToRegistration();
});
switchToLoginLink.addEventListener('click', () => {
    switchToLogin();
});
function closeModal() {
    modalContainer.classList.add('hidden');
    overlay.classList.add('hidden');
}
function switchToRegistration() {
    loginForm.classList.add('hidden');
    registrationForm.classList.remove('hidden');
}
function switchToLogin() {
    loginForm.classList.remove('hidden');
    registrationForm.classList.add('hidden');
}
function openModalLogin() {
    modalContainer.classList.remove('hidden');
    overlay.classList.remove('hidden');
    switchToLogin();
}
function openModalRegistration() {
    modalContainer.classList.remove('hidden');
    overlay.classList.remove('hidden');
    switchToRegistration();
}
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');
    const loginButton = document.getElementById('loginButton');
    const registrationButton = document.getElementById('registrationButton');
    const modalContainer = document.getElementById('modalContainer');
    const overlay = document.getElementById('overlay');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Предотвращаем отправку формы
        // Получаем значения полей формы
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value;
        const password = passwordInput.value;
        // Сохраняем фейковый логин в localStorage
        localStorage.setItem('LoginUser', username);
        // Сбрасываем значения полей формы
        usernameInput.value = '';
        passwordInput.value = '';
        // Закрываем модальное окно
        closeModal();
        // Обновляем страницу
        window.location.reload();
        // Здесь вы можете выполнить дополнительные действия, например, отобразить сообщение об успешном входе и перенаправить пользователя
        // Пример: выводим сообщение об успешном входе в консоль
    });
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Предотвращаем отправку формы
        // Получаем значения полей формы
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value;
        const password = passwordInput.value;
        // Сохраняем фейковый логин в localStorage
        localStorage.setItem('LoginUser', username);
        // Сбрасываем значения полей формы
        usernameInput.value = '';
        passwordInput.value = '';
        // Закрываем модальное окно
        closeModal();
        // Обновляем страницу
        window.location.reload();
        // Здесь вы можете выполнить дополнительные действия, например, отобразить сообщение об успешном входе и перенаправить пользователя
        // Пример: выводим сообщение об успешном входе в консоль
    });
    function closeModal() {
        modalContainer.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    // Проверяем, сохранен ли фейковый логин в localStorage
    const LoginUser = localStorage.getItem('LoginUser');
    if (LoginUser) {
        // Создаем элементы для имени логина и аватарки
        const usernameElement = document.createElement('span');
        const avatarElement = document.createElement('img');
        // Настраиваем имя логина
        usernameElement.textContent = LoginUser;
        usernameElement.classList.add('mr-2', 'text-white');
        // Настраиваем SVG-изображение аватарки (путь к изображению замените на свой)
        avatarElement.src = './img/userimg.png';
        avatarElement.alt = 'Avatar';
        avatarElement.classList.add('w-6', 'h-6', 'rounded-full');
        // Заменяем кнопки на имя логина и аватарку
        loginButton.parentNode.replaceChild(usernameElement, loginButton);
        registrationButton.parentNode.replaceChild(avatarElement, registrationButton);
    }
});
closeModal();