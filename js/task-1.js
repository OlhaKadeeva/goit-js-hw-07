/* ==================================================
Кількість категорій в ul#categories,елементів li.item
================================================== */

const categories = document.querySelectorAll("#categories > li.item");
console.log(`Number of categories: ${categories.length}`);

/* ==================================================
Для кожного елемента li.item у списку ul#categories 
знайде й виведе в консоль текст заголовка елемента (тегу <h2>) 
і кількість елементів у категорії (усіх <li>, вкладених у нього)
================================================== */

categories.forEach((category) => {
  // знаходимо заголовок(h2) і його текст(виводимо у консоль)
  const header = category.querySelector("h2").textContent;
  console.log(`Category: ${header}`);
  // знаходимо всі ел. li всередині кожної категорії(кільк.ел. у консоль)
  const item = category.querySelectorAll("ul > li");
  console.log(`Elements: ${item.length}`);
});
