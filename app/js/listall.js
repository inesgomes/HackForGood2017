window.onload = function () {
    var ticket = getURLParameter('type');
    if(ticket == "offer"){
        listContentOffer();
    } else if(ticket == "request") {
        listContentRequest();
    }
}

function listContentOffer() {
    $.ajax({
        type: 'get',
        url: '/listAllOfertas',
        data: {},
        success: function (data) {
            data = JSON.parse(data);
            listContent(data, "offer");
        }
    });
}

function listContentRequest(){
    $.ajax({
        type: 'get',
        url: '/listAllPedidos',
        data: {},
        success: function (data) {
            data = JSON.parse(data);
            listContent(data, "request");
        }
    });
}

function listContent(data, button){
    for (var i = 0; i < data.length; i++){
        var text = '' +
            '<div class="ibox">' +
            '<div class="ibox-content">' +
            '<a href="ticket?ticket_id='+data[i].id+'&type='+button+'" class="btn-link">' +
            '<h2>'+data[i].titulo+'</h2>' +
            '</a>' +
            '<div class="small m-b-xs">' +
            '<strong>'+data[i].username+'</strong>' +
            '<span class="text-muted">' +
            '<i class="fa fa-clock-o"></i>'+data[i].time_stamp+'<i class="fa fa-map-marker"></i>'+data[i].localizacao+'</span> </div>' +
            '<p>'+data[i].descricao+'</p>' +
            '<div class="text-right"> <button onclick="window.location = \'sendMessage?id='+data[i].id+'&type='+button+'&receptor='+data[i].username+'\'" class="btn btn-white btn-xs" type="button">'+button+'</button></div>' +
            '</div> </div>';
        if(i%3 == 0){
            $("#col1").append(text);
        } else if (i%3 == 1) {
            $("#col2").append(text);
        } else if (i%3 == 2){
            $("#col3").append(text);
        }
    }
}