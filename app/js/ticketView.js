window.onload = function () {
listContent();
}

function listContent(){

    $.ajax({
        type: 'get',
        url: '/ticketView',
        data: {},
        success: function (data) {
            var text = '<div class="mail-box-header"> ' +
                '<div class="pull-right tooltip-demo"> ' +
                '<a href="mail_compose.html" class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="" data-original-title="Reply"><i class="fa fa-reply"></i> Reply</a> ' +
                '</div>' +
                '<h2>View Message </h2> ' +
                '<div class="mail-tools tooltip-demo m-t-md"> ' +
                '<h3> <span class="font-normal">Subject: </span>Aldus PageMaker including versions of Lorem Ipsum. </h3> ' +
                '<h3> <span class="font-normal">Title: </span>Aldus PageMaker including versions of Lorem Ipsum. </h3> ' +
                '<h5> ' +
                '<span class="pull-right font-normal">10:15AM 02 FEB 2014</span> ' +
                '<span class="font-normal">From: </span>alex.smith@corporation.com ' +
                '</h5> </div> </div> ' +
                '<div class="mail-box"> ' +
                '<div class="mail-body"> ' +
                '<p>Hello Jonathan! <br> <br>' +
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus standard dummy text ever since the 1500s, when an unknown printer' +
                'took a galley of type and scrambled it to make a type <strong>specimen book.</strong>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remainingessentially unchanged. </p> ' +
                '<p>It was popularised in the 1960s with the release <a href="#" class="text-navy">Letraset sheets</a>  containing Lorem Ipsum passages, and more recently with desktop publishing softwarelike Aldus PageMaker including versions of Lorem Ipsum. </p> ' +
                '<p>There are many variations of passages of <strong>Lorem Ipsum</strong>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. If you are going to use a passage of.</p> ' +
                '</div></div>';

            $("#message-content").append(text);
        }
    });

    message-content
}