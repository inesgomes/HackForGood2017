
function send() {
    var id = getURLParameter('id');
    var type = getURLParameter('type');
    var receptor = getURLParameter('receptor');
        var oferta = null;
        var pedido = null;

        if(type == "offer"){
            oferta = id;
        } else {
            pedido = id;
        }

        $.ajax({
            type: 'post',
            url: '/addMensagem',
            data: {'sender': 'carlos_silva',
                'receiver': receptor,
                'oferta': oferta,
                'pedido': pedido,
                'mensagem': $("#comment").val()},
            success: function (data) {
            }
        });
    }

