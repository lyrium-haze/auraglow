function WhenLoaded() {
//slider
const swiperReview = new Swiper('.reviews__swiper-container', {
  slidesPerView: 2,
  spaceBetween: 100,
 // cssMode: true,
  navigation: {
      nextEl: '.slider__next',
      prevEl: '.reviews-prev',
    },
});
function hideNearestSlide(prev, next)
{
  if (next) {
    let img_two = next.firstElementChild;
    next.querySelector('.reviews__quote').classList.add('reviews__quote_hid');
    img_two.classList.add('img-hid');
  }
  if (prev)
  prev.querySelector('.reviews__quote').classList.add('reviews__quote_hid');
}
swiperReview.on('slideChange', () => {
  // let img_one = swiperReview.slides[swiperReview.realIndex].firstElementChild;
  // let img_two = swiperReview.slides[swiperReview.realIndex+1].firstElementChild;
  swiperReview.updateSlidesClasses();
  let active = swiperReview.el.querySelector('.swiper-slide-active');
  let prev = swiperReview.el.querySelector('.swiper-slide-prev');
  let next = swiperReview.el.querySelector('.swiper-slide-next');
  let img_one = active.firstElementChild;
  //console.log(img_one, img_two);
  img_one.nextElementSibling.classList.remove('reviews__quote_hid');
  img_one.classList.remove('img-hid');
  hideNearestSlide(prev, next);
});
//burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
function showMenu() {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu");
  menu.classList.toggle("menu_burger");
}
burger.addEventListener('click', showMenu);
//header scroll
const header = document.getElementById('header');
function header_scroll()
{
  if (window.pageYOffset > 200)
    header.classList.add('header_scrolled');
  else {
    header.classList.remove('header_scrolled');
  }
}
window.addEventListener('scroll', header_scroll);
//close promo
// function removeAncestor(elem, block)
// {
//   elem.closest(block).classList.add('_hide');
// }
const promo_close = document.querySelector('.promo-line__close');
promo_close.addEventListener('click', () => promo_close.closest('.header').classList.add('_hide'));
}
document.addEventListener("DOMContentLoaded", WhenLoaded);