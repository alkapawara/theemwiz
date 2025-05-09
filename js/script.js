
window.addEventListener("load", () => {
  gsap.to("#loader", {
    duration: 1,
    opacity: 0,
    pointerEvents: "none",
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("main-content").style.display = "block";
      gsap.from("#main-content", {
        opacity: 0,
        y: 50,
        duration: 1
      });
    }
  });
});

window.addEventListener("load", () => {
    gsap.to(".floating-img", {
      y: -10,               // Move 20px up
      duration: 1.5,        // Time for one direction
      yoyo: true,           // Come back to original
      repeat: -1,           // Infinite repeat
      ease: "power1.inOut"  // Smooth easing
    });
  });

  function playVideo() {
    document.querySelector(".video-thumbnail").style.display = "none";
    document.getElementById("video-container").style.display = "block";
  }


  const filterItems = document.querySelectorAll('.filter-menu li');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterItems.forEach(filter => {
  filter.addEventListener('click', () => {
    // Remove active class from all filters
    filterItems.forEach(item => item.classList.remove('active'));
    filter.classList.add('active');

    const filterValue = filter.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
