///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

// h1.addEventListener("click", function(){

// })
const currentYear = new Date().getFullYear();
const yearEl = document.querySelector(".year");
yearEl.textContent = currentYear;

////////////////////////
////////////////////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const initBtn = document.querySelector(".initial-button");
const primaryContent = document.querySelector(".primary-content");
const secondaryContent = document.querySelector(".secondary-content");
const firstHero = document.querySelector(".first-hero");
const secondHero = document.querySelector(".second-hero");
const darkToggle = document.querySelector(".dark-toggle");
const logos = document.querySelectorAll(".logos");

/////////////////////////
var primarySelected = true;

if (primarySelected === true) {
  secondHero.classList.remove("section-hero");
} else {
  secondHero.classList.add("section-hero");
}

initBtn.addEventListener("click", function (e) {
  e.preventDefault();
  primaryContent.style.opacity = "0";
  primaryContent.style.visibility = "hidden";

  setTimeout(function () {
    primaryContent.style.display = "none";
    secondaryContent.style.display = "block";
    setTimeout(function () {
      secondaryContent.style.opacity = "1";
      secondaryContent.style.visibility = "visible";
      primarySelected = false;
      observer.unobserve(firstHero);
      observer.observe(secondHero);
      // firstHero.classList.remove("section-hero");
      // secondHero.classList.add("section-hero");
    }, 50);
  }, 500);
});

/////////////////////////

darkToggle.addEventListener("click", function (e) {
  // e.preventDefault();
  document.body.classList.toggle("dark");
  logos.forEach(function (logos) {
    logos.classList.toggle("dark");
  });
});

/////////////////////////
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  // primaryContent.style.
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      const headerOffset = document.querySelector("header").offsetHeight;
      const sectionPosition =
        sectionEl.getBoundingClientRect().top - headerOffset;

      sectionEl.scrollIntoView({ behavior: "smooth" });
      window.scrollBy({ top: sectionPosition, behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

////////////////////////
////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");
const primaryContentEl = document.querySelector(".primary-content");
const heroSections = document.querySelectorAll(".section-hero");

// const observer = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     if (!ent.isIntersecting) {
//       document.body.classList.add("sticky");
//     }
//     if (ent.isIntersecting) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("intersecting");
        document.body.classList.remove("sticky");
      } else {
        document.body.classList.add("sticky");
        console.log("not intersecting");
      }
    });
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(firstHero);
// heroSections.forEach((section) => {
//   observer.observe(section);
// });

// observer.observe(primaryContentEl);

/////////////////////////
////////////////////////
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();

const imgTargets = document.querySelectorAll("img[data-src");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace the src with the data-src
  entry.target.src = entry.target.dataset.src;

  // Wait for the image to load
  entry.target.addEventListener("load", function () {
    // Once loaded, remove the "lazy-img" class
    entry.target.classList.remove("lazy-img");
  });

  // Stop observing the image
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

const gallery = document.querySelector(".gallery");

const loadGallery = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const images = entry.target.querySelectorAll("img[data-src]");
  images.forEach((img) => {
    img.src = img.dataset.src;
    img.addEventListener("load", function () {
      img.classList.remove("lazy-img");
    });
  });

  observer.unobserve(entry.target);
};

const galleryObserver = new IntersectionObserver(loadGallery, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

galleryObserver.observe(gallery);
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
