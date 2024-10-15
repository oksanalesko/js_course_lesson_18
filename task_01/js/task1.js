"use strict"
if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Крок 0. Введення даних, позначення величин

		// знаходимо поле для виведення результату
		const result = document.querySelector("#result")

		// Крок 1. Обчислення результатів
		
		// функція знаходження суми
		function getSum() {
			const firstNumber = parseFloat(document.querySelector("#firstNum").value)
			const secondNumber = parseFloat(document.querySelector("#secondNum").value)
			const sum = firstNumber + secondNumber
			result.innerText = sum
		}

		// функція знаходження різниці
		function getDiff() {
			const firstNumber = parseFloat(document.querySelector("#firstNum").value)
			const secondNumber = parseFloat(document.querySelector("#secondNum").value)
			const diff = firstNumber - secondNumber
			result.innerText = diff
		}

		// функція знаходження результату множення
		function getMultiply() {
			const firstNumber = parseFloat(document.querySelector("#firstNum").value)
			const secondNumber = parseFloat(document.querySelector("#secondNum").value)
			const mult = firstNumber * secondNumber
			result.innerText = mult
		}

		// функція знаходження результату ділення
		function getDivide() {
			const firstNumber = parseFloat(document.querySelector("#firstNum").value)
			const secondNumber = parseFloat(document.querySelector("#secondNum").value)
			if (secondNumber !== 0) {
				const divide = firstNumber / secondNumber
				result.innerText = divide
			} else {
				alert("Ділення на нуль неможливе")
			}
		}

		// крок 2. Виведення результатів

		// знаходимо відповідні кнопки і ставимо обробники
		document.querySelector("#add").onclick = getSum
		document.querySelector("#diff").onclick = getDiff
		document.querySelector("#multiply").onclick = getMultiply
		document.querySelector("#divide").onclick = getDivide
	}
}
