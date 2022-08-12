//задание 1
const question = prompt("как дела?");
alert(`Дела ${question}`);

//задание 2
const numOne = +prompt("введи первое число");
const numTwo = +prompt("введи второе число");
const numThree = +prompt("введи третье число");
alert(numOne + numTwo + numThree);

// задание 3
const yourName = prompt("Введите Имя");
const age = prompt("Введите возраст");
if (age >= 18) alert(`Добро пожаловать ${yourName}`);
else alert(`Простите, ${yourName}, доступ закрыт`);