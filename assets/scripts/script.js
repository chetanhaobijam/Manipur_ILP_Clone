// ScrollTopTop Button Action
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;

const handleScroll = () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if((rootElement.scrollTop / scrollTotal) > 0.20) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

const scrollToTop = () => {
  rootElement.scrollTo ({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
// End of Scroll To Top Button Action

// Start of Permit Sub-grid Action
const permitSubGrid = document.querySelectorAll(".permitSubGrid");
const permitIcon = document.querySelectorAll(".permit-icon");
const permitForm = document.querySelectorAll(".permit-form");

for(let i = 0; i < permitSubGrid.length; i++) {
  permitSubGrid[i].addEventListener("mouseenter", () => {
    permitIcon[i].classList.add("zoom");
    permitForm[i].classList.add("pushUp");
  })
  permitSubGrid[i].addEventListener("mouseleave", () => {
    permitIcon[i].classList.remove("zoom");
    permitForm[i].classList.remove("pushUp");
  })
}