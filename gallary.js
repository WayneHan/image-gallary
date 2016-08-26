function getpic(pic) {
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    var text = pic.getAttribute("title");
    var replacetext = document.getElementById("description");
    replacetext.firstChild.nodeValue = text;

}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}
window.onload = countBodyChildren;

window.onload = preparelink;
function preparelink(){
    var link = document.getElementsByTagName("a");
    for(var i = 0; i < link.length; i++){
        if(link[i].getAttribute("class") == "popUp"){
            link[i].onclick = function (){
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function popUp(winURL){
    window.open(winURL, "popup", "width = 320, height = 480");
}