$(function(){
    $('img').on('click', function(){
        $('img').animate({opacity: 0.4});
        $(this).animate({
            width: "85%",
            opacity: 1,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 1500 );
    });
});
