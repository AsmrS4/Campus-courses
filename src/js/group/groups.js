import '../../scss/styles.scss'
import * as bootstrap from 'bootstrap';
import $ from 'jquery';
import * as toastr from 'toastr';
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

$(window).ready(() => {
})

$('#test').on('click', async() => {
    await toastr.success('asdsa', '200', options)
})
