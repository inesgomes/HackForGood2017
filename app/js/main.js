window.onload = function () {
    listContentOffer();
}

function listContentOffer(){
    $.ajax({
        type: 'get',
        url: '/listAllOfertas',
        data: {},
        success: function (data) {
            data = JSON.parse(data);
            $("#offerList").append(listText(data, "info"));
            listContentRequest();
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
            $("#helpList").append(listText(data, "success"));
        }
    });
}

function listText(data, color){

    var text = '';

    for(var i = 0; i < data.length; i++) {
        text = text.concat('<li onclick="redirectOffer('+data[i].id+');" class="'+color+'-element" id="task1">'+data[i].titulo+' ' +
            '<div class="row"> ' +
            '<div class="agile-detail col-lg-2"> ' +
            '<strong>'+data[i].username+'</strong> ' +
            '</div>' +
            '<div class="agile-detail col-lg-3"> ' +
            '<i class="fa fa-clock-o"></i>'+data[i].time_stamp+'' +
            '</div> ' +
            '<div class="agile-detail col-lg-4"> ' +
            '<i class="fa fa-map-marker"></i>'+data[i].localizacao+' ' +
            '</div></div> </li>');
    }

    return text;
}

function redirectOffer(id){
    window.location.href='/ticket?ticket_id='+id+'&type=offer';
}

function redirectRequest(id){
    window.location.href='/ticket?ticket_id='+id+'&type=request';
}
