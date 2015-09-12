// Script file
$(document).ready(function () {
  "use strict";

  // Menu responsive.
  var processMenuMobile = function () {
    $(this).toggleClass("active");
    $('.regionheader').toggleClass("active");
    $('.seccontent').toggleClass("active");
    return false;
  };

  var processSubMenuMobile = function () {
    $(this).parent("li").toggleClass("hover");
    return false;
  };

  var processSubSubMenuMobile = function () {
    $(this).toggleClass("active");
    $(this).next('.submenu').toggleClass("active");
  };

  $('.toggleMenu').on('click', processMenuMobile);
  $('.mainmenu li a').on('click', processSubMenuMobile);
  $('.navigation .mainmenu li.subitem > a').on('click', processSubSubMenuMobile);

  var processShowCode = function () {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
  };

  var processHideCode = function () {
    $(this).parents('.component--source').removeClass("active");
  };

  $('.show-code').on('click', processShowCode);
  $('.hide-code').on('click', processHideCode);

  // Js for Rating
  $('.box-teaser__rating-select').barrating();

  // Js for color Category
  var boxTeaserItem = $('.box-teaser .box-teaser__item'),
      statusChange = function(){
        boxTeaserItem.each(function(){
          var boxTeaserStatus = boxTeaserItem.find('.box-teaser__status'),
              textstatus = $(this).find('.box-teaser__status').text();
          if(textstatus == "free"){
            $(this).find('.box-teaser__status').css({
              'background-color': 'red'
            });
          }
          else{
            $(this).find('.box-teaser__status').css({
              'background-color': 'blue'
            });
          }
        });
      };

  statusChange();

  // Process click scroll top.
  var scrollGoToTop = function (e) {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    e.preventDefault();
  };

  $('.go-to-top').on('click', scrollGoToTop);

  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //grab the "back to top" link
    $back_to_top = $('.go-to-top');

  //hide or show the "back to top" link
  $(window).scroll(function() {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible');
  });
});
