async function wait(gitRepoName, gitUser, gitCategories, i) {
  var response = await fetch(`https://raw.githubusercontent.com/${gitUser}/${gitRepoName}/main/README.md`);
  var gitReadMe = await response.text();
  var response = await fetch(`https://api.github.com/repos/${gitUser}/${gitRepoName}/commits/main`)
  var gitRepoInfo = await response.json();
  var gitRepoName = gitCategories[i].name, gitRepoDesc = gitCategories[i].description, gitTime = gitRepoInfo.commit.author.date, gitName = gitRepoInfo.commit.author.name, gitSummary = gitRepoInfo.commit.message, gitIcon = gitRepoInfo.committer.avatar_url
  console.log(gitRepoInfo)
  console.log(gitReadMe)
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
let GetGitRepo = () => {
  // github info cards
  var gitUser = "Tijl-Pleuger-Vista"
  fetch(`https://api.github.com/users/${gitUser}/repos`).then(gitCategories => gitCategories.json()).then(gitCategories => {
    for (let i = 0; i < gitCategories.length; i++) {
        var gitRepoName = gitCategories[i].name
        wait(gitRepoName, gitUser, gitCategories, i)
    }
  })
  // intro plash transition
  
  let intro = document.querySelector('.splash-intro');
  // let logo = document.querySelector('.splash-logo-header');
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
        // local
        sessionStorage.setItem("splash", "true");
      })
    }
    else {
      intro.style.top = '-100vh';
    }
  })
};
GetGitRepo();

// let GetGitRepo = () => {
//   var gitUser = "Tijl-Pleuger-Vista"
//   fetch(`https://api.github.com/users/${gitUser}/repos`).then(gitCategories => gitCategories.json()).then(gitCategories => {
//     for (let i = 0; i < gitCategories.length; i++) { fetchMovies(i); }
//       async function fetchMovies(i) {
//         var gitRepoName = gitCategories[i].name
//         var ReadMe;
//           var _ReadMe = await fetch(`https://raw.githubusercontent.com/${gitUser}/${gitRepoName}/main/README.md`).then(data => data.text()).then(data => {ReadMe = data;});
//           fetch(`https://api.github.com/repos/${gitUser}/${gitRepoName}/commits/main`).then(gitRepoInfo => gitRepoInfo.json()).then(gitRepoInfo => {
//         var gitRepoName = gitCategories[i].name, gitRepoDesc = gitCategories[i].description, gitTime = gitRepoInfo.commit.author.date, gitName = gitRepoInfo.commit.author.name, gitSummary = gitRepoInfo.commit.message, gitIcon = gitRepoInfo.committer.avatar_url
//         Form.innerHTML +=
//           `
//           <div class="card">
//             <div class="card-container">
//                 <ul>
//                     <li class="card-header"><strong>${gitRepoName}</strong></li>
//                     <li class="border"><i class="bi bi-caret-right-fill"></i>Description</li>
//                     <li class="border sub"><i class="bi bi-dot"></i>${gitRepoDesc}</li>
//                     <li class="border"><i class="bi bi-caret-right-fill"></i>ReadMe.MD</li>
//                     <li class="border readme scrollbar sub"><i class="bi bi-dot"></i>${_ReadMe}</li>
//                     <li class="border"><i class="bi bi-caret-right-fill"></i>Latest Update</li>
//                     <li class="border"><i class="bi bi-dot"></i>Date: ${gitTime}</li>
//                     <li class="border"><i class="bi bi-dot"></i>By: ${gitName}<img class="icon" src="${gitIcon}" alt=""></li>
//                     <li class="border"><i class="bi bi-dot"></i>Note: ${gitSummary}</li>
//                     <li class="border card-footer"><i class="bi bi-link"></i><a style="color: blueviolet;" class="link" href="https://github.com/${gitUser}/${gitRepoName}">Visit the repository</a></li>
//                 </ul>
//             </div>
//           </div>
//           `
//       })
//     }
//   })
// };
// GetGitRepo();


// stuff


  
  function btnMenu(_id) {
      new_id = "section" + _id
      var fade = document.getElementById("transition");
      fade.style.zIndex = "256", fade.classList.replace("splash-transition-true", "splash-transition-false"), setTimeout(() => {
        document.querySelectorAll(".visible").forEach(newSection => {
          newSection.classList.remove("visible")
        }), document.getElementById(new_id).classList.add("visible"), fade.classList.replace("splash-transition-false", "splash-transition-true")
      }, 1e3), setTimeout(() => {
        fade.style.zIndex = "-256"
      }, 1e3)
  }

var text0 = ["HTML", "Windows", "TopDesk", "Java"];
var text1 = ["CSS", "Server", "Firebase", "Script"];
var text2 = ["", "2016 - 2019", "", "Ready For A Challenge"];
var counter = 0;
var txt0 = document.getElementById("txt0");
var txt1 = document.getElementById("txt1");
var txt2 = document.getElementById("txt2");

setInterval(change, 5000);

function change() {
  txt0.classList.add("hide");
  txt1.classList.add("hide");
  txt2.classList.add("hide");
    setTimeout(function () {
      txt0.innerHTML = text0[counter];
      txt1.innerHTML = text1[counter];
      txt2.innerHTML = text2[counter];
      txt0.classList.remove("hide");
      txt1.classList.remove("hide");
      txt2.classList.remove("hide");
        counter++;
        if (counter >= text0.length) {
            counter = 0;
        }
    }, 1000);
}