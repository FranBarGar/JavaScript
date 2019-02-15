window.onload = function(){
    var img = document.getElementsByTagName('img');
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener('mouseover', path);
    }
};

function path()
{
    alert(this.src);
}
