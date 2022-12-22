const overlay = document.querySelector('.overlay')
const closeButtons = document.querySelectorAll('.js-close')
const modals = document.querySelectorAll('.modal')

const callOpen = document.querySelector('#call')
const stepButtons = document.querySelectorAll('[data-group="call"] .button')

const callbackOpen = document.querySelector('#footer-call')
const step = (group, prev = false) => {
	overlay.classList.add('overlay--show')

	const openedModal = document.querySelector('.modal--show')

	if (openedModal) {
		openedModal.classList.remove('modal--show')

		let nextStep;
		if (prev) {
			nextStep = openedModal.previousElementSibling;
		} else {
			nextStep = openedModal.nextElementSibling;
		}

		if (nextStep.dataset.group === group) {
			nextStep.classList.add('modal--show')
		} else {
			overlay.classList.remove('overlay--show')
		}

	} else {
		document.querySelector(`[data-group="${group}"]`).classList.add('modal--show')
	}
}

const close = () => {
	document.querySelector('.modal--show')?.classList.remove('modal--show')
	overlay.classList.remove('overlay--show')
}

modals.forEach((modal) => modal.addEventListener('click', (ev) => ev.stopPropagation()))
overlay.addEventListener('click', close)
closeButtons.forEach((button) => button.addEventListener('click', close))
callOpen.addEventListener('click', () => step('call'))
stepButtons.forEach((button) => button.addEventListener('click', () => step('call')))
callbackOpen.addEventListener('click', () => step('callback'))
