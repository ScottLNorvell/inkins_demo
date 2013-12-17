// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
  $('#pop-menu').click(function(e) {
    e.preventDefault();
    $('.drop-menu').slideToggle();
  });
})