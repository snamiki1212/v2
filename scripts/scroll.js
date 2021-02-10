const HIDDEN_CLASS = "hidden";
const EASE_IN_ANIME_CLASS = "ease-in";
const FADE_IN_DOWN_ANIME_CLASS = "fadeInDown";
const TARGET_CLASS_LIST = [
  ".section-aboutme",
  ".section-contact",
  ".section-experiences",
  ".section-projects",
];

const selectors = TARGET_CLASS_LIST.join(",");

const options = {
  rootMargin: "-100px",
};

window.addEventListener("DOMContentLoaded", () => {
  const createCallback = (selector) => (entries, observer) => {
    entries.forEach((entry) => {
      const elements = document.querySelectorAll(selector);

      const isInViewport = entry.intersectionRatio > 0;
      if (isInViewport) {
        elements.forEach((elem) => {
          elem.classList.remove(HIDDEN_CLASS);
          elem.classList.add(FADE_IN_DOWN_ANIME_CLASS);
        });
        observer.unobserve(entry.target);
      } else {
        // NOTE: when to load this page, immidiately execute(REF: https://stackoverflow.com/questions/53214116/intersectionobserver-callback-firing-immediately-on-page-load)
        elements.forEach((elem) => {
          elem.classList.add(HIDDEN_CLASS);
          elem.classList.remove(FADE_IN_DOWN_ANIME_CLASS);
        });
      }
    });
  };

  TARGET_CLASS_LIST.forEach((selector) => {
    const callback = createCallback(selector);
    const observer = new IntersectionObserver(callback, options);
    document.querySelectorAll(selector).forEach((elem) => {
      observer.observe(elem);
    });
  });

  
});

