var userGitHub = "Tijl-Pleuger-Vista"

async function wait(userGitHub, response, i) {
  var box = []
    var repository = await fetch(`https://api.github.com/repos/${userGitHub}/${response[i].name}/commits/main`)
    var repository = await repository.json();
    var repositoryIgnore = await fetch(`https://raw.githubusercontent.com/${userGitHub}/${response[i].name}/main/ignore.json`)
    if (repositoryIgnore.ok == true){
      var repositoryIgnore = await repositoryIgnore.json();
      Array.prototype.push.apply(box, [repositoryIgnore]);
    }
    var repositoryContributors = await fetch(`https://api.github.com/repos/${userGitHub}/${response[i].name}/contributors`)
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
    console.log(GitHub)

    localStorage.setItem(i, JSON.stringify(GitHub));
    createCard(userGitHub, i)
}

function newGitHubRequest(){
  localStorage.setItem("check" , new Date().getDay())
  fetch(`https://api.github.com/users/${userGitHub}/repos`)
  .then(response => response.json())
  .then(response => {
      localStorage.setItem("GitHub", response.length);
      for (let i = 0; i < response.length; i++) {
          wait(userGitHub, response, i)
  }})
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("GitHub") === null) {
      newGitHubRequest()
    } else {
        let check = (localStorage.getItem("check"));
        let GitHub = (localStorage.getItem("GitHub"));
        if (check === new Date().getDay()){
          for (let i = 0; i < GitHub; i++) {
            createCard(userGitHub, i)
          }
        } else {
          for (let i = 0; i < GitHub; i++) {
            localStorage.removeItem(i);
          }
          localStorage.removeItem("GitHub");
          localStorage.removeItem("check");
          newGitHubRequest()
        }
}})

async function createCard(userGitHub, i){
    let GitHub = JSON.parse(localStorage.getItem(i));
    var README = await fetch(`https://raw.githubusercontent.com/${userGitHub}/${GitHub[0].repository}/main/README.md`);
    var README = await README.text();
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

function sectionSelect(id) {
  id = id.toUpperCase()
  if (id === "PORTFOLIO"){
    loadGitHub()
  }
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

// var mew = [
//   {"test":"1"},
//   {"mew":"2"},
//   {"bla":"3"},
//   {"qwerty":"4"}
// ]
// console.log(mew)

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

// async function meow(){
//   var box = [{"test":"mew"}]
//   var msc = {}
//   var repositoryIgnore = await fetch(`https://raw.githubusercontent.com/Tijl-Pleuger-Vista/Challenge-5/main/ignore.json`)
//   if (repositoryIgnore.ok == true){
//     var repositoryIgnore = await repositoryIgnore.json();
//     Array.prototype.push.apply(msc, [repositoryIgnore]);

//     Array.prototype.push.apply(box, msc);
//     console.log(box)
//   }
// }

// meow()

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var images = document.getElementsByClassName("git-img");

//   if (n > images.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = images.length}

//   for (i = 0; i < images.length; i++) {
//     x[i].style.display = "none";  
//   }

//   images[slideIndex-1].style.display = "block";  
// }

// var imgs = document.getElementById("4")
// console.log(imgs)
// imgs.innerHTML[1].style.display = "none"; 

// let elements = document.querySelectorAll('button.git-button > img:last-child').innerHTML.style.display = "none";
// console.log(elements  )

function loadGitHub(){
  let GitHub = (localStorage.getItem("GitHub"));
    for (i = 0; i < GitHub; i++) {
      var x = document.getElementById(i).querySelectorAll(".git-img");
      x[0].style.display = "block"
    } 
}

function nextGitHub(id) {
  var _gitimg = document.getElementById(id).querySelectorAll(".git-img");
  if(_gitimg.length > 1){
    if(_gitimg.length === 2){
      var _container = document.getElementById(id)
      var _data = document.getElementById(id).getAttribute("data")
      _gitimg[_data].style.display = "none"
      _data++
      if (_data === 2){var _data = 0}
      _gitimg[_data].style.display = "block"
      _container.setAttribute("data", _data)
    }
  else{
      var _container = document.getElementById(id)
      var _data = document.getElementById(id).getAttribute("data")
      var gitLength = _gitimg.length - 1
      _gitimg[_data].style.display = "none"
      _data++
      if (_data === gitLength){
        _gitimg[_data].style.display = "none"
        var _data = 0
        _container.setAttribute("data", _data)
      }
      _gitimg[_data].style.display = "block"
      _container.setAttribute("data", _data)
    
    }
  }
}