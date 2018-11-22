window.onload = function(){
    document.getElementById('1.png').addEventListener('mouseover', function(){path('1.png')});
    document.getElementById('2.png').addEventListener('mouseover', function(){path('2.png')});
};

function path(id)
{
    alert(document.getElementById(id).src);
}
