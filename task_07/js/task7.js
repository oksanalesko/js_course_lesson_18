"use strict"
if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Введення даних, позначення величин

		const transportPrice = {
			auto: 900,
			bus: 700,
			plane: 3500,
		}

		const mealPrice = {
			breakfast: 130,
			lunch: 350,
			dinner: 270,
		}

		const guidePrice = {
			1: 100,
			2: 200,
			3: 500,
		}

		// Знаходимо на сторінці елемент, куди вставляти загальну суму
		const totalRes = document.getElementById("total-sum")

		// Обчислення результатів

		// функція для підрахунку загальної вартості
		function calcTotalSum() {
			let totalSum = 0

			const travelStages = document.querySelectorAll(".travel-stage")

			travelStages.forEach((stage, index) => {
				const transportType = stage.querySelector('[name="transport"]').value
				totalSum += transportPrice[transportType]

				const mealType = stage.querySelectorAll('input[type="checkbox"]:checked')
				if (mealType.length > 0) {
					mealType.forEach((meal) => {
						if (mealPrice[meal.value] !== undefined) {
							totalSum += mealPrice[meal.value]
						}
					})
				}

				const guideType = stage.querySelector(`input[name="guide-${index + 1}"]:checked`)
				if (guideType && guidePrice[guideType.value] !== undefined) {
					totalSum += guidePrice[guideType.value]
				}
			})
			return (totalRes.innerText = totalSum)
		}

		// Виведення результатів

		document.getElementById("calc-sum").onclick = calcTotalSum
	}
}
