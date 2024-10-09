document.querySelectorAll('.contact__type').forEach(input => {
    input.addEventListener('change', function(){
        document.querySelectorAll('.radio__inputs').forEach(div => {
            div.classList.remove('selected');
        })

        if (this.checked) {
            this.parentElement.classList.add('selected')
        }
    })
});

document.querySelector('#submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const lastName = document.getElementById('contactLastName').value;
    const email = document.getElementById('contactEmail').value;
    const contactType = document.querySelector('input[name="contact-type"]:checked')
    const message = document.getElementById('message').value;
    const terms = document.getElementById('terminos');

    let isValid = true;

    if (name.trim() === "") {       
        document.querySelector('#nameAlert').style.display = "block";
        isValid = false;
    } else {   
        document.querySelector('#nameAlert').style.display = "none";
    }

    if (lastName.trim() === "") {       
        document.querySelector('#lastnameAlert').style.display = "block";
        isValid = false;
    } else {   
        document.querySelector('#lastnameAlert').style.display = "none";
    }

    if (email.trim() === "") {       
        document.querySelector('#emailAlert').style.display = "block";
        isValid = false;
    } else {   
        document.querySelector('#emailAlert').style.display = "none";
    }

    if(!contactType){
        document.querySelector('#typeAlert').style.display = "block";
        isValid = false;
    } else {
        document.querySelector('#typeAlert').style.display = "none";
    }

    if (message.trim() === "") {       
        document.querySelector('#messageAlert').style.display = "block";
        isValid = false;
    } else {   
        document.querySelector('#messageAlert').style.display = "none";
    }

    if (terms.checked) {       
        document.querySelector('#termAlert').style.display = "none";
    } else {   
        document.querySelector('#termAlert').style.display = "block";
        isValid = false;
    }
    
    if (isValid) {
        document.querySelector('.success').style.display = 'block'
    }
})