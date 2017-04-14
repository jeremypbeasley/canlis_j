$(document).ready(function() {

  // DYNAMIC RESY WIDGET

  $('.ResLink').click(function() {
    resyWidget.openModal({
      "venueId":1009,
      "apiKey":"ID6KeKVfi4DZDk013RH9vP1nfYnQd57s",
      "replace":true
    });
  });

  // MOBILE NAV

  $('.GlobalNav').hide();

  var navOpen = false;
  $('.NavHamburger').click(function() {
    if (!navOpen) {
      $('.GlobalNav').show();
      $('.GlobalNav').addClass("Open");
      $(this).addClass("Open");
      navOpen = true;
    } else {
      $('.GlobalNav').removeClass("Open");
      $(this).removeClass("Open");
      setTimeout(function(){
        $('.GlobalNav').hide();
        navOpen = false;
      }, 400);
    }
  });

});
