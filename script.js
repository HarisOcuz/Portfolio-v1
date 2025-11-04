"use strict";
// *********** ELEMENTS *************

const likeBtn = document.querySelectorAll(".like-btn");
const lightNightBtn = document.querySelector(".light-night");
const body = document.querySelector("body");
const accordionEl = document.querySelectorAll(".accordion");
const accProjectsEl = document.querySelector(".projects");
const accordionTitleContainer = document.querySelector(".a-flex");
const accordionElements = document.querySelectorAll(".accordion-header");
const commentBtn = document.querySelectorAll(".comment-btn");
const sections = document.querySelectorAll(".section");

// *********** LIKE FUNCTION *************
likeBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    console.log("Radi");
    btn.style.color = btn.style.color === "red" ? "#0c8599" : "red";
  });
});

// *********** ACCORDION CHANGE FUNCTION *************

accordionTitleContainer.addEventListener("click", (el) => {
  const clicked = el.target;
  console.log(clicked);
  if (clicked.classList.contains("accordion-header")) {
    // REMOVING ALL ACTIVE ACCORDIONS STATE
    accordionElements.forEach((tab) => {
      tab.classList.remove("accordion--active");
    });

    // REMOVING ALL CONTENT
    sections.forEach((tab) => {
      console.log(tab);
      tab.classList.remove("section--active");
    });
    // MAKING ACCORDIONDS ACTIVE
    clicked.classList.add("accordion--active");
    document
      .querySelector(`.section-${clicked.dataset.tab}`)
      .classList.add("section--active");
  } else return;
});

//   tab.classList.remove("accordion--active");
//   document
//     .querySelector(`.section-${tab.dataset.tab}`)
//     .classList.remove("section--active");
//   document
//     .querySelector(`.section-${tab.dataset.tab}`)
//     .classList.add("section--active");
// });

// *********** COMMMENT FUNCTION *************

commentBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    alert("Die Kommentare für diesen Post sind abgeschaltet");
  });
});

// *********** IMAGE CAROUSEL FUNCTION *************
const divImg = document.querySelectorAll(".test-img");
const arrows = document.querySelectorAll(".test-arrow");

const maxCarLength = divImg.length - 1;
let curImg = 0;

console.log(maxCarLength);
// Function to remove and add classes to images

const addRemoveClasses = function (e) {
  if (e === "add") {
    document
      .querySelector(`[data-img="${curImg + 1}"]`)
      .classList.add("img-visible");
    document
      .querySelector(`[data-img="${curImg + 1}"]`)
      .classList.remove("hidd-img");
  } else if (e === "remove") {
    document
      .querySelector(`[data-img="${curImg - 1}"]`)
      .classList.add("img-visible");
    document
      .querySelector(`[data-img="${curImg - 1}"]`)
      .classList.remove("hidd-img");
  }
  return console.log(e);
};

console.log(curImg);

/// EVENT LISTENER FOR SCROLLING
arrows.forEach((e) => {
  e.addEventListener("click", function () {
    divImg.forEach((e, i) => {
      if (e.classList.contains("img-visible")) {
        e.classList.remove("img-visible");
      }
      if (curImg > -1) {
        document
          .querySelector(".arrow-left-test")
          .classList.remove("arrow-left-test-hidden");
      }
      if (curImg + 1 !== maxCarLength) {
        document
          .querySelector(".arrow-right-test")
          .classList.remove("arrow-right-test-hidden");
      }
    });
    /// RIGHT ARROW
    if (e.classList.contains("arrow-right-test")) {
      if (curImg < maxCarLength) {
        addRemoveClasses("add");
        curImg++;
        console.log("right");
        if (curImg === maxCarLength) {
          document
            .querySelector(".arrow-right-test")
            .classList.add("arrow-right-test-hidden");
        }
      }
    }
    //// LEFT ARROW
    if (e.classList.contains("arrow-left-test")) {
      addRemoveClasses("remove");
      curImg--;
      if (curImg === 0) {
        document
          .querySelector(".arrow-left-test")
          .classList.add("arrow-left-test-hidden");
      }
      console.log("left");
    }
  });
});

//////// PROJEKTE Karusel - RADI v1

// const btns = document.querySelector(".carousell-btns");
// const slides = document.querySelectorAll(".projekte-container");

// let curSlide = 0;

// btns.addEventListener("click", function (btn) {
//   slides.forEach((e) => {
//     if (e.classList.contains("projekte-container-visible"))
//       e.classList.remove("projekte-container-visible");
//   });
//   if (btn.target.classList.contains("icon-right")) {
//     document
//       .querySelector(`[data-car="${curSlide + 1}"]`)
//       .classList.add("projekte-container-visible");
//     curSlide++;
//     console.log("right");
//   } else if (btn.target.classList.contains("icon-left")) {
//     console.log("left");
//   }
// });

//////// PROJEKTE Karusel - RADI v2
