/**
 * Created by shinsch on 07.07.15.
 */
window.onload = function() {
    var imgs = document.getElementsByTagName("img");
    console.log('length ' + imgs.length);
    for (var i = 0; i < imgs.length; i++) {
        var obj = imgs[i];
        if (obj.hasAttribute("data-src")) {
            obj.setAttribute("src", obj.getAttribute("data-src"));
        }
    }
};