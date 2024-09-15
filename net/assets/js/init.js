(()=>{var edit=document.getElementById("app");"true"==(localStorage.getItem("theme"))?edit.setAttribute("data", "true"):edit.setAttribute("data", "false")})();
var audio = new Audio("../net/assets/theme.mp3");

function btnMenu(_id) {
switch (_id) {
    case "0":
        location.href = 'https://headbodyscript.nl/assets/me.vcf';
    break;
    case "1":
            var settings = document.getElementById("settings")
            var data = settings.getAttribute("data")
            if(data === "hidden")
                {settings.setAttribute("data","init")}
            if(data === "init")
                {var id = "settingsExit";btnExit(id)}
    break
    case "2":
        console.log("meow")
        var divVolumeOn = document.getElementById("volumeOn")
        var divVolumeOff = document.getElementById("volumeOff")
        if(divVolumeOn.getAttribute("data") === "init"){
            console.log("meow1")
            {divVolumeOn.setAttribute("data","hidden")}
            {divVolumeOff.setAttribute("data","init")}
            audio.pause();
            break;
        }
        else{
            console.log("meow2")
            {divVolumeOn.setAttribute("data","init")}
            {divVolumeOff.setAttribute("data","hidden")}
            audio.play()
            audio.volume = 0.2;
            break;
        }
    break;
    default:
    break;
}
}

function btnExit(id){
    var _id = id.slice(0, -4)
    // console.log(_id)
    var settings = document.getElementById(_id)
    settings.setAttribute("data","hidden")
}