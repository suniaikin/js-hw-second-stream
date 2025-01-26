/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let arrayFirst = [1, 2, 3 ]
let arraySecond = [2, 3, 4]

function findCommonElements(array1, array2) {
    let arrayCommonElements = []
      for (let i = 0; i < array1.length; i++) {
        if(array1.includes(array2[i])) {
            arrayCommonElements.push(array2[i]);
        } else if ((array2.includes(array1[i])) && (!arrayCommonElements.includes(array1[i]))) {
            arrayCommonElements.push(array1[i]);
        }

    } return arrayCommonElements
}

console.log(findCommonElements(arrayFirst, arraySecond));