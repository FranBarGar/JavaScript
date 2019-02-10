$.fn.masInfoClick = function(){
    this.on('click', function () {
        var $parent = $(this).parent();
        $(`<img src="photos/${$parent.attr('data-loc')}.jpg"></img>
           <figcaption>Weather: ${$parent.attr('data-temp')}</figcaption>`)
        .appendTo($parent);
    });
};

$.fn.masInfo = function(){
    for (var i = 0; i < this.length; i++) {
        var $parent = $(this[i]).parent();
        $(`<img src="photos/${$parent.attr('data-loc')}.jpg"></img>
        <figcaption>Weather: ${$parent.attr('data-temp')}</figcaption>`)
        .appendTo($parent);
    }
};
