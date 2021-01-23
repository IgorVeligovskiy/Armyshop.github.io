function addition() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;

    var c = a + b;
}
function showModalWin() {
 
    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    var modalWin = document.getElementById('popupWin');
    modalWin.style.display = 'block';

    darkLayer.onclick = function () {
        darkLayer.parentNode.removeChild(darkLayer);
        modalWin.style.display = 'none';
        return false;
    };
}