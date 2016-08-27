function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }
    else{
        widow.onload = function(){
            oldonload();
            func();
        }
    }
}