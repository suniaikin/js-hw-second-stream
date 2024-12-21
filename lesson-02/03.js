/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

let score = 70; // тестовое значение, можно изменять
let grade;
// your code

score = Math.floor(Math.random() * 101);
prompt("Input the student score");

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 50 && score < 70) {
    grade = "D";
} else {
    grade = "F";
}

alert(`Your score is ${score}, your grade is ${grade}`);
