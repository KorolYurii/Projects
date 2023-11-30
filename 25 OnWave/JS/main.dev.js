"use strict";

$(function () {
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
  $('.arrivals_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.arrivals_arrow__left'),
    nextArrow: $('.arrivals_arrow__right'),
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
      }
    }]
  });
  $('.partners_slider').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $('.partners_arrow__left'),
    nextArrow: $('.partners_arrow__right'),
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false
      }
    }]
  });
});

function toggleMenu(e) {
  e.preventDefault();
  e.target.classList.toggle('active');
  document.querySelector('.main_nav').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.page_wrapper').classList.toggle('menu_open');
  document.querySelector('.logo').classList.toggle('menu_open');
}