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
        data: {id},
        success: function (data) {
            var text = '<div class="text-center article-title"> <h1>Behind the word mountains </h1> ' +
                '<strong>AUTOR</strong> <span class="text-muted"><i class="fa fa-clock-o"></i> 28th Oct 2015 <i class="fa fa-map-marker"></i> LOCALIZACAO</span> ' +
                '</div> ' +
                '<p>Many desktop publishing packages and web page editors now use <strong>Lorem Ipsum as their default model text</strong>, and a search for  will uncover many web </p> ' +
                '<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. thought. It dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops </p> ' +
                '<hr><div class="text-right"> <button class="btn btn-white btn-xs" type="button">Contact</button></div>';
            $("#ticket-content").append(text);
        }
    });
}

function listContentRequest() {
    var id = getURLParameter('ticket_id');
    $.ajax({
        type: 'get',
        url: '/getPedidosById',
        data: {id},
        success: function (data) {
            var text = '<div class="text-center article-title"> <h1>Behind the word mountains </h1> ' +
                '<strong>AUTOR</strong> <span class="text-muted"><i class="fa fa-clock-o"></i> 28th Oct 2015 <i class="fa fa-map-marker"></i> LOCALIZACAO</span> ' +
                '</div> ' +
                '<p>Many desktop publishing packages and web page editors now use <strong>Lorem Ipsum as their default model text</strong>, and a search for  will uncover many web </p> ' +
                '<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. thought. It dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops </p> ' +
                '<hr><div class="text-right"> <button class="btn btn-white btn-xs" type="button">Contact</button></div>';
            $("#ticket-content").append(text);
        }
    });
}



