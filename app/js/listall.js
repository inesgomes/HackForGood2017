window.onload = function () {
listContent();
}

function listContent() {
    $.ajax({
        type: 'get',
        url: '/listAllPedidos',
        data: {},
        success: function (data) {
            var text = '<div class="col-lg-4">' +
                '<div class="ibox">' +
                '<div class="ibox-content">' +
                '<a href="article.html" class="btn-link">' +
                '<h2> One morning, when Gregor Samsa </h2>' +
                '</a>' +
                '<div class="small m-b-xs">' +
                '<strong>AUTOR</strong>' +
                '<span class="text-muted">' +
                '<i class="fa fa-clock-o"></i> 28th Oct 2015 <i class="fa fa-map-marker"></i> LOCALIZACAO</span> </div>' +
                '<p>English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web </p>' +
                '<div class="text-right"> <button class="btn btn-white btn-xs" type="button">Match/help</button></div>' +
                '</div> </div> </div> <div class="col-lg-4"> <div class="ibox"> <div class="ibox-content"> <a href="article.html" class="btn-link"> <h2>Junk MTV quiz graced by fox whelps.</h2> </a>' +
                '<div class="small m-b-xs"> <strong>Adam Novak</strong> <span class="text-muted"><i class="fa fa-clock-o"></i> 28th Oct 2015 <i class="fa fa-map-marker"></i> LOCALIZACAO</span> </div> <p> Alex Trebeks fun TV quiz game. Woven silk pyjamas exchanged for blue quartz.' +
                'Brawny gods just zebra, and my wolves quack! Blowzy red vixens fight for a quick.</p>' +
                '<p> On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.</p>' +
                '<div class="text-right"> <button class="btn btn-white btn-xs" type="button">Match/help</button></div> </div> </div> </div>' +
                '<div class="col-lg-4"> <div class="ibox"> <div class="ibox-content"> <a href="article.html" class="btn-link"> <h2> The European languages are members </h2> </a>' +
                '<div class="small m-b-xs"> <strong>Adam Novak</strong> <span class="text-muted"><i class="fa fa-clock-o">' +
                '</i> 28th Oct 2015 <i class="fa fa-map-marker"></i> LOCALIZACAO</span> </div>' +
                '<p> The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>' +
                '<div class="text-right"> <button class="btn btn-white btn-xs" type="button">Match/help</button></div> </div> </div> </div>';
            $("#row-ticket").append(text);
        }
    });
}