// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

//num is a random number
function isEven(num) {
	if (num % 2 === 0) {
		console.log(true);
	} else {
		console.log(false);
	}
	return num
}

console.log(isEven(6));

