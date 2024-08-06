// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', function () {
  const sectionFirst = document.querySelector('.section-00');
  const wrapper = document.querySelector('.section-00__wrapper');
  const button = document.querySelector('.section-00__btn-bus');
  let buttonClicked = false;
  // Функция для добавления класса
  function addBusActiveClass() {
      if (!buttonClicked) {
          wrapper.classList.add('_bus-active');
          sectionFirst.classList.add('_active');
      }
  }
  // Обработчик клика по кнопке
  button.addEventListener('click', function () {
      buttonClicked = true;
      wrapper.classList.add('_bus-active');
      sectionFirst.classList.add('_active');

  });
  // Добавление класса автоматически через 3 секунды, если кнопка не была нажата
  setTimeout(addBusActiveClass, 3000);
});
