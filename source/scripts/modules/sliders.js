import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);

const fSlider = document.querySelector('.features-swiper-container');

if(fSlider) {
    const slider = new Swiper(fSlider, {
        slidesPerView: 1,

        pagination: {
            el: ".features-swiper-pagination",
        },

        breakpoints: {
            960: {
               slidesPerView: 3,
            }
        }
    });

    if(window.innerWidth > 1439) {
        slider.disable();
    } else {
        slider.enable();
    }

    const onResizeInitSliders = () => {
        if(window.innerWidth > 1439) {
            slider.disable();
        } else {
            slider.enable();
        }
    }

    window.addEventListener('resize', onResizeInitSliders);
}

const aSlider = document.querySelector('.advantages-swiper-container');

if(aSlider) {
    const slider = new Swiper(aSlider, {
        slidesPerView: 1,

        pagination: {
            el: ".advantages-swiper-pagination",
        },
    });

    if(window.innerWidth > 1439) {
        slider.disable();
    } else {
        slider.enable();
    }

    const onResizeInitSliders = () => {
        if(window.innerWidth > 1439) {
            slider.disable();
        } else {
            slider.enable();
        }
    }

    window.addEventListener('resize', onResizeInitSliders);
}

const rSlider = document.querySelector('.reviews-swiper-container');

if(rSlider) {
    const slider = new Swiper(rSlider, {
        slidesPerView: 1,

        pagination: {
            el: ".reviews-swiper-pagination",
        },

        breakpoints: {
            960: {
               slidesPerView: 2,
            }
        }
    });

    if(window.innerWidth > 1439) {
        slider.disable();
    } else {
        slider.enable();
    }

    const onResizeInitSliders = () => {
        if(window.innerWidth > 1439) {
            slider.disable();
        } else {
            slider.enable();
        }
    }

    window.addEventListener('resize', onResizeInitSliders);
}

