document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".card-swiper", {
    // Optional parameters
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3.5,
      },
      768: {
        slidesPerView: 2.5,
      },
    },
  });

  /*smooth scroll*/
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  scroll.on("call", (action, event, container) => {
    if (action == "slideinleft") {
      container.el.classList.add("animate__slideInLeft");
    } else if (action == "slideinright") {
      container.el.classList.add("animate__slideInRight");
    }
  });
  scroll.on("scroll", (obj) => {
    var scrolly = obj.scroll.y;
    if (scrolly >= 50) {
      document.querySelector("nav").classList.add("nav-scroll");
    } else if (scrolly < 50) {
      document.querySelector("nav").classList.remove("nav-scroll");
    }
  });
  $(window).resize(function () {
    //throttle window maximize and restore button otherwise function will be fired before window has finished resizing
    setTimeout(function () {
      scroll.update();
    }, 150);
  });
  window.addEventListener(
    "load",
    () => {
      const swiper1 = new Swiper(".img-swiper", {
        // Optional parameters
        slidesPerView: 1,
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: ".header-next",
          prevEl: ".header-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
      });
      /*set slider height*/
      scroll.update();
    },
    false
  );
});
