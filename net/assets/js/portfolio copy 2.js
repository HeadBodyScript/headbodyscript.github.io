var userGitHub = "Tijl-Pleuger-Vista"

async function wait(userGitHub, response, i) {
    var repository = await fetch(`https://api.github.com/repos/${userGitHub}/${response[i].name}/commits/main`)
    var repository = await repository.json();
    var repositoryContributors = await fetch(`https://api.github.com/repos/${userGitHub}/${response[i].name}/contributors`)
    var repositoryContributors = await repositoryContributors.json();
    var box = []

    for (let i = 0; i < repositoryContributors.length; i++) {
      var addToBox = [{
        "user":repositoryContributors[i].login,
        "url":repositoryContributors[i].url,
        "ico":repositoryContributors[i].avatar_url
      }]
    Array.prototype.push.apply(box, addToBox);
  }
    var GitHub = [{
        "repository":response[i].name,
        "description":response[i].description,
        "commitDate":repository.commit.author.date,
        "commitAuthor":repository.commit.author.name,
        "commitMessage":repository.commit.message,
        "avatar":repository.author.avatar_url
    }]
    Array.prototype.push.apply(GitHub, box);
    console.log(GitHub)

    localStorage.setItem(i, JSON.stringify(GitHub));
    createCard(userGitHub, i)
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("GitHub") === null) {
        fetch(`https://api.github.com/users/${userGitHub}/repos`)
        .then(response => response.json())
        .then(response => {
            localStorage.setItem("GitHub", response.length);
            for (let i = 0; i < response.length; i++) {
                wait(userGitHub, response, i)
        }})
    } else {
        let GitHub = (localStorage.getItem("GitHub"));
        for (let i = 0; i < GitHub; i++) {
            createCard(userGitHub, i)
}}})

async function createCard(userGitHub, i){
    let GitHub = JSON.parse(localStorage.getItem(i));
    var README = await fetch(`https://raw.githubusercontent.com/${userGitHub}/${GitHub[0].repository}/main/README.md`);
    var README = await README.text();
    Form.innerHTML +=
    `
    <div class="card">
    <div class="card-menu space-between row">
      <div class="row">
        <p class="card-pre para">${GitHub[0].repository}</p>
        <p class="card-pre para"> / Last update ${GitHub[0].commitDate}</p>
      </div>
      <button type="button" class="visit row" id="box0"><i class="bi bi-hdd-stack"></i>
        <p><a class="color" href="https://github.com/${userGitHub}/${GitHub[0].repository}">visit</a></p>
      </button>
    </div>
    <div class="card-container">
      <ul>
        <li class="card-header row">
          <div class="row">
          <img class="icon" src="${GitHub[0].avatar}" alt="icon">
          <p>${GitHub[0].commitAuthor}</p>
          <p>${GitHub[0].commitMessage}</p>
          </div>
        </li>
        <li class="border row"><i class="bi bi-chevron-right"></i>
          <p class="git-content"><a class="color" href="https://github.com/${userGitHub}/${GitHub[0].repository}">${GitHub[0].repository}</a></p>
        </li>
        <li class="border row"><i class="bi bi-chevron-right"></i>
          <p class="git-content">${GitHub[0].description}</p>
        </li>
        <li class="border row"><i class="bi bi-chevron-right"></i>
          <p class="git-content">${userGitHub}</p>
        </li>
        `
        for (let i = 2; i < GitHub.length; i++) {
          Form.innerHTML +=
          `
          <li class="border row"><i class="bi bi-chevron-right"></i>
            <a href="${GitHub[i].url}"><img class="icon" src="${GitHub[i].ico}" alt="icon">${GitHub[i].user}</a>
          </li>
          `
      }
        Form.innerHTML +=
        `
      </ul>
    </div>
    <div class="card-container card-spacer">
      <ul>
        <li class="card-header-small row">
          <i class="bi bi-bookmark"></i>
          <p>README</p>
        </li>
        <li class="border readme scrollbar">
        <pre class="inner-readme">${README}</pre>
        </li>
      </ul>
    </div>
    <div class="card-container card-spacer">
      <ul>
        <li class="card-header-small center"><p>img</p></li>
        <li class="border"></li>
      </ul>
    </div>
  </div>
    `
}

function sectionSelect(id) {
  id = id.toUpperCase()
  var fade = document.getElementById("transition");
  fade.style.zIndex = "256", fade.classList.replace("transition-true", "transition-false"), setTimeout(() => {
    document.querySelectorAll(".visible").forEach(newSection => {
      newSection.classList.remove("visible")
    }), document.getElementById(id).classList.add("visible"), fade.classList.replace("transition-false", "transition-true")
  }, 1e3), setTimeout(() => {
    fade.style.zIndex = "-256"
  }, 1e3)
}

