$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    asNavFor: '.reviews__list',
    mobileFirst: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    // dots: true,
  });

  $('.reviews__list').slick({
    arrows: false,
    asNavFor: '.slider',
    focusOnSelect: true,
    mobileFirst: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    variableWidth: true,
    
  });
});
