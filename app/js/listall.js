window.onload = function () {
listContent();
}

function listContent(){
    $.ajax({
        type: 'get',
        url: '../../api/tickets/searchTickets.php',
        data: {"solved": type, "offset": offsets[myoffset]},
        success: function (data) {
            var tickets = JSON.parse(data);
            $('#' + id + 'Badge').empty().append(tickets.length);
            $('#' + id + 'Table').empty();
            allTickets = [];
            for (var i = 0; i < tickets.length; i++) {

                var text = '<tr><td><a href="" onclick="openTicket(' + tickets[i].idticket + '); return false;">' + tickets[i].title + '</a></td>';

                if (type == false) {
                    text += '<td id="ticket' + tickets[i].idticket + '">' +
                        '<button type="button" onclick="solveTicket(' + tickets[i].idticket + ')" class="btn btn-success btn-xs">' +
                        '<span class="glyphicon glyphicon-ok" aria-hidden="false"></span>' +
                        '</button>' +
                        '</td>';
                }

                text += '</tr>';

                $('#' + id + 'Table').append(text);
            }
        }
    });
}