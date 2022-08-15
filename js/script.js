const question = prompt("как дела?");
alert(`Дела ${question}`);

const numOne = +prompt("введи первое число");
const numTwo = +prompt("введи второе число");
const numThree = +prompt("введи третье число");
alert(numOne + numTwo + numThree);

const yourName = prompt("Введите Имя");
const age = +prompt("Введите возраст");
if (age > 17) alert(`Добро пожаловать ${yourName}`);
else alert(`Простите, ${yourName}, доступ закрыт`);

const blockName = confirm("хотите ввести название блока?");
if (!blockName) {
  console.log("элементу не присвоен класс");
} else {
  const block = prompt("Введите название блока");
  const elementName = confirm("Хотите ввести название элемента?");
  if (!elementName) {
    console.log(block);
  } else {
    const element = prompt("Введите название элемента", "__");
    const modifierName = confirm("хотите ввести название модификатора?");
    if (!modifierName) {
      console.log(block + element);
    } else {
      const modifier = prompt("Введите название модификатора", "_");
      console.log(block + element + modifier);
    }
  }
}

const numberOne = +prompt("введи первое число");
const numberTwo = +prompt("введи второе число");
const signifier = prompt("выберите нужную арифметическую операцию", "+-/*");
if (signifier === "+") {
  console.log(numberOne+numberTwo);
}
if (signifier === "-") {
  console.log(numberOne-numberTwo);
}
if (signifier === "/") {
  console.log(numberOne/numberTwo);
}
if (signifier === "*") {
  console.log(numberOne*numberTwo);
}
