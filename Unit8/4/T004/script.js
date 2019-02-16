$(()=>{
    generarTabla(5);
    $('table').on('click', (e)=>{
        var str = prompt('Introduzca lo que desea guardar en la celda seleccionada.');
        $(e.target).html(str);
    });
});

function generarTabla(num) {
    var $table = $('<table>');
    var $thead = $('<thead>');
    var $tbody = $('<tbody>');

    for (let i = 0; i < num; i++) {
        $thead.append('<th>');
    }

    for (let i = 0; i < num*2; i++) {
        var $tr = $('<tr>');
        for (let i = 0; i < num; i++) {
            $tr.append('<td>');
        }
        $tbody.append($tr);
    }

    $table
    .append($thead)
    .append($tbody)
    .appendTo('body');
}
