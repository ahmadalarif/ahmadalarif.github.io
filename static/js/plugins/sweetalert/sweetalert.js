$(function () {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000
    });

    successAlert = function (message) {
        Toast.fire({
            icon: 'success',
            title: message
        })
    };

    errorAlert = function (message) {
        Toast.fire({
            icon: 'error',
            title: message
        });
    };
});