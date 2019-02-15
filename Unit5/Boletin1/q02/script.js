var x=0;
var y=0;

window.onload = function(){
    window.addEventListener('keydown', mover);
};

function mover(e=window.event)
{
    switch (e.code) {
        case 'KeyW':
        case 'Numpad8':
        case 'ArrowUp':
            y-=10;
            div.style.top=y+'px';
        break;
        case 'KeyS':
        case 'Numpad2':
        case 'ArrowDown':
            y+=10;
            div.style.top=y+'px';
        break;
        case 'KeyD':
        case 'Numpad6':
        case 'ArrowRight':
            x+=10;
            div.style.left=x+'px';
        break;
        case 'KeyA':
        case 'Numpad4':
        case 'ArrowLeft':
            x-=10;
            div.style.left=x+'px';
        break;
    }
}
