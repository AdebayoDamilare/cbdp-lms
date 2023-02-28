const answer = document.querySelectorAll(".item");
// const openItem = document.querySelector(".item");
answer.forEach((ans) => {
  ans.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});
// for (let i = 0; i < answer.length; i++) {
//   answer[i].addEventListener("click", function () {
//     this.classList.toggle("open");
//   });
// }
