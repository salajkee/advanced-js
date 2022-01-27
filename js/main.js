"use strict";

// const ans = prompt('Введите ваше число');

// const reg = /\d/ig;

// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

// flags
// i - если мы хотим найти вне зависимости от регистра
// g - найти сразу несколько 
// m - многострочный режим 


// \W - не буквы
// \D - не цифры

// \d - ищем цифры
// \w - ищем слова, буквы
// \s - ищем пробелы

// console.log(ans.search(reg));
// console.log(ans.match(reg));


// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*'));

// console.log('12-34-56'.replace(/-/g, ":"));