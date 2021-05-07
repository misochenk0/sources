function img(body) {
    const img = document.querySelectorAll('.products-item__img'),
          layer = document.querySelector('.overlay2');
    img.forEach(i => {
        i.addEventListener('click', (item) => {
            item.target.classList.toggle('zoom');
            layer.classList.toggle('active');
            layer.classList.toggle('secret');
            body.classList.toggle('hidden');
            if (item.target.classList.contains('zoom')) {
                function zoomOut(img) {
                    img.forEach(i => {
                        i.classList.remove('zoom');
                        layer.classList.remove('active');
                        layer.classList.add('secret');
                        body.classList.remove('hidden');
                    })
                }
                layer.addEventListener('click', () => zoomOut(img));
                window.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        zoomOut(img);
                    }
                });
            }
        });
    })
}
export default img;