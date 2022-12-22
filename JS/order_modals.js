document.addEventListener('DOMContentLoaded', () => {
	const overlay = document.querySelector('.overlay');
	const buttonCall = document.querySelector('#call');
	

	buttonCall.addEventListener('click', ()=> {

		const calculatorModal = overlay.querySelector('.calculator');
        const questionModal = overlay.querySelector('.question');
        const finalModal = overlay.querySelector('.final');

		overlay.classList.add('overlay--show');
		calculatorModal.classList.add('modal--show');

		overlay.addEventListener('click', (e)=> {

            const closeCalculator = calculatorModal.querySelector('.close-modal');
            const buttonCalculator = calculatorModal.querySelector('.button');

            const closeQuestion = questionModal.querySelector('.close-modal');
            const buttonQuestion = questionModal.querySelector('.button');

            const closeFinal = finalModal.querySelector('.close-modal');
            const buttonFinal = finalModal.querySelector('.button');

			switch(e.target) {
				case buttonCalculator:
                calculatorModal.classList.remove('modal--show');
                questionModal.classList.add('modal--show');
                break;

                case buttonQuestion:
                questionModal.classList.remove('modal--show');
                finalModal.classList.add('modal--show');
                break;

                case buttonFinal:
                finalModal.classList.remove('modal--show');
				overlay.classList.remove('overlay--show');
                break;
				
				case closeCalculator:
                case closeQuestion:
                case closeFinal:    
				case overlay:	
				overlay.classList.remove('overlay--show');
				calculatorModal.classList.remove('modal--show');
                questionModal.classList.remove('modal--show');
                finalModal.classList.remove('modal--show');
                break;
			}
		});
	});
});
