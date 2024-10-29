// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
// це перший .then(), який приймає response (відповідь сервера) і перетворює її в формат JSON. Метод response.json() обробляє текст відповіді і повертає його у вигляді JavaScript-об'єкта (або масиву, в залежності від структури даних).
// .then(json => console.log(json))
// це другий .then(), який приймає розпарсений JSON з попереднього кроку і виводить його в консоль браузера. Метод console.log(json) відображає об'єкт JSON для подальшого аналізу.
const menuToggle = document.querySelector('#menu-toggle');
const menuClose = document.querySelector('.menu_close');

// При натисканні на кнопку закриття знімаємо галочку з чекбокса, що закриє меню
menuClose.addEventListener('click', () => {
    menuToggle.checked = false; // Вимикаємо чекбокс, що закриває меню
});
