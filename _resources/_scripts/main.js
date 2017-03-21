$(document).ready(function() {

  // DYNAMIC RESY / OPENTABLE LINK

  function getResLink() {
    var current = new Date();
    var expiry  = new Date('March 20, 2017 22:31:00')
    if(current.getTime()>expiry.getTime()){
      //console.log('Reservation platform: Resy');
      $('.ResLink').attr('href', 'https://resy.com/cities/sea/canlis')
    }
    else {
      //console.log('Reservation platform: OpenTable');
      $('.ResLink').attr('href', 'https://www.opentable.com/canlis-reservations-seattle')
    }
  }
  getResLink();
  window.setInterval(function(){
    getResLink();
  }, 3000);

  // MOBILE NAV

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
