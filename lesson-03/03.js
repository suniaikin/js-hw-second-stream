// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

// Задаем три переменные для каждого из трех чисел
let num1 = Math.random() * 4;
let num2 = Math.random() * 4;
let num3 = Math.random() * 4;

// Задаем переменную для наибольшего числа
let theLargest

function findLargest(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3){
        return num2;
    } else if (num3 > num2 && num3 > num1){
        return num3;
    } else if (num1 > num2 && num1 < num3) {

    } else {
        return "Не определено"
    }
}
console.log(`Три выбранные числа: ${num1}, ${num2}, ${num3}`);
console.log("Наибольшее число: " + findLargest(num1, num2, num3));


