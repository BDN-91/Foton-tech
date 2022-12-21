document.addEventListener('DOMContentLoaded', ()=> {
	const sliderBox = document.querySelector('.slider-box')
	const slideLeft = document.querySelector('.button-left')
	const slideRight = document.querySelector('.button-right')
	const itemsSlider = document.querySelectorAll('.slider-item')
	// slider-item-show

	const step = (direction = 'next') => {
		const current = sliderBox.querySelector('.slider-item-show')
		const next = direction === 'next'
			? sliderBox.querySelector(`[data-number="${+current.dataset.number + 1}"]`)
			|| sliderBox.querySelector(`[data-number="1"]`)
			: sliderBox.querySelector(`[data-number="${+current.dataset.number - 1}"]`)
			|| sliderBox.querySelector(`[data-number="${itemsSlider.length}"]`)

		current.classList.remove('slider-item-show')
		next.classList.add('slider-item-show')
	}

	itemsSlider.forEach((item, index) => item.dataset.number = String(index + 1)) //`${index + 1}`

	slideLeft.addEventListener('click', () => step('prev'))
	slideRight.addEventListener('click', () => step('next'))
})
