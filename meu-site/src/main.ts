let counter = 0;

const counterValue = document.getElementById("counter-value") as HTMLElement;
const btnIncreaseByOne = document.getElementById("increaseByOne") as HTMLButtonElement;
const btnIncreaseByTwo = document.getElementById("increaseByTwo") as HTMLButtonElement;
const btnDecreaseByOne = document.getElementById("decreaseByOne") as HTMLButtonElement;
const btnDecreaseByTwo = document.getElementById("decreaseByTwo") as HTMLButtonElement;

function updateCounter() {
  counterValue.textContent = counter.toString();
}

btnIncreaseByOne.addEventListener("click", () => {
  counter += 1;
  updateCounter();
});

btnIncreaseByTwo.addEventListener("click", () => {
  counter += 2;
  updateCounter();
});

btnDecreaseByOne.addEventListener("click", () => {
  counter -= 1;
  updateCounter();
});

btnDecreaseByTwo.addEventListener("click", () => {
  counter -= 2;
  updateCounter();
});

updateCounter();
