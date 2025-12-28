// Minimal JS for landing page interactions.
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for on-page anchors.
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        event.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Gallery slider: simple, reliable carousel with auto and manual controls.
  const gallerySlider = document.querySelector("[data-gallery-slider]");
  if (gallerySlider) {
    const track = gallerySlider.querySelector("[data-gallery-track]");
    const slides = track ? Array.from(track.children) : [];
    const prevBtn = gallerySlider.querySelector("[data-gallery-prev]");
    const nextBtn = gallerySlider.querySelector("[data-gallery-next]");
    if (!track || !slides.length) return;

    let currentIndex = 0;
    let timerId;

    const goTo = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const startAuto = () => {
      // Avoid multiple timers.
      if (timerId) window.clearInterval(timerId);
      if (slides.length > 1) {
        timerId = window.setInterval(() => goTo(currentIndex + 1), 3000);
      }
    };

    const stopAuto = () => {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = undefined;
      }
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        goTo(currentIndex - 1);
        startAuto();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        goTo(currentIndex + 1);
        startAuto();
      });
    }

    // Pause when user interacts for reliability.
    gallerySlider.addEventListener("pointerenter", stopAuto);
    gallerySlider.addEventListener("pointerleave", startAuto);
    gallerySlider.addEventListener("focusin", stopAuto);
    gallerySlider.addEventListener("focusout", startAuto);

    goTo(currentIndex);
    startAuto();
  }
})();
