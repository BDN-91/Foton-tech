document.addEventListener('DOMContentLoaded', ()=> {
    const sliderBox = document.querySelector('.slider-box');
    const slideLeft = document.querySelector('.button-left');
    const slideRigft = document.querySelector('.button-right');
    const itemsSlider = document.querySelectorAll('.slider-item');

    sliderBox.addEventListener('click', (event)=> {

        switch(event.target) {
            case slideRigft:

                for (let i = 0; i < itemsSlider.length; i++) {
                     if (i == itemsSlider.length-1) {
                        itemsSlider[itemsSlider.length-1].classList.remove('slider-item-show');
                        itemsSlider[0].classList.add('slider-item-show');

                    } else if (itemsSlider[i].classList.contains('slider-item-show')) {
                        itemsSlider[i].classList.remove('slider-item-show');
                        itemsSlider[i+1].classList.add('slider-item-show');
                        break;
                    } 
                }

                break;

            case slideLeft:

                for (let i = itemsSlider.length-1; i >=0 ; i--) {
                    if (i == 0) {
                        itemsSlider[0].classList.remove('slider-item-show');
                        itemsSlider[itemsSlider.length-1].classList.add('slider-item-show');

                    } else if (itemsSlider[i].classList.contains('slider-item-show')) {
                        itemsSlider[i].classList.remove('slider-item-show');
                        itemsSlider[i-1].classList.add('slider-item-show');
                        break;
                    } 
                }
                
                break; 
        }
    });
});