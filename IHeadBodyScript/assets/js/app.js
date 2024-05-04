// dark/light mode switch

function checkData() {
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", window.matchMedia('(prefers-color-scheme: dark)').matches);
        var edit=document.getElementById("app");
        "true"==(localStorage.getItem("theme"))?edit.setAttribute("data", "true"):edit.setAttribute("data", "false")
    }
}

// to-do: make button that changes theme

console.log(window.innerWidth)
console.log(window.innerHeight)

let GetGitRepo = () => {
    var gitUser = "HeadBodyScript"
    fetch(`https://api.github.com/users/${gitUser}`).then(gitUserInfo => gitUserInfo.json()).then(gitUserInfo => {
        console.log(gitUserInfo);
        document.getElementById("userIcon").src=gitUserInfo.avatar_url;
    })
  };
  GetGitRepo();

//   (async()=>{let t=await (await fetch("https://raw.githubusercontent.com/HeadBodyScript/HeadBodyScript/main/README.md")).text();info.innerHTML=t})();
