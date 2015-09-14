// Script file
$(document).ready(function () {
  "use strict";

  $(".testimonial-inner").owlCarousel({
    autoPlay : 4000,
    stopOnHover : true,
    singleItem : true,
    autoHeight : true,
    pagination : false,
    navigation : true
  });

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
              'background-color': '#16a085'
            });
          }
          else{
            $(this).find('.box-teaser__status').css({
              'background-color': '#3498db'
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

  //Js for horizontal tabs
  $('.horizontal-tabs').each(function(){
    var tabclone = $(this).find('> .horizontal-tabs-list .horizontal-tab-button.selected a').text();
    $(this).find('> .horizontal-tabs-list').before('<div class="tab-horizontal-mobile">'+tabclone+'</div>');
  });

  var processTabHorizontal = function () {
    $('.horizontal-tabs .horizontal-tabs-list .horizontal-tab-button').removeClass("selected");
    $(this).parent().addClass("selected");
    var tab_item = $(this).parent();
    var item = tab_item.index();
    $('.horizontal-tabs .horizontal-tabs-panes .horizontal-tabs-pane').addClass('horizontal-tab-hidden');
    $('.horizontal-tabs .horizontal-tabs-panes .horizontal-tabs-pane:eq('+item+')').removeClass('horizontal-tab-hidden');
    $('.horizontal-tabs .tab-horizontal-mobile').empty();
    $('.horizontal-tabs').each(function(){
    var tabclone = $(this).find('> .horizontal-tabs-list .horizontal-tab-button.selected a').text();
<<<<<<< HEAD
        $(this).find('> .tab-horizontal-mobile').html(tabclone);
=======
      $(this).find('> .tab-horizontal-mobile').html(tabclone);
>>>>>>> 20
      $('.quicktabs-wrapper').each(function(index){
        var tabclone = $(this).find('> .item-list ul.quicktabs-tabs li .quicktabs-loaded.active').text();
        $(this).find('> .item-list ul.quicktabs-tabs').before('<div class="tab-mobile">'+tabclone+'</div>');
      });
    });
<<<<<<< HEAD
    return false;
  };

  $('.horizontal-tabs .horizontal-tabs-list .horizontal-tab-button a').on('click', processTabHorizontal);

  var processTabHorizontalMobile = function () {
    $('.horizontal-tabs .horizontal-tabs-list').toggleClass('active');
  };


  $('.horizontal-tabs .tab-horizontal-mobile').on('click', processTabHorizontalMobile);
=======
  };
>>>>>>> 20
  
  //Js for vertical tabs
  var processTabVertical = function () {
    $('.quicktabs-wrapper .quicktabs-tabs li .quicktabs-loaded').removeClass("active");
    $(this).addClass("active");
    var tab_item = $(this).parent();
    var item = $('.quicktabs-wrapper .quicktabs-tabs li').index(tab_item);
    $('.quicktabs_main .quicktabs-tabpage').addClass('quicktabs-hide');
    $('.quicktabs_main .quicktabs-tabpage:eq('+item+')').removeClass('quicktabs-hide');
    $('.quicktabs-wrapper .item-list .tab-mobile').remove();
    $('.quicktabs-wrapper').each(function(index){
      var tabclone = $(this).find('> .item-list ul.quicktabs-tabs li .quicktabs-loaded.active').text();
      $(this).find('> .item-list ul.quicktabs-tabs').before('<div class="tab-mobile">'+tabclone+'</div>');
    });
    return false;
  };

  $('.quicktabs-wrapper .quicktabs-tabs li .quicktabs-loaded').on('click', processTabVertical);
  $('.quicktabs-wrapper .item-list .tab-mobile').on('click', processTabVerticalMobile);

  var processTabVerticalMobile = function () {
    $('.quicktabs-wrapper .item-list .quicktabs-tabs').toggleClass('active');
  };
});
