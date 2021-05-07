function scroll () {

    // smooth scroll and skills block animation

    const anchors = document.querySelectorAll('a[href*="#"]'),
          scale = document.querySelectorAll('.skills-item__value'),
          percent = document.querySelectorAll('.skills-item__percent'),
          track = document.querySelector('#skills');

    function offset(track) {
        let rect = track.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top:  scrollTop + rect.top -40}
    }
    
    document.addEventListener('scroll', () => {
        if(pageYOffset >= offset(track).top) {
            percent.forEach((item, i) => {
                scale[i].style.width = item.innerHTML;
            });
        }
    })

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
}

export default scroll;