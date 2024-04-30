const sectionFirst = document.querySelector(".section-first");
const sectionSecond = document.querySelector(".section-second");
const sectionThird = document.querySelector(".section-third");
const section = document.querySelector(".section");
const allVue = document.querySelectorAll(".background-vue img");

const h2Split = new SplitType(".section-third h2");
gsap.set("h2", { autoAlpha: "1" });

gsap.set([sectionFirst, ".section-second h2"], {
  opacity: 0,
  xPercent: -100,
});

const scrollTl = gsap
  .timeline({
    scrollTrigger: {
      trigger: section,
      start: "top",
      scrub: true,
      end: "bottom+=200%",
    },
  })
  .to(allVue, {
    xPercent: 60,
    skewX: 30,
  });

const firstScroll = gsap
  .timeline({})
  .to(sectionFirst, {
    xPercent: 0,
    opacity: 1,
    duration: 2,
    ease: "power4.out",
  })
  .to(".section-first img", {
    scale: 0.8,
    ease: "bounce",
    duration: 1.5,
  })
  .from(
    ".section-first h1",
    {
      xPercent: -300,
      ease: "power4.out",
      opacity: 0,
      duration: 2,
    },
    "0.8"
  )
  .from(
    ".section-first h2",
    {
      xPercent: 300,
      opacity: 0,
      ease: "power4.out",
      duration: 2,
    },
    "<"
  );

const secondScroll = gsap
  .timeline({
    scrollTrigger: {
      trigger: sectionSecond,
      start: "top-=50%",
      end: "bottom",
    },
  })
  .to(".section-second h2", {
    opacity: 1,
    duration: 1,
    xPercent: 0,
  })
  .from(".section-second h3", {
    xPercent: -250,
    stagger: 0.1,
  })
  .from(
    ".section-second li",
    {
      xPercent: -250,
      stagger: 0.07,
      opacity: 1,
      duration: 1.5,
    },
    "<"
  );

const thirdScroll = gsap
  .timeline({
    scrollTrigger: {
      trigger: sectionThird,
      start: "top-=30%",
      end: "bottom",
    },
  })
  .from(".char", {
    y: 50,
    opacity: 0,
    skewX: 40,
    stagger: 0.04,
    duration: 1,
  })
  .from(
    ".section-third li",
    {
      xPercent: 250,
      stagger: 0.09,
      duration: 1,
    },
    "0.7"
  );

const fourthScroll = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-fourth",
      start: "top-=30%",
      end: "bottom",
    },
  })
  .from(".section-fourth h2", {
    xPercent: -500,
    ease: "expoScale(0.5,7,none)",
  })
  .from(".section-fourth .project", {
    yPercent: -200,
    duration: 1.5,
    stagger: 0.2,
  });

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
