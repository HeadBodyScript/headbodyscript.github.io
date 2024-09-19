(()=>{var edit=document.getElementById("app");"true"==(localStorage.getItem("theme"))?edit.setAttribute("data", "true"):edit.setAttribute("data", "false")})();
const audio = new Audio("https://github.com/HeadBodyScript/headbodyscript.github.io/raw/main/static/theme.mp3");

function btnMenu(_id) {
    switch (_id) {
        case "A1":
            btnSwitch(_id)
        break
        case "A2":
            document.getElementById(_id).classList.toggle("playing")
            if(document.getElementById(_id).classList[1] !== "playing"){
                audio.pause();
                break;
            }
                audio.play()
                audio.volume = document.getElementById("volume").value / 100;
                break;
        case "A3":
            btnSwitch(_id)
        break;
        default:
        break;
    }
}

function btnApp(_id){
    switch (_id) {
        case "D0":
            // phone
            location.href = 'https://headbodyscript.nl/assets/me.vcf';
        break;
        case "D1":
            // github
            window.location.href = "https://github.com/HeadBodyScript";
        break;
        case "D2":
            // Minecraft
            window.location.href = "https://headbodyscript.nl/minecraft/";
        break;
        case "D3":
            // Portfolio
            window.location.href = "https://headbodyscript.nl/portfolio/";
        break;
        default:
            break;
    }
}
function btnSwitch(_id){
    var checkiftrue = document.getElementById(_id + "ID");
    if (checkiftrue.classList[0] !== "true") {checkiftrue.classList.toggle("temp")}
    document.querySelectorAll('.true').forEach(el => el.classList.remove('true'))
    document.getElementById(_id + "ID").classList.replace("temp","true")
}
// This function is kinda bad
// Close all taskbar apps when clicking off it
document.addEventListener("click", function(e){
    if(e.target.classList == "desktop-programs"){
        document.querySelectorAll('.true').forEach(el => el.classList.remove('true'))
    }     
});

// INIT
const insertTime = document.getElementById("insertTime").innerHTML =
`<div style="height: fit-content; font-size: small;">${new Date().getUTCHours()}:${new Date().getUTCMinutes()} UTC</div>
<div style="height: fit-content; font-size: small;">${new Date().getUTCMonth() + 1}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}</div>`

const slider = document.getElementById("volume")
slider.value = localStorage.getItem("volume")
slider.addEventListener('change', function() {
    audio.volume = document.getElementById("volume").value / 100;
    localStorage.setItem("volume",slider.value)
});