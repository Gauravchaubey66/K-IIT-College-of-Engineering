  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
/* =========================
   Mobile Navbar Toggle
========================= */

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


/* =========================
   Active Navbar Link
========================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function () {

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    this.classList.add("active");

    // Close mobile menu after click
    navMenu.classList.remove("active");

  });
});


/* =========================
   Sticky Header
========================= */

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 50);

});

/* =========================
   GENERIC VIDEO MODAL
========================= */

const videoTriggers = document.querySelectorAll(".video-trigger");

const videoModal = document.getElementById("videoModal");

const popupVideo = document.getElementById("popupVideo");

const closeVideo = document.getElementById("closeVideo");


// Open Video

videoTriggers.forEach(trigger => {

  trigger.addEventListener("click", () => {

    const videoSrc = trigger.getAttribute("data-video");

    popupVideo.src = videoSrc;

    videoModal.classList.add("active");

    popupVideo.play();

  });

});


// Close Function

function closeVideoModal() {

  videoModal.classList.remove("active");

  popupVideo.pause();

  popupVideo.currentTime = 0;

}


// Close Button

closeVideo.addEventListener("click", closeVideoModal);


// Close Outside Click

videoModal.addEventListener("click", (e) => {

  if (e.target.classList.contains("video-overlay")) {

    closeVideoModal();

  }

});
