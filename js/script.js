// owl carousel top
$(document).ready(function () {
  const slider = $("#slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items: 4,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      1000: {
        items: 3
      },
      1500: {
        items: 4
      }
    }
  });
});

//bottom
$(document).ready(function () {
  const slider = $("#footer-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 5,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      },
      1500: {
        items: 5
      }
    }

  });
});



//Add Active Class to Current Page
let url = (location.href.split('/').pop());
let topNav = document.getElementById("topNavigation");
let topNavItems = topNav.getElementsByClassName("navigation__menu-item");

for (let i = 0; i < topNavItems.length; i++) {
  if (url === "index.html" || url === "") {
    topNavItems[0].className += " active";
  } else if (url === "single-post.html") {
    topNavItems[1].className += " active";
  } else if (url === "contact-us.html") {
    topNavItems[2].className += " active";
  } else if (url === "about-me.html") {
    topNavItems[3].className += " active";
  }
}


// sctroll to top
arrowTop.onclick = function () {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};
window.addEventListener('scroll', function () {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});


// Open/close overlay navigation
function openNav() {
  document.getElementById("topNavigation").classList.toggle("active");
  document.getElementById("menu-icon__top").classList.toggle("active");
  document.getElementById("menu-icon__middle").classList.toggle("active");
  document.getElementById("menu-icon__bottom").classList.toggle("active");
  document.getElementById("menuLink1").classList.toggle("active");
  document.getElementById("menuLink2").classList.toggle("active");
  document.getElementById("menuLink3").classList.toggle("active");
  document.getElementById("menuLink4").classList.toggle("active");
}
