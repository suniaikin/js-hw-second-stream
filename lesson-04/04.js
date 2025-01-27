/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

const stroke2 = "hello"

function doubleEachCharacter(stroke) {
    let doubleStrokeArray = []
    let strokeToArray = stroke.split("")
        for (let i = 0; i < strokeToArray.length; i++) {
        doubleStrokeArray.push(strokeToArray[i] + strokeToArray[i])
        } return doubleStrokeArray.join("")

}
console.log(doubleEachCharacter(stroke2))