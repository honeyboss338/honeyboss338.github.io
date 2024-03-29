// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require foundation
//= require basic
//= require jquery-ui-1.10.3.custom
//= require jquery.fancybox
//= require jquery.fancybox-buttons
//= require jquery.fancybox-media
//= require jquery.fancybox-thumbs
//= require jquery.knob
//= require jquery.flexslider
//= require jquery.lazyload.min
//= require jquery.quovolver
//= require jquery.ui.widget
//= require jquery.sausage
//= require modernizr-2.6.2.min
//= require sum_price
//= require tw_cn
//= require nicEdit

//= notrequire jquery-ui
//= require jquery_nested_form
//= require jquery_ujs



$(function() {
  $(document).foundation();  //foundation layout
  $('#press_mini blockquote').quovolver();  //quovolver
  $( "#deliver_deliver_at" ).datepicker({ minDate: "+1D", maxDate: "+7D" });  //datepicker
  //$( "#deliver_deliver_at" ).datepicker( "option", "dateFormat", "yy/mm/dd" );
  $('.flexslider').flexslider({animation: "slide"});
  $(".fancybox").fancybox({openEffect  : 'none', closeEffect : 'none'});
});

//CSRF problem, http://stackoverflow.com/questions/7203304/warning-cant-verify-csrf-token-authenticity-rails
$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

//image lazylode
$("img").lazyload({ 
 threshold : 200, 
 effect : "fadeIn"
});





$(function(){ $(document).foundation(); });
