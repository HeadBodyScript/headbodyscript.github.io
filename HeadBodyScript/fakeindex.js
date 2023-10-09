let apiGitHub = () => {
  var GitRepoList;

  fetch("https://api.github.com/users/HeadBodyScript/repos", {})
    .then(GitRepoList => GitRepoList.json())
    .then(GitRepoList => {
      console.log
      (GitRepoList)

      /* What it is */
      List.innerHTML = GitRepoList

      /* Result */
      List0.innerHTML = GitRepoList[0].html_url
      List1.innerHTML = GitRepoList[1].html_url
      List2.innerHTML = GitRepoList[2].html_url
      List3.innerHTML = GitRepoList[3].html_url
      List4.innerHTML = GitRepoList[4].html_url
      List5.innerHTML = GitRepoList[5].html_url
    })
};

apiGitHub();
