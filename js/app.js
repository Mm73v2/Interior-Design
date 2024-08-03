// Selecting element from the dom & variable
const counters = document.querySelectorAll("#count");
const topBtn = document.querySelector(".top-btn");
const navbar = document.querySelector(".navbar");
const speed = 200;

// Making the landing section counter to go up after the page loads
counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("data-count");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = `${value}+`;
    }
  };

  animate();
});

// Setting a background for the navbar after scrolling and showing the go to top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-light");
    navbar.classList.add("navbar-sticky");
    topBtn.style.visibility = "visible";
  } else {
    navbar.classList.remove("bg-light");
    navbar.classList.remove("navbar-sticky");
    topBtn.style.visibility = "hidden";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
