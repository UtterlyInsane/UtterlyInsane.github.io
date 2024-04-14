// Добавляем обработчик события отправки формы
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное действие отправки формы

    let isValid = true; // Флаг для проверки валидности формы
    const inputs = this.querySelectorAll('input, select, textarea'); // Получаем все элементы формы
    inputs.forEach(function(input) {
        // Проверяем валидность каждого элемента формы
        if (!input.checkValidity()) { // Если элемент не прошел валидацию
            isValid = false; // Устанавливаем флаг в false
            input.classList.add('error'); // Добавляем класс 'error' для стилизации ошибочных элементов
        } else {
            input.classList.remove('error'); // Удаляем класс 'error' для элементов, прошедших валидацию
        }
    });

    // Если все элементы формы прошли валидацию
    if (isValid) {
        updateOrderData(); // Обновляем данные заказа
        clearForm(); // Очищаем поля формы
    }
});

// Функция для очистки полей формы
function clearForm() {
    document.getElementById('orderForm').reset(); // Сбрасываем значения полей формы
}

// Добавляем обработчик события клика по кнопке отображения данных заказа
document.getElementById('showDataBtn').addEventListener('click', function() {
    displayOrderData(); // Вызываем функцию для отображения данных заказа
});

// Объект для хранения данных заказа
var orderData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    product: "",
    quantity: 0,
    comments: "",
    country: ""
};

// Функция для обновления данных заказа из формы
function updateOrderData() {
    orderData.fullName = document.getElementById('fullName').value; // Получаем значение поля "ФИО"
    orderData.email = document.getElementById('email').value; // Получаем значение поля "Email"
    orderData.phoneNumber = document.getElementById('phone').value; // Получаем значение поля "Телефон"
    orderData.product = document.getElementById('product').value; // Получаем значение поля "Товар"
    orderData.quantity = document.getElementById('quantity').value; // Получаем значение поля "Количество"
    orderData.comments = document.getElementById('comments').value; // Получаем значение поля "Комментарии"
    orderData.country = document.querySelector('input[name="country"]:checked').nextElementSibling.textContent; // Получаем значение выбранной страны
}

// Функция для отображения данных заказа
function displayOrderData() {
    var orderDataString = "<h3>Данные заказа:</h3>"; // Заголовок для отображения данных заказа
    // Формируем строку с данными заказа
    orderDataString += "<p>ФИО: " + orderData.fullName + "</p>"; // Добавляем данные о ФИО
    orderDataString += "<p>Email: " + orderData.email + "</p>"; // Добавляем данные о Email
    orderDataString += "<p>Телефон: " + orderData.phoneNumber + "</p>"; // Добавляем данные о телефоне
    orderDataString += "<p>Товар: " + orderData.product + "</p>"; // Добавляем данные о товаре
    orderDataString += "<p>Количество: " + orderData.quantity + "</p>"; // Добавляем данные о количестве
    orderDataString += "<p>Комментарии: " + orderData.comments + "</p>"; // Добавляем данные о комментариях
    orderDataString += "<p>Страна: " + orderData.country + "</p>"; // Добавляем данные о выбранной стране

    document.getElementById('orderData').innerHTML = orderDataString; // Отображаем данные заказа на странице
}
