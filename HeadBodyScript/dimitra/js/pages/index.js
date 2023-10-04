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

const youtubeKey = 'AIzaSyD6Twf3IrJNQ3Ffc58IJxUMXxdImkJbQXM';
const youtubeUser = 'UCqYWhYvSGTLO0L-VIPpywPQ';
const getYouTubesubs = document.getElementById('getYouTubesubs');
const getYouTubeviews = document.getElementById('getYouTubeviews');
let getSubscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        getYouTubesubs.innerHTML = data["items"][0].statistics.subscriberCount;
        getYouTubeviews.innerHTML = data["items"][0].statistics.viewCount;
    })
      .catch(error => console.log('error', error));
}
getSubscribers();

const serverStatus = document.getElementById('serverStatus');
const serverMax = document.getElementById('serverMax');
const serverOnline = document.getElementById('serverOnline');
const serverVersion = document.getElementById('serverVersion');
let getServer = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("https://eu.mc-api.net/v3/server/ping/45.82.121.87", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            serverStatus.innerHTML = result.online;
            serverMax.innerHTML = result.players.max;
            serverOnline.innerHTML = result.players.online;
            serverVersion.innerHTML = result.version.name;
        })
        .catch(error => console.log('error', error));
}
getServer   ();

const getGitSubs = document.getElementById('getGitSubs');
const getGitRepo = document.getElementById('getGitRepo');
let getInfo = () => {
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
    fetch("https://api.github.com/users/headbodyscript", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        getGitSubs.innerHTML = result.followers;
        getGitRepo.innerHTML = result.public_repos;
    })
    .catch(error => console.log('error', error));
}
getInfo();


document.getElementById("Dashboard").className += " active";


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

const meow = document.getElementById('meow');
(async () => {
  const text = await (await fetch("https://github.com/HeadBodyScript/headbodyscript.github.io#readme.md")).text();
  meow.innerHTML = text;
})();