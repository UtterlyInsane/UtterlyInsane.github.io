// Объект с данными для построения графика
const data = {
  labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'], // Месяцы в качестве меток по оси X
  datasets: [{
      label: 'Продажи кроватей', // Название набора данных
      data: [120, 90, 60, 100, 130, 150, 180, 160, 200, 180, 100, 60], // Данные о продажах кроватей по месяцам
      fill: false, // Не заполнять область под линией графика
      borderColor: 'rgb(255, 99, 132)', // Цвет линии графика для продаж кроватей
  }, {
      label: 'Продажи стульев', // Название набора данных
      data: [80, 70, 90, 100, 110, 70, 90, 40, 50, 100, 170, 90], // Данные о продажах стульев по месяцам
      fill: false, // Не заполнять область под линией графика
      borderColor: 'rgb(54, 162, 235)', // Цвет линии графика для продаж стульев
  }, {
      label: 'Продажи кресел', // Название набора данных
      data: [70, 40, 80, 90, 120, 110, 170, 130, 140, 100, 60, 70], // Данные о продажах кресел по месяцам
      fill: false, // Не заполнять область под линией графика
      borderColor: 'rgb(75, 192, 192)', // Цвет линии графика для продаж кресел
  }, {
      label: 'Продажи столов', // Название набора данных
      data: [100, 40, 120, 130, 135, 150, 100, 170, 80, 140, 200, 210], // Данные о продажах столов по месяцам
      fill: false, // Не заполнять область под линией графика
      borderColor: 'rgb(255, 205, 86)', // Цвет линии графика для продаж столов
  }]
};

// Конфигурация графика
const config = {
  type: 'line', // Тип графика - линейный
  data: data, // Используемые данные для построения графика
  options: {
      plugins: {
          tooltip: { // Конфигурация всплывающей подсказки
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Цвет фона подсказки
              borderColor: 'rgba(220, 20, 60, 0.7)', // Цвет рамки подсказки
              borderWidth: 3, // Ширина рамки подсказки
              titleColor: 'white', // Цвет заголовка подсказки
              bodyColor: 'white', // Цвет текста подсказки
              callbacks: {
                  label: function(context) {
                      return `Продано: ${context.parsed.y} шт`; // Формат текста подсказки
                  }
              }
          }
      },
      animations: { // Конфигурация анимации
          tension: {
              duration: 1000, // Продолжительность анимации
              easing: 'linear', // Функция сглаживания анимации
              from: 1, // Начальное значение
              to: 0, // Конечное значение
              loop: true // Зацикливание анимации
          }
      },
      scales: {
          y: {
              min: 0, // Минимальное значение по оси Y
              max: 250 // Максимальное значение по оси Y
          }
      }
  }
};

// Создание экземпляра графика и его отображение на странице
const myChart = new Chart(
  document.getElementById('myChart'), // DOM-элемент для отображения графика
  config // Конфигурация графика
);
