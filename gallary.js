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