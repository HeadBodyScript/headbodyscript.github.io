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
        case "SAVE":
            // make it with if statement so it only saves if it exists
            // add some presets
            let
            BG = document.getElementById("BACKGROUNDID").value,
            hover = document.getElementById("COLORHOVERID").value,
            taskbar = document.getElementById("COLORTASKBARID").value,
            text = document.getElementById("COLORTEXTID").value;

            document.documentElement.style.setProperty('--main-hover', hover);
            document.documentElement.style.setProperty('--selected', hover);
            document.documentElement.style.setProperty('--main', taskbar);
            document.documentElement.style.setProperty('--color', text);
            document.documentElement.style.setProperty('--bg', `url(${BG})`);

            const box = {"main-hover": hover, "main": taskbar, "color": text, "bg": BG};
            console.log(box)
            // const obj = JSON.parse(box);
            // console.log(obj)

            localStorage.setItem("userPref", JSON.stringify(box))

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
    // console.log(e.target.classList)
    if(e.target.classList == "wrapper"){
        document.querySelectorAll('.true').forEach(el => el.classList.remove('true'))
    }     
});

// 
async function fetchApi() {
    let KEY = "AIzaSyD6Twf3IrJNQ3Ffc58IJxUMXxdImkJbQXM", USER = "UC5_TZLtN2__1Yy3A-AvXZ2A"
    var response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${USER}&key=${KEY}`)
    var response = await response.json()
    document.getElementById("INSERTYTSUBS").innerHTML = response.items[0].statistics.subscriberCount
    document.getElementById("INSERTYTVIEWS").innerHTML = response.items[0].statistics.viewCount

    var response = await fetch(`https://api.github.com/users/headbodyscript`)
    var response = await response.json()
    document.getElementById("INSERTGITFOLLOWERS").innerHTML = response.followers
    document.getElementById("INSERTGITPROJECTS").innerHTML = response.public_repos
}
// fetchApi()

// INIT
const DIV_date = document.getElementById("INSERTDATE").innerHTML = `<div style="height: fit-content; font-size: small;">${new Date().getUTCHours()}:${new Date().getUTCMinutes()} UTC</div> <div style="height: fit-content; font-size: small;">${new Date().getUTCMonth() + 1}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}</div>`

const DIV_volume_slider = document.getElementById("VOLUMESLIDER")
DIV_volume_slider.value = localStorage.getItem("INT_VOLUMESLIDER")
DIV_volume_slider.addEventListener('change', function() {
    audio.volume = DIV_volume_slider.value / 100;
    localStorage.setItem("INT_VOLUMESLIDER",DIV_volume_slider.value)
});

const box = JSON.parse(localStorage.getItem("userPref"));
console.log(box)
document.documentElement.style.setProperty('--main-hover', box["main-hover"]);
document.documentElement.style.setProperty('--selected', box.main);
document.documentElement.style.setProperty('--main', box.main);
document.documentElement.style.setProperty('--color', box.color);
document.documentElement.style.setProperty('--bg', `url(${box.bg})`);