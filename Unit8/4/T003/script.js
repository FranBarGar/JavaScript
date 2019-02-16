$(()=>{
    addImage();
    $('#ocultar').on('click', ()=>{
        $('#img').hide();
    });
    $('#empezar').on('click', ()=>{
        $('img').remove();
        $('#img').show();
    });
    $('#continuar').on('click', ()=>{
        $('#img').show();
    });
});

function addImage() {
    $('<img>')
    .attr('src', 'jquery.png')
    .css('display', 'none')
    .appendTo('#img')
    .show(2000, addImage);
}
