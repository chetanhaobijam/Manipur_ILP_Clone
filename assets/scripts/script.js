// ScrollTopTop Button Action
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;

const handleScroll = () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if((rootElement.scrollTop / scrollTotal) > 0.30) {
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

