let hamburgerIcon = document.getElementById("hamburger__icon");
let closeIcon = document.getElementById("close__icon");
let navBar = document.getElementById("navbar__container");
let overlay = document.getElementById("overlay");
console.log(overlay);
closeIcon.style.display = "none";
// navBar.style.display = "none";
// navBar.style.opacity = "0";
let body = document.querySelector("body");

hamburgerIcon.addEventListener("click", function () {
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  navBar.style.display = "flex";
  body.style.overflow = "hidden";
  overlay.classList.remove("hidden");
});

closeIcon.addEventListener("click", function () {
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  //   navBar.style.opacity = "0";
  navBar.style.display = "none";
  body.style.overflow = "visible";
  overlay.classList.add("hidden");
});

let faqOpen = document.getElementById("faq-open");
let faqClose = document.getElementById("faq-close");
let questionboxes = document.querySelectorAll(".question-box");
let answers = document.querySelectorAll(".answer");
answers.forEach((answer) => {
  answer.style.display = "none";
});

answers[0].style.display = "block";
answers[0].classList.add("mt-6");
answers[3].style.display = "block";
answers[3].classList.add("mt-6");
questionboxes.forEach((questionbox, index) => {
  let answer = answers[index];

  questionbox.addEventListener("click", function () {
    let displayedAnswer = answer.style.display !== "block";
    if (displayedAnswer) {
      answers.forEach((ans) => {
        ans.style.display = "none";
      });
      answer.style.display = "block";
      faqOpen.style.display = "none";
      faqClose.style.display = "block";
      answer.classList.add("mt-6");
    } else {
      answer.style.display = "none";
      faqOpen.style.display = "block";
      faqClose.style.display = "none";
    }
  });
});
