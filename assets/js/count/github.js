const getGitSubs = document.getElementById('getGitSubs');
const getGitRepo = document.getElementById('getGitRepo');

let getInfo = () => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.github.com/users/headbodyscript", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        getGitSubs.innerHTML = result.followers;
        getGitRepo.innerHTML = result.public_repos;
    })
      .catch(error => console.log('error', error));
  
  }
  
  getInfo();
  