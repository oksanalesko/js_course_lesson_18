"use strict"
if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Введення даних, позначення величин

		// Знаходимо на сторінці елемент, куди вставляти нашу таблицю
		const taskBlock = document.querySelector(".condition")

		// Обчислення результатів

		// функція для створення таблиці з випадковими числами
		function createTableRandomNumbers(rowNum, colNum, min = 1, max = 100) {
			const tableEl = document.createElement('table')
			tableEl.classList.add("table")
			for (let row = 0; row < rowNum; row++) {
				const tableRow = document.createElement('tr')
				tableRow.classList.add("table-row")
				for (let col = 0; col < colNum; col++) {
					const tableCol = document.createElement('td')
					tableCol.classList.add('table-col')
					tableCol.innerText = min + Math.floor(Math.random() * (max - min + 1))
					tableRow.append(tableCol)
				}
				tableEl.append(tableRow)
			}
			return tableEl
		}

		// Виведення результатів

		// перевіряємо, чи є елемент для вставлення списку на сторінці, якщо є, вставляємо
		if (taskBlock) taskBlock.append(createTableRandomNumbers(3, 4))
		else console.error('Елемент з класом "condition" не знайдено')
	}
}
