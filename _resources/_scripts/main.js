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

  $(".Inverted.GlobalNav, .Inverted.AddressSidebar").hide();

  $(".Inverted.GlobalNav, .Inverted.AddressSidebar").css("opacity", 0);

  $(".Inverted.GlobalNav, .Inverted.AddressSidebar").delay(1000).fadeTo( 600, 1 );

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

  vid.addEventListener('ended', function() {
    vid.pause();
    // to capture IE10
    vidFade();
  });

  pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
      vid.play();
      pauseButton.innerHTML = "Pause";
    } else {
      vid.pause();
      pauseButton.innerHTML = "Paused";
    }
  })

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

});

// Trigger Resy Widget for Midnight

$('.MidnightButton').click(function() {
  resyWidget.openModal(
    {
      "venueId":1009,
      "apiKey":"ID6KeKVfi4DZDk013RH9vP1nfYnQd57s",
      "replace":true,
      "date":"2017-12-31"
    }
  )
});
