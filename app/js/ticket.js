window.onload = function () {
    var ticket = getURLParameter('type');
    if(ticket == "offer"){
        listContentOffer();
    } else if(ticket == "request") {
        listContentRequest();
    }
}


function listContentOffer() {
    var id = getURLParameter('ticket_id');
    $.ajax({
        type: 'get',
        url: '/getOfertasById',
        data: {'id':id},
        success: function (data) {
            listContent(JSON.parse(data));
        }
    });
}

function listContentRequest() {
    var id = getURLParameter('ticket_id');
    $.ajax({
        type: 'get',
        url: '/getPedidosById',
        data: {'id':id},
        success: function (data) {
            listContent(JSON.parse(data));
        }
    });
}

function listContent(data){
    var text = '<div class="text-center article-title"> <h1>'+data[0].titulo+'</h1> ' +
        '<strong>'+data[0].username+'</strong> <span class="text-muted"><i class="fa fa-clock-o"></i>'+data[0].time_stamp+'<i class="fa fa-map-marker"></i>'+data[0].localizacao+'</span> ' +
        '</div> ' +data[0].descricao+''+
        '<hr><div class="text-right"> <button class="btn btn-white btn-xs" type="button">Contact</button></div>';
    $("#ticket-content").append(text);
}


