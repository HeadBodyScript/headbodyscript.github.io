const catFact = document.getElementById('catFact');

// catFacts
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

// IP button
let btnSend = document.querySelector('button');
let message = document.querySelector('h1');
function copyText() {
                          
    navigator.clipboard.writeText
        ("headbodyscript.ddns.net:25582");
}
btnSend.addEventListener('click', () =>{
    btnSend.innerText = 'Copied';
    setTimeout(()=>{
        btnSend.innerText = 'Copy again?'
    },3000);
});


