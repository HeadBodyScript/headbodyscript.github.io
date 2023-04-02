const catFact = document.getElementById('catFact');

let getCat = () => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://meowfacts.herokuapp.com/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      catFact.innerHTML = result.data;
  })
    .catch(error => console.log('error', error));

}

getCat();