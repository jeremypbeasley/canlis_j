$(document).ready(function() {

  console.log("Main.js initialized")

  // Drone video on home page

  $("#bgvid").fadeTo( 600, 1 );

  var vid = document.getElementById("bgvid");
  var pauseButton = document.querySelector("#polina button");

  if (window.matchMedia('(prefers-reduced-motion)').matches) {
      vid.removeAttribute("autoplay");
      vid.pause();
      pauseButton.innerHTML = "Paused";
  }

  function vidFade() {
    vid.classList.add("stopfade");
  }

  // SK8R Feature

  function sk8r() {
    $('.sk8r').addClass( "sk8r_starting" );
    $('.sk8r_movement').addClass( "moving" );
    setTimeout(function(){
      $('.sk8r').removeClass( "sk8r_starting" );
      $('.sk8r_movement').removeClass( "moving" );
    }, 2500);
  }

  $('.wineStaff:last-of-type').click(function() {
    sk8r();
  });

  // MOBILE NAV

  $('.GlobalNav.ShowMobile').hide();

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

  // Announcement

  // Only show Announcement on the home page
  if (document.body.classList.contains('home')) {
    console.log("Announcement: On");
    $('.Announcement').show();
    $('.Announcement').addClass('active');
  }

  // Closes the popup and set the cookie
  $(document.body).on('click', '.Announcement .CloseButton, .AnnouncementOverlay, .AnnouncementLink', function(){
    $('.Announcement').hide();
    $('.Announcement').removeClass('active');
    console.log("Announcement: Off");
  });

  // Popup

  $(document.body).on('click', '.OrderLink', function(){
    var order_link = $(this).attr('data-link');
    var order_type = $(this).attr('data-order-type');
    var order_msg = $(this).attr('data-order-msg');
    console.log(order_link);
    console.log("ORDER TYPE: " + order_type);
    console.log("ORDER MSG: " + order_msg);
    $('.Popup').show();
    $('.Popup').addClass('active');
    $('#PopupButtonLink').attr('href', order_link);
    $('#PopupBody').html(order_msg);
  });

  // Closes the popup
  $(document.body).on('click', '.Popup .CloseButton, .PopupOverlay', function(){
    $('.Popup').hide();
    $('.Popup').removeClass('active');
    console.log("Popup: Off");
  });

});
