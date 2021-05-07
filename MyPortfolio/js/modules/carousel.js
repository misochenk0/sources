function carousel() {
    
    //Mobile and Desktop slider

    const slider = document.querySelector(".portfolio__carousel"),
    btnNext = document.getElementById("next"),
    btnPrev = document.getElementById("prev");

    let viewport = document.querySelector(".portfolio__wrapper").offsetWidth,
        viewSlide = 0,
        posx = 0;

    window.addEventListener('resize', () => {
        updateViewport();
    });

    function updateViewport() {
        viewport = document.querySelector(".portfolio__wrapper").offsetWidth;
        currentSlide();
        return viewport
    }

    slider.style.left = 0;

    function nextSlide() {
        if (viewSlide < 5) {
            viewSlide++;
        } else { 
            viewSlide = 0;
        }
        slider.style.left = -viewSlide * viewport + "px";
    }
    function prevSlide() {
        if (viewSlide > 0) {
            viewSlide--; 
        } else {
            viewSlide = 5; 
        }
        slider.style.left = -viewSlide * viewport + "px";
    }
    function currentSlide() {
        slider.style.left = -viewSlide * viewport + "px";
    }

    btnNext.addEventListener("click", nextSlide);
    btnPrev.addEventListener("click", prevSlide);

    function mouseDown(e) {
        e.preventDefault();
        posx = e.clientX;
        slider.style.transition = '.5s all';
        return posx
    }

    function mouseUp(e) {
        if (e.clientX - posx < - viewport * 0.2) {
            slider.style.transition = '0.5s';
            nextSlide();
        } else {
            slider.style.transition = '0.5s';
            currentSlide();
        }
        posx = 0;
    }

    function moving(e) {
        function leaving() {
            slider.style.transition = '0.5s';
            currentSlide();
            posx = 0;
        }
        slider.addEventListener('mouseleave', () => {
            leaving();
        })
        if (posx > 0) {
            slider.style.transition = '0s';
            slider.style.left = -viewSlide * viewport -posx + e.clientX + "px";
            if (-posx + e.clientX < - viewport * 0.3) {
                slider.style.transition = '0.5s';
                nextSlide();
                posx = 0;
            } else if (e.clientX - posx > viewport * 0.3) {
                slider.style.transition = '0.5s';
                prevSlide();
                posx = 0;
            }                
        } else if (posx == 0) {
            slider.removeEventListener('mousemove', moving);
            slider.removeEventListener('touchmove', moving);
        } 
    }  

    slider.addEventListener('touchstart', (e) =>{
        posx = e.touches[0].clientX;
        slider.style.transition = '.5s all';
        return posx
    }, {passive: true})
    slider.addEventListener('touchmove', e =>{
        moving(e.touches[0]);
    }, {passive: true})
    slider.addEventListener('touchend', e => {
        mouseUp(e);
    })

    slider.addEventListener(`mousedown`, (e) => {
        mouseDown(e);
    })
    slider.addEventListener('mouseup', (e) => {
        mouseUp(e);
    })
    slider.addEventListener('mousemove', (e) => {
        moving(e);
    })
}


export default carousel;