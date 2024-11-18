import '../../scss/styles.scss'
import * as bootstrap from 'bootstrap';
import $ from 'jquery';
import { editUserProfile, getUserProfile } from '../../api/account';
import { birthDateIsValid } from '../utils/validation';


const getProfile = async () => {
    const result = await getUserProfile();
    if (result) {
        console.log()
        $('#login-input').val(result.email);
        $('#username-input').val(result.fullName);
        $('#birthday-input').val(result.birthDate.slice(0, 10));
    }
}

const editProfile = async () => {
    $('#birthday-input').removeClass('is-invalid');
    $('#birthday-error-label').addClass('d-none');
    
    let birthDate = $('#birthday-input').val();
    let userName = $('#username-input').val();

    if (birthDateIsValid(birthDate)) {
        const result = await editUserProfile({
            fullName: userName,
            birthDate: birthDate
        })
        if (result) {
            getProfile();
        }
    } else {
        if (!birthDateIsValid(birthDate)) {
            $('#birthday-input').addClass('is-invalid');
            $('#birthday-error-label').removeClass('d-none');
        }
    }
}

$(window).ready(() => {
    getProfile();
})

$('#profile-form').submit(e => {
    e.preventDefault();
    if ($('#profile-form')[0].checkValidity()) {
        editProfile()
    }
})