/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

// function includesElement(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return true
//         }
//     }  return false
// }

let arrayElem = [1, 2, 8, 4, 5, 3, 7, 8, 2, 10, 1, 12]

function findUniqueElements(array) {
    let arrayUniqueElements = []
    for (let i = 0; i < array.length; i++) {
        if(!arrayUniqueElements.includes(array[i])) {
            arrayUniqueElements.push(array[i]);
        }

    } return arrayUniqueElements
}

console.log(findUniqueElements(arrayElem));
