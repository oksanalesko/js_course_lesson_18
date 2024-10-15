"use strict"
if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Введення даних, позначення величин

		const wishList = [
			"Подорожувати до Тенерифе",
			"Вивчити англійську",
			"Купити нову машину",
			"Отримати велике замовлення",
			"Навчитися готувати нові страви",
			"Займатися спортом",
			"Покращити навички програмування",
			"Завести домашнього улюбленця",
			"Відвідати музей",
			"Провести більше часу з родиною",
		]

		// Знаходимо на сторінці елемент, куди вставляти наш список бажань
		const taskBlock = document.querySelector(".condition")

		// Обчислення результатів

		// функція для рандомного вибору бажання
		function getRandomWish(list) {
			const randomWishIndex = Math.floor(Math.random() * list.length)
			return list[randomWishIndex]
		}

		// функція для створення списку бажань
		function createWishList(list, itemsNum) {
			const listEl = document.createElement("div")
			listEl.classList.add("task-list")
			for (let num = 0; num < itemsNum; num++) {
				const itemEl = document.createElement("div")
				itemEl.classList.add("task-item")
				itemEl.innerText = getRandomWish(list)
				listEl.prepend(itemEl)
			}
			return listEl
		}

		// Виведення результатів

		// перевіряємо, чи є елемент для вставлення списку на сторінці, якщо є, вставляємо
		if (taskBlock) taskBlock.append(createWishList(wishList, 3))
		else console.error('Елемент з класом "condition" не знайдено')
	}
}
