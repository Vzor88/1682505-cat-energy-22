if (document.querySelector('.main-nav')) {
  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
}

if (document.querySelector('.slider')) {
  const sliderToggle = document.querySelector('.slider__toggle');
  const toggleBefore = document.querySelector('.slider__button--before');
  const toggleAfter = document.querySelector('.slider__button--after');

  sliderToggle.addEventListener('click',function () {
    if (sliderToggle.classList.contains('slider__toggle--before')){
      sliderToggle.classList.remove('slider__toggle--before');
      sliderToggle.classList.add('slider__toggle--after');
    } else {
      sliderToggle.classList.add('slider__toggle--before');
      sliderToggle.classList.remove('slider__toggle--after');
    }
  });

  toggleBefore.addEventListener('click',function () {
    sliderToggle.classList.add('slider__toggle--before');
    sliderToggle.classList.remove('slider__toggle--after');
  });

  toggleAfter.addEventListener('click',function () {
    sliderToggle.classList.remove('slider__toggle--before');
    sliderToggle.classList.add('slider__toggle--after');
  });
}
