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