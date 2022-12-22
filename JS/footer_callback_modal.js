document.addEventListener('DOMContentLoaded', () => {
	const overlay = document.querySelector('.overlay');
	const buttonFooterCall = document.querySelector('#footer-call');
	

	buttonFooterCall.addEventListener('click', ()=> {
		const callbackModal = overlay.querySelector('.callback');
		const buttonClose = callbackModal.querySelector('.close-modal');
		const buttonCallback = callbackModal.querySelector('.button');


		overlay.classList.add('overlay--show');
		callbackModal.classList.add('modal--show');

		overlay.addEventListener('click', (e)=> {

			switch(e.target) {
				case buttonCallback:
				overlay.classList.remove('overlay--show');
				callbackModal.classList.remove('modal--show');
                break;
				
				case buttonClose:
				case overlay:	
				overlay.classList.remove('overlay--show');
				callbackModal.classList.remove('modal--show');
                break;
			}
		});
	});
});