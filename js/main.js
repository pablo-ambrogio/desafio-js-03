let email = document.getElementById( 'email' );
let form = document.getElementById( 'form' );
let text = document.getElementById( 'textError' );
let button = document.getElementById( 'btnSend' );

form.addEventListener( 'submit', ( event ) => {
    event.preventDefault();
} );

let validarForm = () => {
    
    let validarEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;   

    if( email.value !== '' ) {

        if( validarEmail.test( email.value ) ) {
            email.classList.remove( 'form__input--error' );
            email.classList.add( 'form__input--good' );
            text.style.visibility = 'hidden';
        }
        else {
            email.classList.add( 'form__input--error' );
            email.classList.remove( 'form__input--good' );
            text.innerHTML = `Plase provide a valid email`;
            text.style.visibility = 'visible';
        }
    } 
    else {
        email.classList.add( 'form__input--error' );
        text.innerHTML = `Ingrese su email`;
        text.style.visibility = 'visible';
    }
    
}

button.addEventListener( 'click', validarForm );
