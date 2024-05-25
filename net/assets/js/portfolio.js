var userGitHub = "Tijl-Pleuger-Vista"

async function wait(userGitHub, response, i) {
    var repository = await fetch(`https://api.github.com/repos/${userGitHub}/${response[i].name}/commits/main`)
    var repository = await repository.json();
    var GitHub = {
        "repository":response[i].name,
        "description":response[i].description,
        "commitDate":repository.commit.author.date,
        "commitAuthor":repository.commit.author.name,
        "commitMessage":repository.commit.message,
        "avatar":repository.author.avatar_url
    };
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
    var README = await fetch(`https://raw.githubusercontent.com/${userGitHub}/${GitHub.repository}/main/README.md`);
    var README = await README.text();
    Form.innerHTML +=
    `
    <div class="card">
      <div class="card-container">
          <ul>
              <li class="card-header"><strong>${GitHub.repository}</strong></li>
              <li class="border"><i class="bi bi-caret-right-fill"></i>Description</li>
              <li class="border sub"><i class="bi bi-dot"></i>${GitHub.description}</li>
              <li class="border"><i class="bi bi-caret-right-fill"></i>ReadMe.MD</li>
              <li class="border readme scrollbar sub"><i class="bi bi-dot"></i>
              <pre>${README}</pre>
              </li>
              <li class="border"><i class="bi bi-caret-right-fill"></i>Latest Update</li>
              <li class="border"><i class="bi bi-dot"></i>Date: ${GitHub.commitDate}</li>
              <li class="border"><i class="bi bi-dot"></i>By: ${GitHub.commitAuthor}<img class="icon" src="${GitHub.avatar}" alt=""></li>
              <li class="border"><i class="bi bi-dot"></i>Note: ${GitHub.commitMessage}</li>
              <li class="border card-footer"><i class="bi bi-link"></i><a style="color: blueviolet;" class="link" href="https://github.com/${userGitHub}/${GitHub.repository}">Visit the repository</a></li>
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