
const serverStatus = document.getElementById('serverStatus');
const serverMax = document.getElementById('serverMax');
const serverOnline = document.getElementById('serverOnline');
const serverVersion = document.getElementById('serverVersion');

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
            serverMax.innerHTML = result.players.max;
            serverOnline.innerHTML = result.players.online;
            serverVersion.innerHTML = result.version.name;
        })
        .catch(error => console.log('error', error));

}

getServer   ();