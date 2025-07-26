// HOME-MENU
var y = window.innerHeight;
window.addEventListener("keydown", function(event) {
    // console.log(event.key)
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.view.event.preventDefault();
    }
    if(event.key == "Escape") {userLoginClose()}
    if(event.key == "ArrowDown") {
        window.scrollBy(0, y)
    }
    if(event.key == "ArrowUp") {
        window.scrollBy(0, -y)
    }
})
function menu (x){
    z = x * y
    window.scrollTo({top: z, left: 0});
}
// END OF HOME-MENU
// ABOUT-MENU
function menuAbout(x) {
    var classIDselectorAbout = document.getElementById("selectorAbout").querySelectorAll("li")
        classIDselectorAbout.forEach(li => {
            li.classList.remove("active")
    });
    classIDselectorAbout[x].classList.add("active")
    var classIDContentAbout = document.getElementById("contentAbout").querySelectorAll(".column")
        classIDContentAbout.forEach(column => {
        column.classList.remove("active")
    });
    classIDContentAbout[x].classList.add("active")
}
// END OF ABOUT-MENU
// MENU LOGIN/REGISTER
var userDiv = document.getElementById("USER")
var userRegisterDiv = document.getElementById("userRegisterDiv")
var userLoginDiv = document.getElementById("userLoginDiv")
function switchLogin(){
    userRegisterDiv.classList.remove("active")
    userLoginDiv.classList.add("active")
}
function switchRegister(){
    userRegisterDiv.classList.add("active")
    userLoginDiv.classList.remove("active") 
}
function userLoginClose(){
    userRegisterDiv.classList.remove("active")
    userLoginDiv.classList.remove("active") 
    userDiv.classList.remove("user-active")
}
function userLoginOpen(){
    userLoginDiv.classList.add("active")
    userDiv.classList.add("user-active")
}
// END OF MENU LOGIN/REGISTER
// LOADING
var el = document.getElementById('graph'); // get canvas

var options = {
    percent:  el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 64,
    lineWidth: el.getAttribute('data-line') || 5,
    rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
var span = document.createElement('span');
span.id= "perc";
span.textContent = options.percent + '%';
    
if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var ctx = canvas.getContext('2d');
canvas.width = canvas.height = options.size;

el.appendChild(span);
el.appendChild(canvas);

ctx.translate(options.size / 2, options.size / 2); // change center
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

//imd = ctx.getImageData(0, 0, 240, 240);
var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(0, percent), 1);
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
		ctx.strokeStyle = color;
        ctx.lineCap = 'butt'; // butt, round or square
		ctx.lineWidth = lineWidth
		ctx.stroke();
};

drawCircle('#efefef', options.lineWidth, 100 / 100);
// drawCircle('#555555', options.lineWidth, options.percent / 100);
// END OF LOADING

// fetch(`temp.json`).then(response => response.json()).then(response => console.log(response))
// DEL AFTER