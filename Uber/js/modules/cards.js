function cards () {
    const plus = document.querySelectorAll('.mobile_item_plus');

    plus.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.classList.toggle('clicked');
            item.previousSibling.classList.toggle('clicked_subtitle');
            item.nextSibling.classList.toggle('secret');
            item.nextSibling.classList.toggle('active');
            item.classList.toggle('clicked_plus');
        })
    })
    document.addEventListener('click', e => {
        console.log(e.target)
    });
}

export default cards;