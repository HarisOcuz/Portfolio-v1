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

// * Function to remove and add classes to images

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

/// * EVENT LISTENER FOR SCROLLING

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

// *********** FOLLOW BTN *************
const followBtn = document.querySelector(".follow-btn");
let isFollowing = false;

followBtn.addEventListener("click", () => {
  isFollowing = !isFollowing;

  followBtn.innerHTML = isFollowing
    ? `<span>Unfollow</span>
       <span>
         <ion-icon class="icons-follow" name="person-remove-outline"></ion-icon>
       </span>`
    : `<span>Follow</span>
       <span>
         <ion-icon class="icons-follow" name="person-add-outline"></ion-icon>
       </span>`;

  if (isFollowing) {
    followBtn.classList.add("following");
  } else followBtn.classList.remove("following");
});

// *********** EMAIL FUNCTION *************

const openEmailForm = document.querySelectorAll(".email-onClick");
const closeEmailForm = document.querySelector(".close-email-form");
const overlay = document.querySelector(".email-overlay");
const emailForm = document.querySelector(".email-send-container");
const sendEmailBtn = document.querySelector(".send-email-btn");
const inputNameField = document.querySelector(".input-email-field-name");
const emailFieldUser = document.querySelector(".input-email-field-email");

const inputEmailFields = document.querySelectorAll(".input-email-field");

openEmailForm.forEach((btn) =>
  btn.addEventListener("click", function () {
    emailForm.classList.remove("hidden");
    overlay.classList.remove("hidden");
    inputNameField.focus();
  }),
);

function closeForm() {
  inputEmailFields.forEach((field) => (field.value = ""));
  inputEmailFields.forEach(
    (field) => (field.style.border = "2px solid #76e2f3"),
  );
  emailForm.classList.add("hidden");
  overlay.classList.add("hidden");
}

closeEmailForm.addEventListener("click", closeForm);

overlay.addEventListener("click", closeForm);

sendEmailBtn.addEventListener("click", function () {
  inputEmailFields.forEach((field) => {
    if (field.value === "") {
      field.classList.add("has-input-error");
    } else {
      field.classList.remove("has-input-error");
    }
  });
});

(function () {
  emailjs.init("YvYd4KQWL2gD1b_yv");
})();

const form = document.getElementById("contact-form");
const userContactName = document.querySelector(".user-name");
const userContactEmail = document.querySelector(".user-email");
const userContactMessage = document.querySelector(".message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_amve6a8", "template_wp32xcf", this)
    .then(() => {
      alert("Email sent successfully 🚀");
      closeForm();
    })
    .catch((error) => {
      console.error("Email error:", error);
      error.status === 412 && (emailFieldUser.style.border = "2px solid red");
    });
});
