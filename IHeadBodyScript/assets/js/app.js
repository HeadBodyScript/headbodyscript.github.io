// dark/light mode switch

function checkData() {
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", window.matchMedia('(prefers-color-scheme: dark)').matches);
        var edit=document.getElementById("app");
        "true"==(localStorage.getItem("theme"))?edit.setAttribute("data", "true"):edit.setAttribute("data", "false")
    }
}

// to-do: make button that changes theme