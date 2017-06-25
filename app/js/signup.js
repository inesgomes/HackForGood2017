window.onload = function() {
    document.getElementById("reg").onclick = function submit() {
        $.ajax({
            type: 'post',
            url: '/addUser',
            data: {'username': $("#reg-username").val(),
                'email': $("#reg-email").val(),
                'password': $("#reg-password").val(),
                'telemovel': $("#reg-phone").val(),
                'localizacao': $("#reg-city").val()},
            success: function (data) {
            }
        });
    }
}