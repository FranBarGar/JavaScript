$(()=>{
    var $ul = $('ul');

    /**
     * Comprobamos si ya está las lista de items el localStorage,
     * si no, crea un array vacio.
     */
    var items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    var $input = $('#item');
    items.forEach(item => {
        rellenarLista(item);
    });

    $('form').on('submit', (e) => {
        e.preventDefault();

        items.push($input.val());
        localStorage.setItem('items', JSON.stringify(items));
        rellenarLista($input.val());
        $input.val("");
    });

    $('button').on('click', () => {
        localStorage.clear();
        $ul.children().remove();
        items = [];
    });

    function rellenarLista(text) {
        $('<li>').html(text).appendTo($ul);
    }
});
