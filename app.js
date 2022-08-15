const form = document.querySelector("form");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");
const scoreEl = document.querySelector("small");

let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

h2.innerText = `What is ${num1} multiply by ${num2}?`
let correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`;
form.addEventListener("submit", () => {
    let userAns = parseInt(input.value);

    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    }
    else {
        score--;
        updateLocalStorage();
    }
    input.value = '';
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

