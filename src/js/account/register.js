import '../../scss/styles.scss'
import * as bootstrap from 'bootstrap';
import $ from 'jquery';
import { registerNewUser } from '../../api/account';
import { birthDateIsValid } from '../utils/validation';

const checkPasswordsIsEqual = async (password, confirmPassword) => {
    return password === confirmPassword;
}

const register = async () => {
    $('#password-input').removeClass('is-invalid');
    $('#confirm-password-input').removeClass('is-invalid');
    $('#birthday-input').removeClass('is-invalid');
    $('#login-input').removeClass('is-invalid')
    $('#confirm-error-label').addClass('d-none');
    $('#birthday-error-label').addClass('d-none');

    let userName = $('#username-input').val();
    let userEmail = $('#login-input').val();
    let userPassword = $('#password-input').val();
    let confirmPassword = $('#confirm-password-input').val();
    let birthday = $('#birthday-input').val();

    if ((await checkPasswordsIsEqual(userPassword, confirmPassword)) && birthDateIsValid(birthday)) {
        const result = await registerNewUser({
            fullName: userName,
            birthDate: birthday,
            email: userEmail,
            password: userPassword,
            confirmPassword: confirmPassword
        })

        if (result) {
            console.log(result.token)
            localStorage.setItem('token', result.token);
            localStorage.setItem('login', userEmail);
            window.location.href = '/';

        } else {
            console.log(result)
            alert('Этот Email уже занят')
            $('#login-input').addClass('is-invalid')
        }
    } else {
        if (!(await checkPasswordsIsEqual(userPassword, confirmPassword))) {
            $('#password-input').addClass('is-invalid');
            $('#confirm-password-input').addClass('is-invalid');
            $('#confirm-error-label').removeClass('d-none');
        }
        if (!birthDateIsValid(birthday)) {
            $('#birthday-input').addClass('is-invalid');
            $('#birthday-error-label').removeClass('d-none');
        }
    }

}

$('#register-form').submit(e => {
    e.preventDefault();
    var $form = $(this);
    if ($('#register-form')[0].checkValidity()) {
        register()
    }
})