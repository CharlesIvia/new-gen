//Fetch dom elements and set variables
const header = document.querySelector(".nav-header");

function stickyHeader() {
  if (window.pageYOffset > 600) {
    header.classList.add("header");
  } else {
    header.classList.remove("header");
  }
}

window.addEventListener("scroll", () => {
  stickyHeader();
});
