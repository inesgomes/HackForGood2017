window.onload = function () {
listContent();
}

function listContent(){
    $.ajax({
        type: 'get',
        url: '/listAllPedidos',
        data: {},
        success: function (data) {
            alert(data);
        }
    });
}