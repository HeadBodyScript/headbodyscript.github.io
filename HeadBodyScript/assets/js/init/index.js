document.getElementById("Dashboard").className += " active";

let btnSend = document.querySelector('button');
let message = document.querySelector('h1');
function copyText() {                       
    navigator.clipboard.writeText
        ("45.82.121.87");
}
btnSend.addEventListener('click', () =>{
    btnSend.innerText = 'Copied';
    setTimeout(()=>{
        btnSend.innerText = 'Copy again?'
    },3000);
});

const youtubeKey="AIzaSyD6Twf3IrJNQ3Ffc58IJxUMXxdImkJbQXM",youtubeUser="UCqYWhYvSGTLO0L-VIPpywPQ",getYouTubesubs=document.getElementById("getYouTubesubs"),getYouTubeviews=document.getElementById("getYouTubeviews");let getSubscribers=()=>{fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCqYWhYvSGTLO0L-VIPpywPQ&key=AIzaSyD6Twf3IrJNQ3Ffc58IJxUMXxdImkJbQXM").then(e=>e.json()).then(e=>{console.log(e),getYouTubesubs.innerHTML=e.items[0].statistics.subscriberCount,getYouTubeviews.innerHTML=e.items[0].statistics.viewCount}).catch(e=>console.log("error",e))};getSubscribers();

const serverStatus=document.getElementById("serverStatus"),serverMax=document.getElementById("serverMax"),serverOnline=document.getElementById("serverOnline"),serverVersion=document.getElementById("serverVersion");let getServer=()=>{var e;fetch("https://eu.mc-api.net/v3/server/ping/45.82.121.87",{method:"GET",redirect:"follow"}).then(e=>e.json()).then(e=>{console.log(e),serverStatus.innerHTML=e.online,serverMax.innerHTML=e.players.max,serverOnline.innerHTML=e.players.online,serverVersion.innerHTML=e.version.name}).catch(e=>console.log("error",e))};getServer();

const getGitSubs=document.getElementById("getGitSubs"),getGitRepo=document.getElementById("getGitRepo");let getInfo=()=>{var e;fetch("https://api.github.com/users/headbodyscript",{method:"GET",redirect:"follow"}).then(e=>e.json()).then(e=>{console.log(e),getGitSubs.innerHTML=e.followers,getGitRepo.innerHTML=e.public_repos}).catch(e=>console.log("error",e))};getInfo();

const getUpdateWebsite=document.getElementById("getUpdateWebsite");let getInfoGithub=()=>{var e;fetch("https://api.github.com/repos/HeadBodyScript/headbodyscript.github.io/commits/main",{method:"GET",redirect:"follow"}).then(e=>e.json()).then(e=>{console.log(e),getUpdateWebsite.innerHTML=e.commit.message}).catch(e=>console.log("error",e))};getInfoGithub();

const README=document.getElementById("README");(async()=>{let t=await (await fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/README.md")).text();README.innerHTML=t})();

(() => 
{
  var e, t = {
  44: (e, t, n) => {
    "use strict";
    n.r(t), n.d(t, {
      setTheme: () => a,
      toggleDarkTheme: () => l
    });
    var i = "theme",
      o = /\btheme-[a-z0-9]+\b/g,
      r = document.getElementById("toggle-dark");

    function l() {
      a(document.body.classList.contains("theme-dark") ? "theme-light" : "theme-dark")
    }

    function a(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      document.body.className = document.body.className.replace(o, ""), document.body.classList.add(e), r && (r.checked = "theme-dark" == e), t || localStorage.setItem(i, e)
    }

    function s() {
      var e = localStorage.getItem(i);
      if (e) return a(e);
      if (window.matchMedia) {
        var t = window.matchMedia("(prefers-color-scheme: dark)");
        return t.addEventListener("change", (function(e) {
          return a(e.matches ? "theme-dark" : "theme-light", !0)
        })), a(t.matches ? "theme-dark" : "theme-light", !0)
      }
    }
    r && r.addEventListener("input", (function(e) {
      a(e.target.checked ? "theme-dark" : "theme-light")
    })), "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", s) : s()
  }
}
})