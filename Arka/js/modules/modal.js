function modal(layer, body) {
    const btn = document.querySelectorAll('.button__modal'),
          btnDieline = document.querySelectorAll('.button__dieline'),
          close = document.querySelectorAll('.close'),
          startForm = document.querySelector('.start-form'),
          dielineForm = document.querySelector('.dieline-form'),
          modalClose = document.querySelector('.modal__close'),
          modalThanks = document.querySelector('.modal__thanks'),
          footerForm = document.querySelector('.footer__form'),
          inputs = document.querySelectorAll('input');

    btn.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            startForm.classList.remove('secret');
            startForm.classList.add('active');
            layer.classList.add('active');
            layer.classList.remove('secret');
            body.classList.add('hidden');
        })
    })

    function clearInputs(inputs) {
        inputs.forEach(input => {
            if (input.classList.contains('button')) {

            } else {
                input.value = '';
            }
        });
    }

    if (btnDieline != undefined) {
        btnDieline.forEach(btnDieline => {
            btnDieline.addEventListener('click', (e) => {
                e.preventDefault();
                dielineForm.classList.remove('secret');
                dielineForm.classList.add('active');
                layer.classList.add('active');
                layer.classList.remove('secret');
                body.classList.add('hidden');
            })
            dielineForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                postData(dielineForm);
    
                dielineForm.classList.remove('active');
                dielineForm.classList.add('secret');
    
            })
        })
    };

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

    function closeModal() {
        startForm.classList.remove('active');
        startForm.classList.add('secret');
        if (btnDieline != undefined) {
            dielineForm.classList.remove('active');
            dielineForm.classList.add('secret');
        }
        layer.classList.remove('active');
        layer.classList.add('secret');
        body.classList.remove('hidden');
        modalThanks.classList.add('secret');
        modalThanks.classList.remove('active');
    }
    close.forEach(cross => {
        cross.addEventListener('click', () => closeModal());
    })
    window.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            closeModal();
        }
    })
    startForm.addEventListener('submit', (e) => {
        e.preventDefault();
        postData(startForm);

        startForm.classList.remove('active');
        startForm.classList.add('secret');


    })

    modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    
    });
    footerForm.addEventListener('submit', (e)  =>  {
        e.preventDefault();
        postData(footerForm) ;

        layer.classList.add('active');
        layer.classList.remove('secret');
    })
}

export default modal;