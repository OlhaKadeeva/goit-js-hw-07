form.addEventListener("submit", (event) => {
  event.preventDefault(); // перезавантаження сторінки

  const email = form.elements.email.value.trim(); // очищаємо від пробілів по краях trim()
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in"); // у формі є незаповнені поля, виводь alert
    return;
  }

  const formData = {
    email: email,
    password: password,
  }; //Якщо обидва поля заповнені, створюємо об'єкт formData, де ключами є імена полів введення і значення

  console.log(formData);

  form.reset(); // Очищуємо форму
});
