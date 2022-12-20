document.addEventListener('DOMContentLoaded', ()=> {
    const calcModal = document.querySelector('.calculator');
    const infoBox = document.querySelector('.info-box');
    const calcInput = document.querySelector('.calculator__input-range');
    let calclable = document.querySelector('.calculator__input-lable')

    calcModal.addEventListener('mouseover', (event)=> {

        const infoIcon = calcModal.querySelector('.info-icon');

        switch (event.target) {
            case infoIcon:
                infoBox.classList.add('info-box-show');;
                break;
  
            default:
                infoBox.classList.remove('info-box-show');;
          }
    })

    calcInput.addEventListener('input', ()=> {
        calclable.setAttribute('datakWt', `${calcInput.value} kWh` )
    })
})