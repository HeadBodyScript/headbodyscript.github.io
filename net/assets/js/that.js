function that(){
    document.getElementById("userFormVisible").style.display = "none"

    var userGitHub = JSON.parse(localStorage.getItem("user"))
    var userGitHub = userGitHub.displayName
    fetch(`https://api.github.com/users/${userGitHub}/repos`)
      .then(response => response.json())
      .then(response => {
          for (let i = 0; i < response.length; i++) {
              wait(userGitHub, response, i)
      }})

}


async function wait(userGitHub, response, i) {
      var GitHub = await fetch(`https://api.github.com/repos/${userGitHub}/${response[i].name}/commits/main`)
      var GitHub = await GitHub.json();
      var repositoryContributors = await fetch(`https://api.github.com/repos/${userGitHub}/${response[i].name}/contributors`)
      var repositoryContributors = await repositoryContributors.json();
      var README = await fetch(`https://raw.githubusercontent.com/${userGitHub}/${response[i].name}/main/README.md`);
      var README = await README.text();
        console.log(response)
        console.log(GitHub)
        console.log(repositoryContributors)
        console.log(README)


      var newDiv = 
    `
    <div class="card">
    <div class="card-menu space-between row">
      <div class="row">
        <p class="card-pre para">${response[i].name}</p>
        <p class="card-pre para"> / Last update ${GitHub.commit.committer.date.replace("T"," ").replace("Z","")}</p>
      </div>
      <button type="button" class="visit row" id="box0"><i class="bi bi-hdd-stack"></i>
        <p><a class="color" href="https://github.com/${userGitHub}/${response[i].name}" target="_blank">visit</a></p>
      </button>
    </div>
    <div class="card-container">
      <ul>
        <li class="card-header row">
          <div class="row">
          <img class="icon" src="${GitHub.committer.avatar_url}" alt="icon">
          <p>${GitHub.committer.login}</p>
          <p>${GitHub.commit.message}</p>
          </div>
        </li>
        <li class="border row"><i class="bi bi-chevron-right"></i>
          <p class="git-content"><a class="color" href="https://github.com/${userGitHub}/${response[i].name}" target="_blank">UID: ${response[i].name}</a></p>
        </li>
        <li class="border row"><i class="bi bi-chevron-right"></i>
          <p class="git-content">Info: ${response[i].description}</p>
        </li>
        <li class="border row"><i class="bi bi-chevron-right"></i>
          <p class="git-content">Owner: ${userGitHub}</p>
        </li>
        <li class="border row"><i class="bi bi-chevron-right"></i>
        <p class="git-content">Contributors:</p>
      </li>
        `
//         for (let i = 2; i < GitHub.length; i++) {
// var newDiv = newDiv += 
//           `
//           <li>
//             <a class="color row" href="${GitHub[i].url}" target="_blank"><img class="git-icon" src="${GitHub[i].ico}" alt="icon"><p class="git-text">${GitHub[i].user}</p><p class="git-contributions">${GitHub[i].contributions}</p></a>
//           </li>
//           `
//       }
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
  </div>
    `
    userForm.innerHTML += newDiv
}