function getpic(pic) {
    if (!document.getElementById("placeholder")) return false;
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        var text = pic.getAttribute("title") ? pic.getAttribute("title") : "";
        var replacetext = document.getElementById("description");
        replacetext.firstChild.nodeValue = text;
    }
    return true;
}

function addloadevent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addloadevent(prepareGallary);
addloadevent(addimagebrowser);

function addimagebrowser(){
    var para = document.createElement("p");
    para.setAttribute("id", "description");
    var txt = document.createTextNode("Choose an image");
    para.appendChild(txt);
    document.body.appendChild(para);
    var bg_img = document.createElement("img");
    bg_img.setAttribute("src", "images/background.gif");
    bg_img.setAttribute("id","placeholder");
    bg_img.setAttribute("alt","my image gallary");
    document.body.appendChild(bg_img);
}

function prepareGallary() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var gallary = document.getElementById("imagegallary");
    var link = gallary.getElementsByTagName("a");
    for (var i = 0; i < link.length; i++) {
        link[i].onclick = function () {
            return getpic(this) ? false : true;
        }
    }
}

/*function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}
window.onload = countBodyChildren;

window.onload = preparelink;*/
/*function preparelink() {
    var link = document.getElementsByTagName("a");
    for (var i = 0; i < link.length; i++) {
        if (link[i].getAttribute("class") == "popUp") {
            link[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function popUp(winURL) {
    window.open(winURL, "popup", "width = 320, height = 480");
}*/