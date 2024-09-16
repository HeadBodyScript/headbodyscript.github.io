(()=>{var edit=document.getElementById("app");"true"==(localStorage.getItem("theme"))?edit.setAttribute("data", "true"):edit.setAttribute("data", "false")})();
var audio = new Audio("../net/assets/theme.mp3");

function btnMenu(_id) {
    var deleteClass = document.getElementsByClassName("true")
    console.log(deleteClass)
    // deleteClass.classList.remove("")
switch (_id) {
    case "A0":
        location.href = 'https://headbodyscript.nl/assets/me.vcf';
    break;
    case "A1":
            var settings = document.getElementById("settings")
            var data = settings.getAttribute("data")
            if(data === "hidden")
                {settings.setAttribute("data","init")}
            if(data === "init")
                {var id = "settingsExit";btnExit(id)}
    break
    case "A2":
        var divVolumeOn = document.getElementById("volumeOn")
        var divVolumeOff = document.getElementById("volumeOff")
        if(divVolumeOn.getAttribute("data") === "init"){
            {divVolumeOn.setAttribute("data","hidden")}
            {divVolumeOff.setAttribute("data","init")}
            audio.pause();
            break;
        }
        else{

            {divVolumeOn.setAttribute("data","init")}
            {divVolumeOff.setAttribute("data","hidden")}
            audio.play()
            audio.volume = 0.2;
            break;
        }
    case "A3":
        document.getElementById(_id + "ID").classList.toggle("true");
    break;
    default:
    break;
}
}

function btnExit(id){
    var _id = id.slice(0, -4)
    var settings = document.getElementById(_id)
    settings.setAttribute("data","hidden")
}



var insertTime = document.getElementById("insertTime")
insertTime.innerHTML =
`
<div style="height: fit-content; font-size: small;">${new Date().getUTCHours()}:${new Date().getUTCMinutes()} UTC</div>
<div style="height: fit-content; font-size: small;">${new Date().getUTCMonth() + 1}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}</div>
`