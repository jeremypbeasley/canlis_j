$(document).ready(function() {

  // DYNAMIC RESY WIDGET

  $('.ResLink').click(function() {
    resyWidget.openModal({
      "venueId":1009,
      "apiKey":"ID6KeKVfi4DZDk013RH9vP1nfYnQd57s",
      "replace":true
    });
  });

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

  // vid.addEventListener('ended', function() {
  //   vid.pause();
  //   vidFade();
  // });

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

});
