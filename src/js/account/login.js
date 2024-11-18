import '../../scss/styles.scss'
import * as bootstrap from 'bootstrap';
import $ from 'jquery';
import { loginUser } from '../../api/account';


const login = async () => {
    $('#password-input').removeClass('is-invalid');
    $('#login-input').removeClass('is-invalid');
    $('#login-error-label').addClass('d-none');

    let userEmail = $('#login-input').val();
    let userPassword = $('#password-input').val();

    const result = await loginUser({
        email: userEmail,
        password: userPassword
    })

    if (result) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('login', userEmail);
        window.location.href = '/';

    } else {
        $('#password-input').addClass('is-invalid');
        $('#password-input').val('');
        $('#login-input').addClass('is-invalid');
        $('#login-error-label').removeClass('d-none');
    }
}

$('#login-form').submit(e => {
    e.preventDefault();
    if ($('#login-form')[0].checkValidity()) {
        login()
    }
})