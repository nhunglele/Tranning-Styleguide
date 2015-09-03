// Script file
$(document).ready(function () {
  "use strict";

  // Menu responsive.
  var processMenuMobile = function () {
    $(this).toggleClass("active");
    $('.region-header').toggleClass("active");
    $('.sec-content').toggleClass("active");
    return false;
  };
  
  var processSubMenuMobile = function () {
    $(this).parent("li").toggleClass("hover");
    return false;
  };

  var processSubSubMenuMobile = function () {
    $(this).toggleClass("active");
    $(this).next('.sub-menu').toggleClass("active");
  };

  $('.toggleMenu').on('click', processMenuMobile);
  $('.main-menu li a').on('click', processSubMenuMobile);
  $('.navigation .main-menu li.sub-item > a').on('click', processSubSubMenuMobile);
});