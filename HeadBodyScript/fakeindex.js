
let apiGitHub = () => {
  var GitRepoList;

  fetch("https://api.github.com/users/HeadBodyScript/repos", {})
    .then(GitRepoList => GitRepoList.json())
    .then(GitRepoList => {
      console.log
      (GitRepoList)
      document.body.innerHTML = categories.reduce((prev, cat) => prev + `<h2>${cat.allow_forking}</h2> <h2>${cat.allow_forking}</h2>`, '');

      

      /* What it is */
      List.innerHTML = GitRepoList
      List0.innerHTML = GitRepoList[0].html_url
      List1.innerHTML = GitRepoList[1].html_url
      List2.innerHTML = GitRepoList[2].html_url
      List3.innerHTML = GitRepoList[3].html_url
      List4.innerHTML = GitRepoList[4].html_url
      List5.innerHTML = GitRepoList[5].html_url
    })
};

apiGitHub();



// const categories = [{id: 1, Image: "https://i.ibb.co/CnkbTqm/download-ixid-Mnwx.jpg", Title: "Lorem", }, {id: 2, Image: "https://i.ibb.co/CnkbTqm/download-ixid.jpg", Title: "Ipsum", }, {id: 3, Image: "https://i.ibb.co/CnkbTqm/download.png", Title: "lorem", }, ];
// document.body.innerHTML = categories.reduce((prev, cat) => prev + `<h2>${cat.Title}</h2> <img src='${cat.Image}' />`, '');
