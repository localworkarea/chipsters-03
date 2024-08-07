/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.section-01__slider')) { 
		var swiper = new Swiper('.section-01__slider', {
				modules: [Navigation],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 0,
				speed: 800,
				// effect: 'fade',
				navigation: {
						prevEl: '.section-01__slider .swiper-button-prev',
						nextEl: '.section-01__slider .swiper-button-next',
				},
				breakpoints: {
					320: {
						speed: 500,
					},
					767: {
						speed: 800,
					}
				},
				on: {
						init: function () {
								this.slides.forEach(function (slide, index) {
										var slideId = 'slide-' + (index + 1);
										slide.setAttribute('id', slideId);
										slide.classList.add('slide-' + (index + 1)); // Добавляем класс по номеру id
								});
						},
						slideChange: function () {
								var activeIndex = this.activeIndex;
								var sectionBody = this.el.closest('.section-01__body'); // Находим ближайший родительский элемент с классом section-01__body
	
								// Удаляем все классы слайдов из section-01__body
								for (var i = 1; i <= swiper.slides.length; i++) {
										sectionBody.classList.remove('slide-' + i);
								}
	
								// Добавляем класс для текущего активного слайда
								sectionBody.classList.add('slide-' + (activeIndex + 1)); 
						}
				}
		});
	}
}	
	
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
// function initSlidersScroll() {
// 	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 	if (sliderScrollItems.length > 0) {
// 		for (let index = 0; index < sliderScrollItems.length; index++) {
// 			const sliderScrollItem = sliderScrollItems[index];
// 			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 			const sliderScroll = new Swiper(sliderScrollItem, {
// 				observer: true,
// 				observeParents: true,
// 				direction: 'vertical',
// 				slidesPerView: 'auto',
// 				freeMode: {
// 					enabled: true,
// 				},
// 				scrollbar: {
// 					el: sliderScrollBar,
// 					draggable: true,
// 					snapOnRelease: false
// 				},
// 				mousewheel: {
// 					releaseOnEdges: true,
// 				},
// 			});
// 			sliderScroll.scrollbar.updateSize();
// 		}
// 	}
// }

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});