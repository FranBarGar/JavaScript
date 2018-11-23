window.addEventListener('keyup', function (e) {
    if (e.shiftKey) {
        alert(`SHIFT+${e.code}`);
    } else
    if (e.altKey) {
        alert(`ALT+${e.code}`);
    } else
    if (e.ctrlKey) {
        alert(`CTRL+${e.code}`);
    } else
    alert(`${e.code}`);
});
