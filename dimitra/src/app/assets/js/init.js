function checkTheme(){
    if ("true" == localStorage.getItem("theme")){
        localStorage.setItem("theme", "false")
    }
    else {
        localStorage.setItem("theme", "true")
    }
    changeTheme()
}
function changeTheme(){
    var edit=document.getElementById("app");"true"==(localStorage.getItem("theme"))?edit.setAttribute("data", "true"):edit.setAttribute("data", "false")
}
changeTheme()
