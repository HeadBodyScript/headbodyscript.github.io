function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
};

document.getElementById("Texture").className += " active";
document.getElementById("TexturePacks").className += " active";
document.getElementById("t-project-1").className += " active";