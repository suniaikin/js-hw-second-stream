/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code

let sum = 0;
//assign a variable for the result
let x = 1;
//assign a variable for the number in the targeted row
while (x <= 20) {
  //set up a "while" loop
  if (x % 2 === 1) {
    //if a number cannot be divided by 2 without a remainder
    sum = sum + x;
    //it should be added to the sum
  }
  x = x + 1;
  //after adding the odd number I'm going to the next number in the row
}
console.log(sum);
//show the result in console
