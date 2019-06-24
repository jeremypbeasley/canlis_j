$(document).ready(function() {

  console.log("Front end script initialized")

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

  console.log("closed")

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

  // Set conditional cookie so visitors don't see the  pop up once they've dismissed it
  if (Cookies.get('popup')) {
    console.log("it's off")
    $('.Announcement').show();
    $('.Announcement').addClass('active');
  } else {
    $('.Announcement').show();
  }

  // todo: fade in on load, fade out too

  // Closes the popup and set the cookie
  $(document.body).on('click', '.Announcement .CloseButton, .AnnouncementOverlay', function(){
    $('.Announcement').hide();
    $('.Announcement').removeClass('active');
    console.log("Announcement: Off");
    // Cookies.set('popup', 'off');
  });

});
