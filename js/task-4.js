const form = document.querySelector(".login-form");
const onFormSubmit = (event) => {
  event.preventDefault(); // перезавантаження сторінки

  const email = form.elements.email.value.trim(); // очищаємо від пробілів по краях trim()
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in"); // у формі є незаповнені поля, виводь alert
  }
  const formData = {
    email: email,
    password: password,
  }; //Якщо обидва поля заповнені, створюємо об'єкт formData, де ключами є імена полів введення і значення

  console.log(formData);

  form.reset(); // Очищуємо форму
};
form.addEventListener("submit", onFormSubmit);
