import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);

let isSlidersEnabled = false;

const initSlider = (slider, windowWidth) => {
    if(windowWidth > 1439 && isSlidersEnabled) {
        slider.disable();
        isSlidersEnabled = false;
    } else if (windowWidth <= 1439 && !isSlidersEnabled) {
        slider.enable();
        isSlidersEnabled = true;
    }
}

const fSlider = document.querySelector('.features-swiper-container');

if(fSlider) {
    const slider = new Swiper(fSlider, {
        slidesPerView: 1,
        disable: true,

        pagination: {
            el: ".features-swiper-pagination",
        },

        breakpoints: {
            1440: {
                slidesPerView: 5,
            },

            960: {
               slidesPerView: 3,
            }
        }
    });


    initSlider(slider, window.innerWidth)

    window.addEventListener('resize', () => {
        initSlider(slider, window.innerWidth)
    });
}

const aSlider = document.querySelector('.advantages-swiper-container');

if(aSlider) {
    const slider = new Swiper(aSlider, {
        slidesPerView: 1,
        disable: true,

        pagination: {
            el: ".advantages-swiper-pagination",
        },
    });

    initSlider(slider, window.innerWidth)

    window.addEventListener('resize', () => {
        initSlider(slider, window.innerWidth)
    });
}

const rSlider = document.querySelector('.reviews-swiper-container');

if(rSlider) {
    const slider = new Swiper(rSlider, {
        slidesPerView: 1,
        disable: true,

        pagination: {
            el: ".reviews-swiper-pagination",
        },

        breakpoints: {
            960: {
               slidesPerView: 2,
            }
        }
    });

    initSlider(slider, window.innerWidth)

    window.addEventListener('resize', () => {
        initSlider(slider, window.innerWidth)
    });
}

