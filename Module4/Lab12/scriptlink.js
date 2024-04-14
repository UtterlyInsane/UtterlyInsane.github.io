// Функция для обработки события клика по ссылке
function openNewWindow(event) {
    // Предотвращаем стандартное действие ссылки
    event.preventDefault();

    // Открываем новое окно с текстом
    var newTextWindow = window.open('', 'Новое окно', 'width=400,height=200');
    newTextWindow.document.write("<h1>Привет, мир!</h1>");
    newTextWindow.document.write("<p>Это новое окно, открыто из гиперссылки.</p>");
}

// Получаем ссылку по ее идентификатору
var openWindowLink = document.getElementById('openWindowLink');

// Назначаем обработчик события клика по ссылке
openWindowLink.addEventListener('click', openNewWindow);
