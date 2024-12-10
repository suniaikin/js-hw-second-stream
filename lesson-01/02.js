/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
// assign a variable to the target
let factorial = 1;
// assign a variable to a digit in the row
let n = 1;
// set the loop condition: works when n is less or equal 10
while (n <= 10) {
  factorial = factorial * n;
  n = n + 1;
}

console.log(factorial);
