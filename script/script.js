document.addEventListener('DOMContentLoaded', () => {
	const overlay = document.querySelector('.overlay')
	const buttonCall = document.querySelector('#call')
	const buttonsClose = document.querySelectorAll('.close-modal')

	/*закриття модалки при кліку поза модалкою, на overlay*/
	overlay.addEventListener('click', (event) => {
		if (!event.target.classList.contains('modal') && !event.target.closest('.modal')) {
			/*якщо об'єкт (event.target), куди клікнули,
			* НЕ має класу 'modal' I і у клікнутого об'єкту
			* НЕмає батьківського елементу із класом 'modal'*/
			overlay.classList.remove('overlay--show')
		}
	})

	/*т.я. всі модалки є у верстці, отже і в DOM, створюємо
	* listener для кожної із closeBtn в них*/
	buttonsClose.forEach((button) => { /*почитати про оператори циклів*/
		button.addEventListener('click', () => {
			overlay.classList.remove('overlay--show')
		})
	})

	/*step modals list*/
	const calcStepModal = document.querySelector('.modal.calculator')
	const questionStepModal = document.querySelector('.modal.question')
	const finalStepModal = document.querySelector('.modal.final')

	/*open calc modal*/
	buttonCall.addEventListener('click', () => {
		overlay.classList.add('overlay--show')
		calcStepModal.classList.add('modal--show')
	})

	/*first calc step*/
	const calcBtn = calcStepModal.querySelector('.button')
	/*querySelector може бути застосована не тільки до document,
	* а й до раніше обраного блоку і пошук вузла за селектором
	* буде виконаний в його межах*/
	calcBtn.addEventListener('click', () => {
		calcStepModal.classList.remove('modal--show') /*приховуємо поточний крок*/
		questionStepModal.classList.add('modal--show') /*показуємо наступний крок*/
	})

	/*second calc step*/
	const questionBtn = questionStepModal.querySelector('.button')
	questionBtn.addEventListener('click', () => {
		questionStepModal.classList.remove('modal--show')
		finalStepModal.classList.add('modal--show')
	})

	/*third calc step*/
	const finalBtn = finalStepModal.querySelector('.button')
	finalBtn.addEventListener('click', () => {
		finalStepModal.classList.remove('modal--show')
		overlay.classList.remove('overlay--show')
	})
})
