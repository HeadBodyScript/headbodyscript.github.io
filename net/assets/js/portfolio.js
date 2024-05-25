var gitUser = "HeadBodyScript", gitFetch = false;

async function wait(gitRepoName, gitUser, gitCategories, i) {
  var response = await fetch(`https://raw.githubusercontent.com/${gitUser}/${gitRepoName}/main/README.md`);
  var gitReadMe = await response.text();
  var response = await fetch(`https://api.github.com/repos/${gitUser}/${gitRepoName}/commits/main`)
  var gitRepoInfo = await response.json();
  var gitRepoName = gitCategories[i].name, gitRepoDesc = gitCategories[i].description, gitTime = gitRepoInfo.commit.author.date, gitName = gitRepoInfo.commit.author.name, gitSummary = gitRepoInfo.commit.message, gitIcon = gitRepoInfo.committer.avatar_url
  console.log(gitRepoInfo)
  // console.log(gitReadMe)
  Form.innerHTML +=
  `
  <div class="card">
    <div class="card-container">
        <ul>
            <li class="card-header"><strong>${gitRepoName}</strong></li>
            <li class="border"><i class="bi bi-caret-right-fill"></i>Description</li>
            <li class="border sub"><i class="bi bi-dot"></i>${gitRepoDesc}</li>
            <li class="border"><i class="bi bi-caret-right-fill"></i>ReadMe.MD</li>
            <li class="border readme scrollbar sub"><i class="bi bi-dot"></i>
            <pre>${gitReadMe}</pre>
            </li>
            <li class="border"><i class="bi bi-caret-right-fill"></i>Latest Update</li>
            <li class="border"><i class="bi bi-dot"></i>Date: ${gitTime}</li>
            <li class="border"><i class="bi bi-dot"></i>By: ${gitName}<img class="icon" src="${gitIcon}" alt=""></li>
            <li class="border"><i class="bi bi-dot"></i>Note: ${gitSummary}</li>
            <li class="border card-footer"><i class="bi bi-link"></i><a style="color: blueviolet;" class="link" href="https://github.com/${gitUser}/${gitRepoName}">Visit the repository</a></li>
        </ul>
    </div>
  </div>
  `
}
let getGitRepo = () => {
  var gitUser = "Tijl-Pleuger-Vista"
  fetch(`https://api.github.com/users/${gitUser}/repos`).then(gitCategories => gitCategories.json()).then(gitCategories => {
    for (let i = 0; i < gitCategories.length; i++) {
        var gitRepoName = gitCategories[i].name
        wait(gitRepoName, gitUser, gitCategories, i)
    }
  }
)
  // intro splash transition
  
  let intro = document.querySelector('.splash-intro');
  let logoSpan = document.querySelectorAll('.splash-logo');
  window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem("splash") === null) {
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
        sessionStorage.setItem("splash", "true");
      })
    }
    else {
      intro.style.top = '-100vh';
    }
  })
};

let jsonGitRepo = () => {
  (async()=>{let response=await(await fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/net/assets/json/repo.json")).json();
  console.log(response)
setInterval(change,500);
function change(){
    setTimeout(function(){
      
    },500);
}})();}

if(gitFetch === true){
  getGitRepo();
}else{
  jsonGitRepo();
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
