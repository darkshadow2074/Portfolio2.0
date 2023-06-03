let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
const openTab = (tabName) => {
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active-link");
  }
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }
  event.currentTarget.classList.add("active-link");
  const tabDetailsContainer = document.getElementById(tabName);
  tabDetailsContainer.classList.add("active");
};

let sideMenu = document.getElementById("sidemenu");
const openMenu = () => (sideMenu.style.right = "0");
const closeMenu = () => (sideMenu.style.right = "-200px");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbySqd-T3-kflXIkdVUafg-c_X6co4_JpxuSACikSOzITURFnFBVBfL-zskyJ6n9bi-e/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully : )";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

var typed = new Typed("span", {
  strings: ["Akash Kumar Singh.", "a Web Developer."],
  typeSpeed: 80,
  backSpeed: 100,
  loop: true,
});

// Preloader code
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("body").classList.add("loaded");
  }, 10);
});
