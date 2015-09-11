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
  
  $('.box-teaser .box-teaser__item').each(function(){
    var text_status = $(this).find('.box-teaser__status').text();
    if(text_status == "free"){
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
  
});
