---
title: Home
is_alert_shown: false
intro_video: "/uploads/bgvideo.mp4"
alert_text: "✨ We are open Dec 27-31st ✨"
alert_link: 
alert_color: "#c0deb2"
og_title: Canlis Restaurant
og_photo: "/uploads/moonrise_01.jpg"
og_desc: Seattle's landmark fine-dining destination for 70 years and recent home to
  multi-disciplinary pandemic pivots designed to serve our city.
section_1_label: 
section_1_headline: An Invitation
section_1_body: The opportunity to meet and serve you is one we don’t take lightly.
  Not for the past 74 years at least. Come spend an evening. Our favorite thing in
  the world is taking care of others, and few places can do it quite like we can.
section_1_body_small: 
section_1_link_text: 
section_1_link_url: 
section_1_photo: "/uploads/kris.jpg"
section_2_label: 
section_2_headline: The Space
section_2_body: This storied building was first designed by Roland Terry in 1950.
  Both Jim Cutler and George Suyama have helped develop it into an iconic expression
  of modern design. It continues to delight guests from all over the world with its
  natural light and stunning views of Seattle, Lake Union, and the Cascade mountain
  range.
section_2_body_small: Winner of the 2019 James Beard Design Icon Award
section_2_link_text: 
section_2_link_url: 
section_2_photo: "/uploads/kevin1.jpg"
section_3_label: In the press
section_3_headline: 'Canlis Ranked #2 Restaurant in America '
section_3_body: 'In the Spring of 2025, Food & Wine Magazine reached out to more than
  400 writers, chefs, and travel professionals to rank the best restaurants in America.
  Canlis was ranked second! What an absolute honor to have a group of our peers hold
  this restaurant in such esteem.  '
section_3_body_small: 
section_3_link_text: Read more
section_3_link_url: https://www.foodandwine.com/top-united-states-restaurants-2025-11691726
section_3_photo: "/uploads/flan.jpg"
food_photo_1: "/uploads/strawberry.jpg"
food_photo_2: "/uploads/pork.jpg"
layout: home_fall_2021
---

<style>

.kenlis {
 display:none;
  position: absolute;
  top: 5vw;
  left: 5vw;
  width: 100px;
  height: 100px;
  text-decoration: none;
  color: none;
  overflow: auto;
  transition: all 100ms ease-in-out;
  @media (min-width: 62em) {
    top: 1vw;
    left: 1vw;
    width: 200px;
    height: 200px;
  }
}
  
  
.kenlis .text {
  background: url(https://canlis.com/uploads/kenlis.png) no-repeat center center;
  background-size: contain;
  position: absolute;
  text-align: center;
  z-index: 9;
  border: 0;
  width: 100px;
  height: 100px;
  transition: all 100ms ease-in-out;
  transform: scale(.8) rotate(-10deg);
  margin-top: -5px;
  @media (min-width: 62em) {
    width: 200px;
    height: 200px;
  }
}

.kenlis .text:hover {
 transform: scale(.7) rotate(0deg);
}
  
.kenlis .burst {
  animation: 30s linear infinite rotate-con;
  width: 100px;
  height: 100px;
  background: url(https://canlis.com/uploads/burst3.png);
  background-size: cover;
  @media (min-width: 62em) {
    width: 200px;
    height: 200px;
  }
}

@keyframes rotate-con {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

</style>

<a class="kenlis" href="/kenlis">
  <div class="text"></div>
  <div class="burst"></div>
</a>
