const topBtn = document.querySelector(".topBtn");

window.onscroll = function () {
  scrollFunc();
};

function scrollFunc() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topBtn.addEventListener("click", () => toTop());
