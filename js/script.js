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
  var boxTeaserItem = $('.box-teaser .box-teaser__line-task'),
      statusChange = function(){
        boxTeaserItem.each(function(){
          var boxTeaserStatus = boxTeaserItem.find('.box-teaser__status'),
              textstatus = $(this).find('.box-teaser__status').text();
          if(textstatus == "free"){
            $(this).find('.box-teaser__status').addClass('green');
          }
          else{
            $(this).find('.box-teaser__status').addClass('blue');
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
      $(this).find('> .tab-horizontal-mobile').html(tabclone);
      $('.quicktabs-wrapper').each(function(index){
        var tabclone = $(this).find('> .item-list ul.quicktabs-tabs li .quicktabs-loaded.active').text();
        $(this).find('> .item-list ul.quicktabs-tabs').before('<div class="tab-mobile">'+tabclone+'</div>');
      });
    });
    return false;
  };

  $('.horizontal-tabs .horizontal-tabs-list .horizontal-tab-button a').on('click', processTabHorizontal);

  var processTabHorizontalMobile = function () {
    $('.horizontal-tabs .horizontal-tabs-list').toggleClass('active');
  };

  $('.horizontal-tabs .tab-horizontal-mobile').on('click', processTabHorizontalMobile);

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

  var processTabVerticalMobile = function () {
    $('.quicktabs-wrapper .item-list .quicktabs-tabs').toggleClass('active');
  };

  $('.quicktabs-wrapper .item-list .tab-mobile').on('click', processTabVerticalMobile);

  $(".chosen-enable").chosen();

  // Js readmore for Box Intro 

  $('.box-intro_content').readmore({
    speed: 75,
    lessLink: '<a href="#">Read less</a>'
  });


  var lesstext = "Read Less",
      moretext = "Read More",
      ellipsestext = ".",
      showChar = 450,
      boxIntrocontent = $('.box-intro_content'),
      boxIntrocontentmarkup =function(){
        boxIntrocontent.each(function() {
          content = boxIntrocontent.html();
          if(content.length > showChar) {
            var c = content.substr(0, showChar),
                h = content.substr(showChar, content.length - showChar),
                html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
                $(this).html(html);
          }
        });
      },
      clickReadmore = function(){
        if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
        } else {
          $(this).addClass("less");
          $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
      };

  boxIntrocontentmarkup();
  $('.morelink').on('click', clickReadmore);

});
