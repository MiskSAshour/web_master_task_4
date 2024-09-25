document.addEventListener("scroll", () => {
  const scrollBtn = document.getElementById("backToTopBtn");
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

document.getElementById("backToTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document
  .querySelector(".navbar-toggler")
  .addEventListener("mouseover", function () {
    document.querySelector("#navbarNav").style.display = "flex";
    document.querySelector("#navbarNav").style.flexDirection = "column";
  });

document
  .querySelector(".navbar-toggler")
  .addEventListener("mouseout", function () {
    document.querySelector("#navbarNav").style.display = "none";
  });
