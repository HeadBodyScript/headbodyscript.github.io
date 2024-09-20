// (()=>{var edit=document.getElementById("app");"true"==(localStorage.getItem("theme"))?edit.setAttribute("data", "true"):edit.setAttribute("data", "false")})();
const audio = new Audio("https://github.com/HeadBodyScript/headbodyscript.github.io/raw/main/static/theme.mp3");

function BTN(ID) {
    switch (ID) {
        case "DESKTOP0":
            // settings
            toggleClass(ID, document.getElementById(ID + "ID"))
        break
        case "DESKTOP1":
            // sound
            document.getElementById(ID).classList.toggle("audio-playing")
            if(document.getElementById(ID).classList[1] !== "audio-playing"){
                audio.pause();
                break;
            }
                audio.play()
                audio.volume = document.getElementById("VOLUMESLIDER").value / 100;
                break;
        case "DESKTOP3":
            // cheveron
            toggleClass(ID, document.getElementById(ID + "ID"))
        break;
        case "APP0":
            // phone
            location.href = 'https://headbodyscript.nl/assets/me.vcf';
        break;
        case "APP1":
            // github
            window.location.href = "https://github.com/HeadBodyScript";
        break;
        case "APP2":
            // Minecraft
            window.location.href = "https://headbodyscript.nl/minecraft";
        break;
        case "APP3":
            // Portfolio
            window.location.href = "https://headbodyscript.nl/portfolio";
        break;
        default:
            console.log("ERROR")
        break;
    }
}
function toggleClass(ID, VAR_class){
    // var checkiftrue = document.getElementById(ID + "ID");
    if (VAR_class.classList[0] !== "true") {VAR_class.classList.toggle("temp")}
    document.querySelectorAll('.true').forEach(el => el.classList.remove('true'))
    document.getElementById(ID + "ID").classList.replace("temp","true")
}
// This function is kinda bad
// Close all taskbar apps when clicking off it
document.addEventListener("click", function(e){
    if(e.target.classList == "desktop-apps"){
        document.querySelectorAll('.true').forEach(el => el.classList.remove('true'))
    }     
});

// INIT
const DIV_date = document.getElementById("INSERTDATE").innerHTML =
`<div style="height: fit-content; font-size: small;">${new Date().getUTCHours()}:${new Date().getUTCMinutes()} UTC</div>
<div style="height: fit-content; font-size: small;">${new Date().getUTCMonth() + 1}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}</div>`

const DIV_volume_slider = document.getElementById("VOLUMESLIDER")
DIV_volume_slider.value = localStorage.getItem("INT_VOLUMESLIDER")
DIV_volume_slider.addEventListener('change', function() {
    audio.volume = DIV_volume_slider.value / 100;
    localStorage.setItem("INT_VOLUMESLIDER",DIV_volume_slider.value)
});