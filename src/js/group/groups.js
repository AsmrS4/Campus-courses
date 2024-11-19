import '../../scss/styles.scss'
import * as bootstrap from 'bootstrap';
import $ from 'jquery';
import * as toastr from 'toastr';
import { logout } from '../../api/account';
import { getUserRoles } from '../../api/users';
import { getGroups } from '../../api/group';
import { groupCard } from '../utils/render';
const options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

$(window).ready(async () => {
    $('.profile-btn').removeClass('d-none');
    $('.profile-btn').html(localStorage.getItem('login'));
    $('.login-btn').addClass('d-none');
    $('.register-btn').addClass('d-none');
    $('.logout-btn').removeClass('d-none')
    let roles = JSON.parse(localStorage.getItem('roles'));
    const result = await getGroups();
    if(roles.isAdmin) {
        $('#createGroupBtn').removeClass('d-none');
    }
    if (result) {
        for (let i = 0; i < result.length; i++) {
            $('.groups-holder').append(
                groupCard(result[i], roles.isAdmin)
            )
        }
    }
})

$('.logout-btn').on('click', async (e) => {
    e.preventDefault;
    await logout();
})

$('#test').on('click', async () => {
    await toastr.success('asdsa', '200', options)
})
