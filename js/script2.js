const nameUser = prompt("Введите имя");
const lastNameUser = prompt("Введите фамилию");
const nickUser = prompt("Введите никнейм");

if (
  (nameUser && lastNameUser && nickUser) ||
  (nameUser && lastNameUser && !nickUser)
) {
  alert(`Здравствуйте ${nameUser} ${lastNameUser}`);
} else if (!nameUser && lastNameUser && nickUser) {
  alert(`Здравствуйте ${nickUser}`);
} else if (nameUser && !lastNameUser && nickUser) {
  alert(`Здравствуйте ${nameUser} `);
} else if (
  (!nameUser && !lastNameUser && !nickUser) ||
  (!nameUser && lastNameUser && !nickUser) ||
  (!nameUser && !lastNameUser && nickUser)
) {
  alert("noname");
}

const number = +prompt("Введите любое число");
if (isNaN(number)) {
  alert("Вы ввели некорректное значение");
} else {
  const moreLess = number > 100 ? "больше ста" : "меньше ста";
  const plusMinus = number > 0 ? "положительное" : "отрицательное";
  const fractional = number % 1 === 0 ? "не дробное" : "дробное";
  const evenOdd = number % 2 === 0 ? "четное" : "нечетное";
  alert(`Ваше число ${moreLess}, ${plusMinus}, ${fractional}, ${evenOdd}`);
}

const numOne = +prompt("введи первое число");
const numTwo = +prompt("введи второе число");
const numThree = +prompt("введи третье число");
const result = numOne + numTwo + numThree;
isNaN(result) ? alert("введите цифры!") : alert(result);

const yourName = prompt("Введите Имя");
const age = +prompt("Введите возраст");
age > 17? alert(`Добро пожаловать ${yourName}`) : alert(`Простите, ${yourName}, доступ закрыт`);

const num = prompt("Введите число");
if (num > 10){
    alert('Вы превысили значение')
}
if(isNaN(num)) {
    alert('Вы ввели некорректное значение')
}
switch (num) {
  case 0:
    alert("ноль");
    break;
  case '1':
    alert("один");
    break;
  case '2':
    alert("два");
    break;
  case '3':
    alert("три");
    break;
  case '4':
    alert("четыре");
    break;
  case '5':
    alert("пять");
    break;
  case '6':
    alert("шесть");
    break;
  case '7':
    alert("семь");
    break;
  case '8':
    alert("восемь");
    break;
  case '9':
    alert("девять");
    break;
  case '10':
    alert("десять");
    break;
}

