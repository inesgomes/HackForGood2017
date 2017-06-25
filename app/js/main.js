window.onload = function () {
    listContent();
}

function listContent() {
    $.ajax({
        type: 'get',
        url: '/listAllPedidos',
        data: {},
        success: function (data) {
            var text = '<li onclick="redirectOffer(1);" class="info-element" id="task1">Simply dummy text of the printing and typesetting industry. ' +
                '<div class="row"> ' +
                '<div class="agile-detail col-lg-2"> ' +
                '<strong>AUTOR</strong> ' +
                '</div> ' +
                '<div class="agile-detail col-lg-3"> ' +
                '<i class="fa fa-clock-o"></i> DATA ' +
                '</div> ' +
                '<div class="agile-detail col-lg-4"> ' +
                '<i class="fa fa-map-marker"></i> LOCALIZACAO ' +
                '</div></div> </li>';

            var text2 = '<li onclick="redirectRequest(1);" class="success-element" id="task9">' +
                'Quisque venenatis ante in porta suscipit. <div class="row"> <div class="agile-detail col-lg-2"> ' +
                '<strong>AUTOR</strong> ' +
                '</div> ' +
                '<div class="agile-detail col-lg-3"> ' +
                '<i class="fa fa-clock-o"></i> DATA ' +
                '</div> ' +
                '<div class="agile-detail col-lg-4"> <i class="fa fa-map-marker"></i> LOCALIZACAO ' +
                '</div> </div> </li>';

            $("#offerList").append(text);
            $("#helpList").append(text2);
        }
    });
}

function redirectOffer(id){
    window.location.href='/ticket?ticket_id='+id+'&type=offer';
}

function redirectRequest(id){
    window.location.href='/ticket?ticket_id='+id+'&type=request';
}