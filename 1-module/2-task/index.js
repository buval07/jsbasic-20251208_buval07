/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  if (name === null) { //возвращем сразу false если пусто
    return false;
  }

  name = name.trim(); //убирает пробелы в начале и в конце строки, но не трогает пробелы внутри

  if (name.includes(' ') || name.length < 4) { //Проверяем содержит ли пробелы и длину не меньше 4
    return false;
  }

  return true;


}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}


