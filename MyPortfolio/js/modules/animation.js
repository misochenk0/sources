function animation() {
    const cover = document.querySelector('.portfolio__cover'),
          loading = cover.querySelector('.portfolio__cover_img'),
          track = document.querySelector('#portfolio'),
          left = document.querySelector('#prev'),
          right = document.querySelector('#next'); 
          
    window.addEventListener('scroll', () => {

        function offset(track) {
            let rect = track.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top:  scrollTop + rect.top - 120}
        }

        if (pageYOffset >= offset(track).top) {
            cover.classList.add('cover_animation');
            loading.classList.add('img_animation');
            left.classList.add('left_btn_animation');
            right.classList.add('right_btn_animation');
        }
    })
}

export default animation;