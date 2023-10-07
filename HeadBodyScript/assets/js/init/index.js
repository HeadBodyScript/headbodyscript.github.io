document.getElementById("Dashboard").className += " active";

let btnSend = document.querySelector('button');
let message = document.querySelector('h1');
function copyText() {                       
    navigator.clipboard.writeText
        ("mc.hypixel.net");
}
btnSend.addEventListener('click', () =>{
    btnSend.innerText = 'Copied';
    setTimeout(()=>{
        btnSend.innerText = 'Copy again?'
    },3000);
});

const youtubeKey="AIzaSyD6Twf3IrJNQ3Ffc58IJxUMXxdImkJbQXM",youtubeUser="UCqYWhYvSGTLO0L-VIPpywPQ",getYouTubesubs=document.getElementById("getYouTubesubs"),getYouTubeviews=document.getElementById("getYouTubeviews");let getSubscribers=()=>{fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCqYWhYvSGTLO0L-VIPpywPQ&key=AIzaSyD6Twf3IrJNQ3Ffc58IJxUMXxdImkJbQXM").then(e=>e.json()).then(e=>{console.log(e),getYouTubesubs.innerHTML=e.items[0].statistics.subscriberCount,getYouTubeviews.innerHTML=e.items[0].statistics.viewCount}).catch(e=>console.log("error",e))};getSubscribers();

const serverStatus=document.getElementById("serverStatus"),serverLogo=document.getElementById("serverLogo"),serverMOTD=document.getElementById("serverMOTD"),serverMax=document.getElementById("serverMax"),serverOnline=document.getElementById("serverOnline"),serverVersion=document.getElementById("serverVersion");let getServer=()=>{var e;fetch("https://eu.mc-api.net/v3/server/ping/mc.hypixel.net",{method:"GET",redirect:"follow"}).then(e=>e.json()).then(e=>{console.log(e),serverStatus.innerHTML=e.online,serverMax.innerHTML=e.players.max,serverOnline.innerHTML=e.players.online,serverVersion.innerHTML=e.version.name,serverMOTD.innerHTML=e.description,serverLogo.innerHTML=e.online}).catch(e=>console.log("error",e))};getServer();

const getGitSubs=document.getElementById("getGitSubs"),getGitRepo=document.getElementById("getGitRepo");let getInfo=()=>{var e;fetch("https://api.github.com/users/headbodyscript",{method:"GET",redirect:"follow"}).then(e=>e.json()).then(e=>{console.log(e),getGitSubs.innerHTML=e.followers,getGitRepo.innerHTML=e.public_repos}).catch(e=>console.log("error",e))};getInfo();

const getUpdateWebsite=document.getElementById("getUpdateWebsite");let getInfoGithub=()=>{var e;fetch("https://api.github.com/repos/HeadBodyScript/headbodyscript.github.io/commits/main",{method:"GET",redirect:"follow"}).then(e=>e.json()).then(e=>{console.log(e),getUpdateWebsite.innerHTML=e.commit.message}).catch(e=>console.log("error",e))};getInfoGithub();

const README=document.getElementById("README");(async()=>{let t=await (await fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/README.md")).text();README.innerHTML=t})();

if (location.href.indexOf("vcard") > -1) {location.href = 'https://headbodyscript.nl/assets/me.vcf';}



// const serverLogo2 = document.getElementById("serverLogo2")
// let getServer2 = () => {
//   var e;
//   fetch("https://eu.mc-api.net/v3/server/ping/mc.hypixel.net", {
//     method: "GET",
//     redirect: "follow"
//   }).then(e => e.json()).then(e => {
//     console.log(e), serverLogo2.innerHTML = e.favicon
//   }).catch(e => console.log("error", e))
// };
// getServer2();



const myImage = document.getElementById("myImage");
function setImageSource() {
    var e;
    fetch("https://eu.mc-api.net/v3/server/ping/mc.hypixel.net", {
      method: "GET",
      redirect: "follow"
    }).then(e => e.json()).then(e => {
      console.log(e), myImage = e.favicon
    }).catch(e => console.log("error", e))
}
myImage.src = setImageSource();
console.log(myImage);

// const myImage = document.getElementById("myImage");
// function setImageSource() {
//     const myVariable = "https://github.com/HeadBodyScript/HeadBodyScript/blob/main/user-interface/twitter-icon.png?raw=true";
//     return myVariable;
// }
// myImage.src = setImageSource();
// console.log(myImage);

// const myImage = document.getElementById("myImage")
// myImage.src = "" + serverLogo2;
// console.log(myImage);



// Your function that sets the variable
// function setImageSource() {
//   const myVariable = "https://github.com/HeadBodyScript/HeadBodyScript/blob/main/user-interface/twitter-icon.png?raw=true";
//   return myVariable;
// }

// Set the src attribute using the variable from the function

// console.log(serverLogo2);