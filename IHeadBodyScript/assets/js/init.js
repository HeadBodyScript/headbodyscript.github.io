// Changed the data attribute on #app based on localstorage
(()=>{var edit=document.getElementById("app");"true"==(localStorage.getItem("theme"))?edit.setAttribute("data", "true"):edit.setAttribute("data", "false")})();
