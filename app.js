let random = Math.floor(Math.random() * 20);
let inputt = document.querySelector("input");
let again = document.querySelector(".again");
// console.log(random);
let form = document.querySelector("form");
let h2 = document.querySelector("h2");
let guese = document.querySelector(".guese");
let score = document.querySelector(".score");
let i = 20;
let game = form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = e.target[0];
  let number = +input.value;
  e.target.reset();
  if (number === random) {
    h2.textContent = number;
    guese.style.backgroundColor = "lime";
    guese.innerHTML = "Correct";
  } else if (number > 5) {
    guese.innerHTML = "Too high";
  } else {
    guese.innerHTML = "Too low";
  }
  --i;
  score.innerHTML = i;
  if (i === 0) {
    score.innerHTML = "Urunishingiz tugadi";
    inputt.toggleAttribute("readonly");
    return;
  }
  console.log(number);
});

again.addEventListener("click", game());
