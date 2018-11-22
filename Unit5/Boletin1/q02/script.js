var x=0;
var y=0;

window.onload = function(){
    window.addEventListener('keydown', mover);
};

function mover(e=window.event)
{
    switch (e.code) {
        case 'ArrowUp':
            y-=10;
            div.style.top=y+'px';
        break;
        case 'ArrowDown':
            y+=10;
            div.style.top=y+'px';
        break;
        case 'ArrowRight':
            x+=10;
            div.style.left=x+'px';
        break;
        case 'ArrowLeft':
            x-=10;
            div.style.left=x+'px';
        break;
    }
}
