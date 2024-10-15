"use strict"
if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Введення даних, позначення величин

		// Знаходимо на сторінці елемент, куди вставляти
		const tablePlace = document.getElementById('tablePlace')
		const averageScore = document.getElementById('averageScore')

		// Обчислення результатів

		// функція для створення таблиці з полями для введення
		function createTableOfInputs() {
			const tableEl = document.createElement('table')
			tableEl.classList.add("table")
			const scoreNum = document.getElementById('numOfScores').value
			for (let row = 0; row < scoreNum; row++) {
				const tableRow = document.createElement('tr')
				tableRow.classList.add("table-row")
				const input = document.createElement('input')
				input.classList.add('input', 'score')
				input.type = "number"
				tableRow.append(input)
				tableEl.append(tableRow)
			}
			return tableEl
		}

		// функція для підрахунку середнього балу
		function calcAverageScore() {
			const scoresList = document.querySelectorAll('.score')
			let sum = Array.from(scoresList).reduce((prevSum, el) => prevSum + Number(el.value), 0)
			averageScore.innerText = (sum / scoresList.length).toFixed(1)
		}

		// Виведення результатів

		// перевіряємо, чи є елемент для вставлення списку на сторінці, якщо є, вставляємо
		document.querySelector('#getTable').onclick = () => {
			if (tablePlace) {
				tablePlace.innerHTML = ''
				tablePlace.append(createTableOfInputs())
			}
			else console.error('Елемент з id "tablePlace" не знайдено')
		}
		document.querySelector('#getAverage').onclick = calcAverageScore
	}
}
