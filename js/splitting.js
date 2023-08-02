let hero = document.querySelector('.splitting');
let heroTitles = document.querySelectorAll('.split_row_text>h2');
let heroSubTitles = document.querySelectorAll('.split_row_text>h4');
let heroSeparator = document.querySelectorAll('.split_row_speparator');
let heroMedia = document.querySelector('.split_media');
let onenter = false;


const initHero = () => {
  gsap.set(heroTitles, {
    y: '101%',
    opacity: 1
  });
  gsap.set(heroSubTitles, {
    opacity: 0
  });
  gsap.set(heroSeparator, {
    width: 0
  });
  gsap.set('.cell', {
    opacity: 1
  });

  showHero();
}
const showHero = () => {
  var tl = gsap.timeline();
  tl.to(heroTitles, {
    y: 0,
    duration: 1,
    ease: "expo.out",
    stagger: 0.2
  })
  tl.to(heroSubTitles, {
    opacity: 1,
    duration: 1,
    ease: "expo.in",
    stagger: 0.2
  }, -0.2)
  tl.to(heroSeparator, {
    width: '100%',
    duration: 1.5,
    ease: "expo.in",
    stagger: 0.2
  }, -0.2)
  tl.fromTo('.cell', {
    height: 0,
    scale: 0.5
  }, {
    duration: 1.25,
    height: '100%',
    scale: 1,
    stagger: 0.025,
    ease: 'expo.inOut'
  })

};

const splitAnimation = () => {
  Splitting({
    target: heroMedia,
    by: 'cells',
    image: true,
    rows: 4
  })
}


const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (!onenter && entry.isIntersecting) {
      splitAnimation();
      initHero();
      showHero();
      onenter = true;
      observer.unobserve(entry.target);
    }
  });
};

window.addEventListener('load', () => {
  const observer = new IntersectionObserver(handleIntersection, {
    rootMargin: '-300px 0px', // Trigger 300px before the element enters the viewport
  });
  observer.observe(hero);
});