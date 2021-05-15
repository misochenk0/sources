
document.addEventListener('DOMContentLoaded', () => {

    const sort = document.querySelectorAll('.products-block-sort__placeholder'),
          btns = document.querySelectorAll('.products-block__btn'),
          images = document.querySelectorAll('.item__img'),
          overflow = document.querySelector('.overflow'),
          body = document.querySelector('body'),
          param = document.querySelectorAll('.aside__name');

    sort.forEach(i => {
        i.addEventListener('click', (e) => {
            e.preventDefault();
            i.nextSibling.classList.toggle('hidden');
            i.classList.toggle('open');
        })
    })
    btns[(btns.length/2)-2].classList.add('active');
    btns[btns.length-2].classList.add('active');


    images.forEach(img => {
        img.addEventListener('click', e => {
            img.classList.toggle('zoomed');
            overflow.classList.toggle('show');
            body.classList.toggle('noscroll');
        })
    });

    function hideAll() {
        images.forEach(img => {
            img.classList.remove('zoomed');
            body.classList.remove('noscroll');
            overflow.classList.remove('show');
        }) 
    }

    overflow.addEventListener('click', hideAll)

    window.addEventListener('keydown', e => {
        if (e.key == 'Escape') {
            hideAll()
        }
    })
    
    param.forEach(i => {
        i.addEventListener('click', () => {
            i.nextSibling.classList.toggle('hide');
            i.classList.toggle('close');
        })
    })
})