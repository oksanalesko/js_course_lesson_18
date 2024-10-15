"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	window.onload = function () {

		// знаходимо поля для виведення результатів
		const resultOnEuro = document.querySelector('#resultEuro')
		const resultOnDollars = document.querySelector('#resultDollar')

		// Крок 1. Обчислення результатів
		
		// функція для обчислення суми у євро
		function getSumOnEuro(sumOnUAH) {
			const euroRate = 45
			const sumOnEuro = sumOnUAH / euroRate
			return resultOnEuro.innerText = sumOnEuro.toFixed(2)
		}

		// функція для обчислення суми у доларах
		function getSumOnDollars(sumOnUAH) {
			const dollarRate = 42
			const sumOnDollars = sumOnUAH / dollarRate
			return resultOnDollars.innerText = sumOnDollars.toFixed(2)
		}

		// крок 2. Виведення результатів

		document.querySelector('#convert').onclick = () => {
			const sumOnUAH = parseFloat(document.querySelector('#UAHSum').value)
			getSumOnEuro(sumOnUAH)
			getSumOnDollars(sumOnUAH)
		}
	}
}
