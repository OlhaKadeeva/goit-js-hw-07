function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Функція для створення колекції елементів
function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  // Очищення контейнера перед додаванням нових елементів
  boxesContainer.innerHTML = "";

  const fragment = document.createDocumentFragment(); //Створення об'єкта fragment
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "5px";
    fragment.appendChild(box);
    size += 10;
  }
  boxesContainer.appendChild(fragment); //додавання fragment до контейнера boxes за одну операцію
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

//  Отримання посилань на елементи

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const inputField = document.querySelector("#controls input");

// Додавання обробників подій для кнопок
createButton.addEventListener("click", () => {
  const amount = parseInt(inputField.value.trim());
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputField.value = ""; // Очищення значення інпуту після створення елементів
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyButton.addEventListener("click", destroyBoxes);
