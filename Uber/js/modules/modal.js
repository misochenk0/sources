function modal() {
    const btn = document.querySelectorAll('.modal__btn'),
          modal = document.querySelector('.modal'),
          form = document.querySelector('.modal__form'),
          modalThanks = document.querySelector('.modal__thanks'),
          closeBtn = document.querySelectorAll('.modal__close'),
          overlay = document.querySelector('.overlay'),
          body = document.querySelector('body'),
          inputs = document.querySelectorAll('input');

    btn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('secret');
            modal.classList.add('active');
            overlay.classList.remove('secret');
            overlay.classList.add('active');
            body.classList.add('noscroll');
        })
    })

    function closeModal() {
        modal.classList.add('secret');
        modal.classList.remove('active');
        overlay.classList.add('secret');
        overlay.classList.remove('active');
        body.classList.remove('noscroll');
        modalThanks.classList.remove('active');
        modalThanks.classList.add('secret');
    } 
    
    function clearInputs(inputs) {
        inputs.forEach(input => {
            if (input.classList.contains('button')) {

            } else {
                input.value = '';
            }
        });
    }


    function postData(form) {
        const formData = new FormData(form);
    
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        })
        const json = JSON.stringify(object);
    
        fetch('server.php', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: json
    
        }).then(data => data.text())
        .then(data => {
            console.log(data);
        }).catch(() =>{
            console.log('Error');
        })
        .finally(() => {
            modalThanks.classList.remove('secret');
            modalThanks.classList.add('active');
            clearInputs(inputs);
        })
    }

    closeBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        })
    })
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            closeModal();
        }
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.add('secret');
        modal.classList.remove('active');
        postData(form);
    })

}

export default modal;