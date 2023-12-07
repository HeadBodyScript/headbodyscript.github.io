
var readMe
var gitUser = "Tijl-Pleuger-Vista";
let GetGitRepo = () => {

fetch(`https://api.github.com/users/${gitUser}/repos`)
.then(Response => Response.json())
.then(Response => {

  let R_length = Response.length;

  for (let i = 0; i < R_length; i++) {

    var gitRepoName = Response[i].name
    
    // console.log(text)
      fetch(`https://raw.githubusercontent.com/${gitUser}/${gitRepoName}/main/README.md`)
      .then(readMe => readMe.text())

      fetch(`https://api.github.com/repos/${gitUser}/${gitRepoName}/commits/main`)
              .then(subCategories => subCategories.json())
              .then(subCategories => {

              var gitTime = subCategories.commit.author.date
              var gitName = subCategories.commit.author.name
              var gitSummary = subCategories.commit.message
              var gitIcon = subCategories.committer.avatar_url
              Form.innerHTML +=
              `
              <div class="card">
                  <div class="card-container">
                      <ul>
                          <li class="card-header"><strong>${gitRepoName}</strong></li>
                          <li class="border"><i class="bi bi-caret-right-fill"></i>Description</li>
                          <li class="border sub"><i class="bi bi-dot"></i>${readMe}</li>
                          <li class="border"><i class="bi bi-caret-right-fill"></i>ReadMe.MD</li>
                          <li class="border readme scrollbar sub"><i class="bi bi-dot"></i>${readMe}</li>
                          <li class="border"><i class="bi bi-caret-right-fill"></i>Latest Update</li>
                          <li class="border"><i class="bi bi-dot"></i>Date: ${gitTime}</li>
                          <li class="border"><i class="bi bi-dot"></i>By: ${gitName}<img class="icon" src="${gitIcon}" alt=""></li>
                          <li class="border"><i class="bi bi-dot"></i>Note: ${gitSummary}</li>
                          <li class="border card-footer"><i class="bi bi-link"></i><a style="color: blueviolet;" class="link" href="https://github.com/${gitUser}/${gitRepoName}">Visit the repository</a></li>
                      </ul>
                  </div>
              </div>
              `
              })
            }
        })
};
GetGitRepo();



















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