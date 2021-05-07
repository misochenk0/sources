import scroll from "./scroll";

function animation() {
    const city = document.querySelectorAll('.world__circle');
    let track = document.querySelector('.world');

    function offset(track) {
        let rect = track.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top:  scrollTop + rect.top - 80}

    }


    console.log(offset(track).top);
    document.addEventListener('scroll', () => {
        // console.log(window.pageYOffset);
        if(pageYOffset >= offset(track).top) {
            city.forEach(e => {
                e.classList.add('animated');
            })
        }
    })

}

export default animation;