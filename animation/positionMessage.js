function positionMessage(){
    if(!document.getElementById) return false;
    if (!document.getElementById("message")) return false;

    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.top = "100px";
    elem.style.left = "50px";

}

addEventListener(positionMessage());