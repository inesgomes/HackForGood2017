window.onload = function () {
    var id = getURLParameter('id');
    var type = getURLParameter('type');
    var receptor = getURLParameter('receptor');

    $("#sendMessageButton").onclick = function send(id, type, receptor) {
        $.ajax({
            type: 'post',
            url: '/addMensagem(recetor, dador, oferta, pedido, mensagem)',
            data: {'recetor': receptor,
                'email': $("#reg-email").val(),
                'password': $("#reg-password").val(),
                'telemovel': $("#reg-phone").val(),
                'localizacao': $("#reg-city").val()},
            success: function (data) {
            }
        });
    }
}
