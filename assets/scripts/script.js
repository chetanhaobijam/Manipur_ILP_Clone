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
const zoomIconOne = document.querySelector(".zoomIconOne");
const zoomGridOne = document.querySelector(".zoomGridOne");
const zoomIconTwo = document.querySelector(".zoomIconTwo");
const zoomGridTwo = document.querySelector(".zoomGridTwo");
const zoomIconThree = document.querySelector(".zoomIconThree");
const zoomGridThree = document.querySelector(".zoomGridThree");
const zoomIconFour = document.querySelector(".zoomIconFour");
const zoomGridFour = document.querySelector(".zoomGridFour");

const zoomInOne = () => {
  zoomIconOne.classList.add("zoom");
}

const zoomOutOne = () => {
  zoomIconOne.classList.remove("zoom");
}

const zoomInTwo = () => {
  zoomIconTwo.classList.add("zoom");
}

const zoomOutTwo = () => {
  zoomIconTwo.classList.remove("zoom");
}

const zoomInThree = () => {
  zoomIconThree.classList.add("zoom");
}

const zoomOutThree = () => {
  zoomIconThree.classList.remove("zoom");
}

const zoomInFour = () => {
  zoomIconFour.classList.add("zoom");
}

const zoomOutFour = () => {
  zoomIconFour.classList.remove("zoom");
}

zoomGridOne.addEventListener("mouseenter", zoomInOne);
zoomGridOne.addEventListener("mouseleave", zoomOutOne);
zoomGridTwo.addEventListener("mouseenter", zoomInTwo);
zoomGridTwo.addEventListener("mouseleave", zoomOutTwo);
zoomGridThree.addEventListener("mouseenter", zoomInThree);
zoomGridThree.addEventListener("mouseleave", zoomOutThree);
zoomGridFour.addEventListener("mouseenter", zoomInFour);
zoomGridFour.addEventListener("mouseleave", zoomOutFour);