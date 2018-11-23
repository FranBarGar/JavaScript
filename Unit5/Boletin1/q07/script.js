window.addEventListener('keyup', function (e) {
    if (e.shiftKey) {
        alert(`SHIFT+${e.code}`);
    }
    if (e.altKey) {
        alert(`ALT+${e.code}`);
    }
    if (e.ctrlKey) {
        alert(`CTRL+${e.code}`);
    }
});
