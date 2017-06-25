window.onload = function () {
listContent();
}

function listContent() {
    $.ajax({
        type: 'get',
        url: '/listAllPedidos',
        data: {},
        success: function (data) {
            console.log(data);
            data = JSON.parse(data);
            var col1 = "";
            var col2 = "";
            var col3 = "";
            for (var i = 0; i < data.length; i++){
                var text = '<div class="col-lg-4">' +
                    '<div class="ibox">' +
                    '<div class="ibox-content">' +
                    '<a href="article.html" class="btn-link">' +
                    '<h2>'+data[i].titulo+'</h2>' +
                    '</a>' +
                    '<div class="small m-b-xs">' +
                    '<strong>'+data[i].username+'</strong>' +
                    '<span class="text-muted">' +
                    '<i class="fa fa-clock-o"></i>'+data[i].time_stamp+'<i class="fa fa-map-marker"></i>'+data[i].localizacao+'</span> </div>' +
                    '<p>'+data[i].descricao+'</p>' +
                    '<div class="text-right"> <button class="btn btn-white btn-xs" type="button">Match/help</button></div>' +
                    '</div> </div> </div>';
                if(i%3 == 0){
                    col1 = col1.concat(text);
                } else if (i%3 == 1) {
                    col2 = col2.concat(text);
                } else if (i%3 == 2){
                    col3 = col3.concat(text);
                }
            }
            $("#row-ticket").append(col1);
            $("#row-ticket").append(col2);
            $("#row-ticket").append(col3);
        }
    });
}