(async()=>{let response=await(await fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/net/assets/json/quotes.json")).json();
var i = 0, quoteList = document.querySelectorAll('#t-primary, #t-secondary, #b-primary, #b-secondary');
setInterval(change,5000);
function change(){
  quoteList.forEach(c=>c.classList.add('fade'))
    setTimeout(function(){
      quoteList[0].innerText = response.t.primary[i].quote
      quoteList[1].innerText = response.t.secondary[i].quote
      quoteList[2].innerText = response.b.primary[i].quote
      quoteList[3].innerText = response.b.secondary[i].quote
      quoteList.forEach(c => c.classList.remove('fade'))
        i++;
        if (i >= 4) {i = 0;}
    },1000);
}})();

let audio = document.getElementById("myAudio");
play.addEventListener('click', playAudio)
pause.addEventListener('click', pauseAudio)
function playAudio() {audio.play();}
function pauseAudio() {audio.pause();}

var mew = [
  {
    "login": "HeadBodyScript",
    "id": 106414989,
    "node_id": "U_kgDOBlfDjQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/106414989?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/HeadBodyScript",
    "html_url": "https://github.com/HeadBodyScript",
    "followers_url": "https://api.github.com/users/HeadBodyScript/followers",
    "following_url": "https://api.github.com/users/HeadBodyScript/following{/other_user}",
    "gists_url": "https://api.github.com/users/HeadBodyScript/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/HeadBodyScript/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/HeadBodyScript/subscriptions",
    "organizations_url": "https://api.github.com/users/HeadBodyScript/orgs",
    "repos_url": "https://api.github.com/users/HeadBodyScript/repos",
    "events_url": "https://api.github.com/users/HeadBodyScript/events{/privacy}",
    "received_events_url": "https://api.github.com/users/HeadBodyScript/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 74
  },
  {
    "login": "jeerast",
    "id": 60871887,
    "node_id": "MDQ6VXNlcjYwODcxODg3",
    "avatar_url": "https://avatars.githubusercontent.com/u/60871887?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jeerast",
    "html_url": "https://github.com/jeerast",
    "followers_url": "https://api.github.com/users/jeerast/followers",
    "following_url": "https://api.github.com/users/jeerast/following{/other_user}",
    "gists_url": "https://api.github.com/users/jeerast/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jeerast/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jeerast/subscriptions",
    "organizations_url": "https://api.github.com/users/jeerast/orgs",
    "repos_url": "https://api.github.com/users/jeerast/repos",
    "events_url": "https://api.github.com/users/jeerast/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jeerast/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 24
  },
  {
    "login": "DaniaAlfa",
    "id": 113337724,
    "node_id": "U_kgDOBsFlfA",
    "avatar_url": "https://avatars.githubusercontent.com/u/113337724?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/DaniaAlfa",
    "html_url": "https://github.com/DaniaAlfa",
    "followers_url": "https://api.github.com/users/DaniaAlfa/followers",
    "following_url": "https://api.github.com/users/DaniaAlfa/following{/other_user}",
    "gists_url": "https://api.github.com/users/DaniaAlfa/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/DaniaAlfa/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/DaniaAlfa/subscriptions",
    "organizations_url": "https://api.github.com/users/DaniaAlfa/orgs",
    "repos_url": "https://api.github.com/users/DaniaAlfa/repos",
    "events_url": "https://api.github.com/users/DaniaAlfa/events{/privacy}",
    "received_events_url": "https://api.github.com/users/DaniaAlfa/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 8
  },
  {
    "login": "IEatYourCode",
    "id": 151540061,
    "node_id": "U_kgDOCQhRXQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/151540061?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/IEatYourCode",
    "html_url": "https://github.com/IEatYourCode",
    "followers_url": "https://api.github.com/users/IEatYourCode/followers",
    "following_url": "https://api.github.com/users/IEatYourCode/following{/other_user}",
    "gists_url": "https://api.github.com/users/IEatYourCode/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/IEatYourCode/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/IEatYourCode/subscriptions",
    "organizations_url": "https://api.github.com/users/IEatYourCode/orgs",
    "repos_url": "https://api.github.com/users/IEatYourCode/repos",
    "events_url": "https://api.github.com/users/IEatYourCode/events{/privacy}",
    "received_events_url": "https://api.github.com/users/IEatYourCode/received_events",
    "type": "User",
    "site_admin": false,
    "contributions": 6
  }
]


// function mewmew(mew){
// var mewl = mew.length
// var allmew = []
// var arrr = []
// for (let i = 0; i < mewl; i++) {
//       var allmew = [{
//         "user":mew[i].login,
//         "url":mew[i].url,
//         "ico":mew[i].login
//       }]

//       console.log(allmew)

//       // var test = {test, allmew}
//       Array.prototype.push.apply(arrr, allmew);
//       console.log(arrr)

// }

//   // mew.forEach(mew =>
//   //   {
//   //     var allmew =+ mew.login
//   //     console.log(allmew)
//   //   }
//   // )
// }
// mewmew(mew)