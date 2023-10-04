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

//
const getGitRepo0 = document.getElementById('getGitRepo0');
const getGitRepo1 = document.getElementById('getGitRepo1');

let getInfoA = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://api.github.com/users/HeadBodyScript/repos", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        getGitRepo0.innerHTML = result[0].name;
        getGitRepo1.innerHTML = result[1].name;

    })
      .catch(error => console.log('error', error));
}
getInfoA();

const getUpdate0 = document.getElementById('getUpdate0');
let getInfoWebsite = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://api.github.com/repos/HeadBodyScript/headbodyscript.github.io/commits/main", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        getUpdate0.innerHTML = result.commit.message;
    })
      .catch(error => console.log('error', error));
}
getInfoWebsite();

const README = document.getElementById('README');
(async () => {
  const text = await (await fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/README.md")).text();
  README.innerHTML = text;
})();