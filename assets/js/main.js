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