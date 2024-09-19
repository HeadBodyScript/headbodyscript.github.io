import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6i1H967AaI7mmIh8DvAR_GRI3U6O3qdA",
  authDomain: "headbodyscript.firebaseapp.com",
  projectId: "headbodyscript",
  storageBucket: "headbodyscript.appspot.com",
  messagingSenderId: "561751453459",
  appId: "1:561751453459:web:8daaf437c21f3841cff4e6"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// firebase.initializeApp(config);
// var db = firebase.firestore();
// const db = getDatabase();
const dbref = ref(db);


// auth
async function wait(userGitHub, response, i, git) {
  var box = []
    var repository = await fetch(`https://api.github.com/repos/${userGitHub}/${response[i].name}/commits/main`,{
      method: "GET",
      headers: {
        Authorization: `${git}` 
      }
    })
    var repository = await repository.json();
    var repositoryIgnore = await fetch(`https://raw.githubusercontent.com/${userGitHub}/${response[i].name}/main/ignore.json`)
    if (repositoryIgnore.ok == true){
      var repositoryIgnore = await repositoryIgnore.json();
      Array.prototype.push.apply(box, [repositoryIgnore]);
    }
    var repositoryContributors = await fetch(`https://api.github.com/repos/${userGitHub}/${response[i].name}/contributors`,{
      method: "GET",
      headers: {
        Authorization: `${git}` 
      }
    })
    var repositoryContributors = await repositoryContributors.json();

    for (let i = 0; i < repositoryContributors.length; i++) {
      var addToBox = [{
        "user":repositoryContributors[i].login,
        "url":repositoryContributors[i].html_url,
        "ico":repositoryContributors[i].avatar_url,
        "contributions":repositoryContributors[i].contributions
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
    localStorage.setItem(i, JSON.stringify(GitHub));
    createCard(userGitHub, i)
}

function newGitHubRequest(git, userGitHub){
  localStorage.setItem("check" , new Date().getDay())
  fetch(`https://api.github.com/users/${userGitHub}/repos`,{
    method: "GET",
    headers: {
      Authorization: `${git}` 
    }
  })
  .then(response => response.json())
  .then(response => {
      localStorage.setItem("GitHub", response.length);
      for (let i = 0; i < response.length; i++) {
          wait(userGitHub, response, i, git)
  }})
}

window.addEventListener('DOMContentLoaded', () => {
  var userGitHub = "Tijl-Pleuger-Vista"
  get(child(dbref, 'api')).then((snapshot)=>{
    if(snapshot.exists){
        var git = snapshot._node.value_
    }
    sessionStorage.clear("init")
    if (localStorage.getItem("GitHub") === null) {
      newGitHubRequest(git, userGitHub)
    } else {
        let GitHub = (localStorage.getItem("GitHub"));
        if (localStorage.getItem("check") == new Date().getDay()){
          for (let i = 0; i < GitHub; i++) {
            createCard(userGitHub, i)
          }
        } else {
          for (let i = 0; i < GitHub; i++) {
            localStorage.removeItem(i);
          }
          localStorage.removeItem("GitHub");
          localStorage.removeItem("check");
          newGitHubRequest(git, userGitHub)
        }
}
  })
})

async function createCard(userGitHub, i){
  try {
    var README = await fetch(`https://raw.githubusercontent.com/${userGitHub}/${GitHub[0].repository}/main/README.md`);
    var README = await README.text();
  } catch (error) {
    var README = "No README.md found"
  }
    let GitHub = JSON.parse(localStorage.getItem(i));

var newDiv = 
    `
    <div class="card">
    <div class="card-menu space-between row">
      <div class="row">
        <p class="card-pre para">${GitHub[0].repository}</p>
        <p class="card-pre para"> / Last update ${GitHub[0].commitDate.replace("T"," ").replace("Z","")}</p>
      </div>
      <button type="button" class="visit row" id="box0"><i class="bi bi-hdd-stack"></i>
        <p><a class="color" href="https://github.com/${userGitHub}/${GitHub[0].repository}" target="_blank">visit</a></p>
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
          <p class="git-content"><a class="color" href="https://github.com/${userGitHub}/${GitHub[0].repository}" target="_blank">UID: ${GitHub[0].repository}</a></p>
        </li>
        <li class="border row"><i class="bi bi-chevron-right"></i>
          <p class="git-content">Info: ${GitHub[0].description}</p>
        </li>
        <li class="border row"><i class="bi bi-chevron-right"></i>
          <p class="git-content">Owner: ${userGitHub}</p>
        </li>
        <li class="border row"><i class="bi bi-chevron-right"></i>
        <p class="git-content">Contributors:</p>
      </li>
        `
        for (let i = 2; i < GitHub.length; i++) {
var newDiv = newDiv += 
          `
          <li>
            <a class="color row" href="${GitHub[i].url}" target="_blank"><img class="git-icon" src="${GitHub[i].ico}" alt="icon"><p class="git-text">${GitHub[i].user}</p><p class="git-contributions">${GitHub[i].contributions}</p></a>
          </li>
          `
      }
var newDiv = newDiv +=
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
        <li class="card-header-small"><p><i class="bi bi-cursor"></i>Click To Skip Image</p></li>
        <li class="border">
          <button id="${i}" data="0" type="button" class="git-button" onclick="nextGitHub(this.id)">
          `
          for (let i = 0; i < GitHub[1].length; i++) {
var newDiv = newDiv +=
            `
            <img class="git-img" src="${GitHub[1][i].scr}" alt="git-img">
            `
          }
var newDiv = newDiv +=
            `
          </button>
        </li>
    </ul>
    </div>
  </div>
    `
    Form.innerHTML += newDiv
}