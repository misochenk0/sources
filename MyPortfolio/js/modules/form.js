function form() {

    const   overflow = document.querySelector('.overflow'),
            close = document.querySelectorAll('.modal__close'),
            buttonModal = document.querySelector('.button_transparent'),
            form = document.querySelector('.modal__form'),
            modal = document.querySelector('.modal'),
            body = document.querySelector('body'),
            thanks = document.querySelector('.modal__thanks'),
            contacts = document.querySelector('.form'),
            inputs = document.querySelectorAll('input');

    let modalFunction = function(item) {
        item.addEventListener('click', (e) => {
            if (e.target === item) {
                overflow.classList.toggle('overflow__active');
                modal.classList.add('hide');
                body.classList.toggle('visible');
                thanks.classList.add('hide');
            }
        });
    };

    close.forEach(x => {
        modalFunction(x);
    })
    modalFunction(overflow);

    buttonModal.addEventListener('click', () => {
        overflow.classList.toggle('overflow__active');
        modal.classList.remove('hide');
        body.classList.toggle('visible');
    })


    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            overflow.classList.toggle('overflow__active');
            body.classList.toggle('visible');
            modal.classList.add('hide');
            thanks.classList.add('hide');
        }
    })

    contacts.addEventListener('submit', (e) => {
        e.preventDefault();
        overflow.classList.toggle('overflow__active');
        body.classList.toggle('visible');
        postData(contacts);
    })

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        modal.classList.add('hide');
        postData(form);
    });

    function clearInputs(inputs) {
        inputs.forEach(input => {
            if (input.classList.contains('button')) {

            } else if(input.checked === true) {
                input.checked = false;
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
            thanks.classList.remove('hide');
            clearInputs(inputs);
        })
    }
} 

export default form;