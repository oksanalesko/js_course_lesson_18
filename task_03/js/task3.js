"use strict"
if (confirm("Почати тестування?")) {
	window.onload = function () {

		// Введення даних, позначення величин

		const resultAge = document.querySelector('#age')

		// Обчислення результатів

		function getUserAge() {
			
			const userYearOfBirth = parseFloat(document.getElementById('yearOfBirth').value)
			const currentYear = new Date().getFullYear()
			const userAge = currentYear - userYearOfBirth
			return resultAge.innerText = userAge
		}
		// Виведення результатів

		document.querySelector('#getAge').onclick = getUserAge
	}
}
