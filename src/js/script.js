//HORIZONTAL SCROLLING

gsap.registerPlugin(ScrollTrigger);

let container = document.getElementById("wrapper");

gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    ease: "slow",
    pin: true,
    scrub: 1,
    end: () => "+=" + container.offsetWidth
  }
});

