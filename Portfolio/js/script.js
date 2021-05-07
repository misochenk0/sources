const hamburger = document.querySelector(".hamburger"),
        menu = document.querySelector(".menu"),
        closeElem = document.querySelector(".menu__close"),
        overlay = document.querySelector(".menu__overlay"),
        menuLink = document.querySelectorAll('.menu__link'),
        anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 700,
        framesCount = 40;

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
    body.classList.add('noscroll');
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
    body.classList.remove('noscroll');

});

anchors.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.remove("active");
        body.classList.remove('noscroll');
        let coordY = document.querySelector(link.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
        let scroller = setInterval(function() {
            let scrollBy = coordY / framesCount;
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, animationTime / framesCount);
    });
})

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    body.classList.remove('noscroll');

});

const counters =document.querySelectorAll(".skills-block__percent"),
        lines = document.querySelectorAll(".skills-block__amount"),
        inputs = document.querySelectorAll("input"),
        modalThanks = document.querySelector('.modal'),
        contactsForm = document.querySelector('.contacts__form'),
        formOverlay = document.querySelector('.overlay'),
        closeModal = document.querySelector('.modal__close'),
        body = document.querySelector('body');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

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

contactsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    body.classList.add('noscroll');
    formOverlay.classList.add('visible');
    postData(contactsForm);
})

function closeThanks() {
    modalThanks.classList.remove('active');
    modalThanks.classList.add('secret');
    body.classList.remove('noscroll');
    formOverlay.classList.remove('visible');
}

closeModal.addEventListener('click', () => closeThanks())
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('overlay')) {
        closeThanks();
    }
})
document.addEventListener('keydown', (e) => {
    if (e.key = 'Escape') {
        closeThanks();
    }
})