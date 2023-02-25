const serverStatus = document.getElementById('serverStatus');
const serverMax = document.getElementById('serverMax');
const serverTotal = document.getElementById('serverTotal');

let getServer = () => {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://eu.mc-api.net/v3/server/ping/headbodyscript.ddns.net:25582", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            serverStatus.innerHTML = result.online;
        })
        .catch(error => console.log('error', error));

}

getServer   ();