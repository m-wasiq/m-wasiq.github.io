"use strict";

$(function () {
  "use strict"; // Prealoder

  $(window).on('load', function (e) {
    $('.preloader').delay(500).fadeOut(500);
  });
  $(document).ready(function () {
    $('#sb_now_hover').hover(function () {
      $("#sb_now").attr("class", "hover svg_menu_path_selection");
    }, function () {
      $("#sb_now").attr("class", "svg_menu_path_selection");
    });
    $('#sb_marketplace_hover').hover(function () {
      $("#sb_marketplace").attr("class", "hover svg_menu_path_selection");
    }, function () {
      $("#sb_marketplace").attr("class", "svg_menu_path_selection");
    });
    $('#sb_pro_hover').hover(function () {
      $("#sb_pro").attr("class", "hover svg_menu_path_selection");
    }, function () {
      $("#sb_pro").attr("class", "svg_menu_path_selection");
    });
    $('#sb_next_hover').hover(function () {
      $("#sb_next").attr("class", "hover svg_menu_path_selection");
    }, function () {
      $("#sb_next").attr("class", "svg_menu_path_selection");
    });
  }); // Counter Up

  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
});