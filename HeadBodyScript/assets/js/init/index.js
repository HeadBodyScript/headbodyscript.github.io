document.getElementById("Dashboard").className += " active";

let btnSend = document.querySelector('button');
function copyText() { navigator.clipboard.writeText ("mc.hypixel.net"); }
btnSend.addEventListener('click', () =>{ btnSend.innerText = 'Copied'; setTimeout(()=>{ btnSend.innerText = 'Copy again?' },3000); });

const youtubeKey="AIzaSyD6Twf3IrJNQ3Ffc58IJxUMXxdImkJbQXM",youtubeUser="UCqYWhYvSGTLO0L-VIPpywPQ",getYouTubesubs=document.getElementById("getYouTubesubs"),getYouTubeviews=document.getElementById("getYouTubeviews");let getSubscribers=()=>{fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCqYWhYvSGTLO0L-VIPpywPQ&key=AIzaSyD6Twf3IrJNQ3Ffc58IJxUMXxdImkJbQXM").then(e=>e.json()).then(e=>{console.log(e),getYouTubesubs.innerHTML=e.items[0].statistics.subscriberCount,getYouTubeviews.innerHTML=e.items[0].statistics.viewCount}).catch(e=>console.log("error",e))};getSubscribers();

const serverStatus=document.getElementById("serverStatus"),serverMOTD=document.getElementById("serverMOTD"),serverMax=document.getElementById("serverMax"),serverOnline=document.getElementById("serverOnline"),serverVersion=document.getElementById("serverVersion");let getServer=()=>{var e;fetch("https://eu.mc-api.net/v3/server/ping/mc.hypixel.net",{method:"GET",redirect:"follow"}).then(e=>e.json()).then(e=>{console.log(e),serverStatus.innerHTML=e.online,serverMax.innerHTML=e.players.max,serverOnline.innerHTML=e.players.online,serverVersion.innerHTML=e.version.name,serverMOTD.innerHTML=e.description}).catch(e=>console.log("error",e))};getServer();

const getGitSubs=document.getElementById("getGitSubs"),getGitRepo=document.getElementById("getGitRepo");let getInfo=()=>{var e;fetch("https://api.github.com/users/headbodyscript",{method:"GET",redirect:"follow"}).then(e=>e.json()).then(e=>{console.log(e),getGitSubs.innerHTML=e.followers,getGitRepo.innerHTML=e.public_repos}).catch(e=>console.log("error",e))};getInfo();

// const getTimeWebsite=document.getElementById("getTimeWebsite"),getUpdateWebsite=document.getElementById("getUpdateWebsite");let getInfoGithub=()=>{var e;fetch("https://api.github.com/repos/HeadBodyScript/headbodyscript.github.io/commits/main",{method:"GET",redirect:"follow"}).then(e=>e.json()).then(e=>{console.log(e),getUpdateWebsite.innerHTML=e.commit.message,getTimeWebsite.innerHTML=e.commit.author.date}).catch(e=>console.log("error",e))};getInfoGithub();

let GetGitRepo = () => {
    var gitUser = "HeadBodyScript"
    var GitRepoLink = "/repos/HeadBodyScript/DATA-Armoury/commits" // make link of the repo that you can can visit
    fetch(`https://api.github.com/users/${gitUser}/repos`)
    .then(Categories => Categories.json())
    .then(Categories => { // console.log(Categories)

        var reducedCategories = Categories.reduce((prev, obj) => prev + `/${obj.name}`, '');
        localStorage.setItem('reducedList', reducedCategories);

            function placeDiv() {

            var _reducedCategories = localStorage.getItem('reducedList');
            var splitCategories = _reducedCategories.split("/");
            var resultCategories = splitCategories.pop();
            var newReducedCategories = splitCategories.join("/");
            localStorage.setItem('reducedList', newReducedCategories);
            console.log(_reducedCategories)

            fetch(`https://api.github.com/repos/HeadBodyScript/${resultCategories}/commits/main`)
                .then(subCategories => subCategories.json())
                .then(subCategories => {

                var gitTime = subCategories.commit.author.date
                var gitSummary = subCategories.commit.message
                Form.innerHTML +=
                `
                <tr>
                <td class="updates">
                    <div class="updates font-bold" style="width: fit-content; margin-right: 10px;">
                    Name:<div class="text-muted" style="margin-left: 10px;">${resultCategories}</div>
                    </div>
                    <div class="updates font-bold" style="width: fit-content; margin-right: 10px;">
                    Summary:<p class="text-muted" style="margin-left: 10px;">${gitSummary}</p>
                    </div>
                    <div class="updates font-bold" style="width: fit-content; margin-right: 10px;">
                    Release date:<p class="text-muted" style="margin-left: 10px;">${gitTime}</p>
                    </div>
                </td>
                </tr>
                `
                })
            }

        let result = 0;
        for (let i = 0; i < Categories.length; i++) {
        result += placeDiv();
        }
    })
};
GetGitRepo();


(async()=>{let t=await (await fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/README.md")).text();README0.innerHTML=t})();
if (location.href.indexOf("vcard") > -1) {location.href = 'https://headbodyscript.nl/assets/me.vcf';};



// splash

let intro = document.querySelector('.splash-intro');
let logo = document.querySelector('.splash-logo-header');
let logoSpan = document.querySelectorAll('.splash-logo');


window.addEventListener('DOMContentLoaded', () => {
setTimeout(() => {
    logoSpan.forEach((span, idx) => {
    setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400)
    });
    setTimeout(() => {
    logoSpan.forEach((span, idx) => {
        setTimeout(() => {
        span.classList.remove('active');
        span.classList.add('fade');
        }, (idx + 1) * 50)
    })
    }, 2000);
    setTimeout(() => {
    intro.style.top = '-100vh';
    },2300)
})
})