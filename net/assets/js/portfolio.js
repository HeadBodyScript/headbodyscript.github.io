var gitUser = "HeadBodyScript"

async function wait(gitRepoName, gitUser, gitCategories, i) {
  var response = await fetch(`https://raw.githubusercontent.com/${gitUser}/${gitRepoName}/main/README.md`);
  var gitReadMe = await response.text();
  var response = await fetch(`https://api.github.com/repos/${gitUser}/${gitRepoName}/commits/main`)
  var gitRepoInfo = await response.json();
  var gitRepoName = gitCategories[i].name, gitRepoDesc = gitCategories[i].description, gitTime = gitRepoInfo.commit.author.date, gitName = gitRepoInfo.commit.author.name, gitSummary = gitRepoInfo.commit.message, gitIcon = gitRepoInfo.committer.avatar_url
  // console.log(gitRepoInfo)
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
let GetGitRepo = () => {
//   var gitUser = "Tijl-Pleuger-Vista"
//   fetch(`https://api.github.com/users/${gitUser}/repos`).then(gitCategories => gitCategories.json()).then(gitCategories => {
//     for (let i = 0; i < gitCategories.length; i++) {
//         var gitRepoName = gitCategories[i].name
//         wait(gitRepoName, gitUser, gitCategories, i)
//     }
//   }
// )
  // intro plash transition
  
  // let intro = document.querySelector('.splash-intro');
  // let logoSpan = document.querySelectorAll('.splash-logo');
  // window.addEventListener('DOMContentLoaded', () => {
  //   if (sessionStorage.getItem("splash") === null) {
  //     setTimeout(() => {
  //       logoSpan.forEach((span, idx) => {
  //       setTimeout(() => {
  //         span.classList.add('active');
  //       }, (idx + 1) * 400)
  //       });
  //       setTimeout(() => {
  //       logoSpan.forEach((span, idx) => {
  //           setTimeout(() => {
  //           span.classList.remove('active');
  //           span.classList.add('fade');
  //           }, (idx + 1) * 50)
  //       })
  //       }, 2000);
  //       setTimeout(() => {
  //       intro.style.top = '-100vh';
  //       },2300)
  //       sessionStorage.setItem("splash", "true");
  //     })
  //   }
  //   else {
  //     intro.style.top = '-100vh';
  //   }
  // })
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


  
  function btnMenu(id) {
      _id = id.toUpperCase()
      var fade = document.getElementById("transition");
      fade.style.zIndex = "256", fade.classList.replace("transition-true", "transition-false"), setTimeout(() => {
        document.querySelectorAll(".visible").forEach(newSection => {
          newSection.classList.remove("visible")
        }), document.getElementById(_id).classList.add("visible"), fade.classList.replace("transition-false", "transition-true")
      }, 1e3), setTimeout(() => {
        fade.style.zIndex = "-256"
      }, 1e3)
}

var response = {"t":{"primary":[{"quote":"html"},{"quote":"windows"},{"quote":"topdesk"},{"quote":"java"}],"secondary":[{"quote":""},{"quote":""},{"quote":""},{"quote":""}]},"b":{"primary":[{"quote":"css"},{"quote":"server"},{"quote":"firebase"},{"quote":"script"}],"secondary":[{"quote":""},{"quote":"2016 - 2019"},{"quote":""},{"quote":"ready for a challenge"}]}}
console.log(response)
var i = 0;

setInterval(change, 5000);
function change() {
  document.querySelectorAll('#t-primary, #t-secondary, #b-primary, #b-secondary').forEach(c => c.classList.add('fade'))

    setTimeout(function () {
      document.getElementById("t-primary").innerText = response.t.primary[i].quote
      document.getElementById("t-secondary").innerText = response.t.secondary[i].quote
      document.getElementById("b-primary").innerText = response.b.primary[i].quote
      document.getElementById("b-secondary").innerText = response.b.secondary[i].quote
      document.querySelectorAll('#t-primary, #t-secondary, #b-primary, #b-secondary').forEach(c => c.classList.remove('fade'))
        i++;
        if (i >= 4) {i = 0;}
    }, 1000);
}