/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}

const string = "123"
const string1 = "12.3"
const string2 = "123abc"
const string3 = "abc"
const string4 = " "

console.log(isNumeric(string));
console.log(isNumeric(string1));
console.log(isNumeric(string2));
console.log(isNumeric(string3));
console.log(isNumeric(string4));

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
