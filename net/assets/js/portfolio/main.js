function sectionSelect(id) {
  document.querySelectorAll(".active").forEach(d => {
    d.classList.remove("active")
  })
  document.getElementById(id).classList.add("active")
  menu()
  id = id.toUpperCase()
  if (id === "REPOSITORY"){
    loadGitHub()
  }
  var fade = document.getElementById("transition");
  fade.style.zIndex = "256", fade.classList.replace("transition-true", "transition-false"), setTimeout(() => {
    document.querySelectorAll(".visible").forEach(newSection => {
      newSection.classList.remove("visible")
    }), document.getElementById(id).classList.add("visible"), fade.classList.replace("transition-false", "transition-true")
  }, 1e3), setTimeout(() => {
    fade.style.zIndex = "-256"
  }, 1e3)
}

(async()=>{let response=await(await fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/net/assets/json/quotes.json")).json();
var i = 0, quoteList = document.querySelectorAll('#t-primary, #t-secondary, #b-primary, #b-secondary');
setInterval(change,5000);
function change(){
  quoteList.forEach(c=>c.classList.add('fade'))
    setTimeout(function(){
      quoteList[0].innerText = response.t.primary[i].quote
      quoteList[1].innerText = response.t.secondary[i].quote
      quoteList[2].innerText = response.b.primary[i].quote
      quoteList[3].innerText = response.b.secondary[i].quote
      quoteList.forEach(c => c.classList.remove('fade'))
        i++;
        if (i >= 4) {i = 0;}
    },1000);
}})();

function loadGitHub(){
  if (sessionStorage.getItem("init") == undefined){
    let GitHub = (localStorage.getItem("GitHub"));
    for (i = 0; i < GitHub; i++) {
      var x = document.getElementById(i).querySelectorAll(".git-img");
      x[0].style.display = "block"
    } 
    sessionStorage.setItem("init", "true");
  }
}

function nextGitHub(id) {
  var _gitimg = document.getElementById(id).querySelectorAll(".git-img");
  if(_gitimg.length > 1){
    if(_gitimg.length === 2){
      var _container = document.getElementById(id)
      var _data = document.getElementById(id).getAttribute("data")
      _gitimg[_data].style.display = "none"
      _data++
      if (_data === 2){var _data = 0}
      _gitimg[_data].style.display = "block"
      _container.setAttribute("data", _data)
    }
  else{
      var _container = document.getElementById(id)
      var _data = document.getElementById(id).getAttribute("data")
      var gitLength = _gitimg.length - 1
      _gitimg[_data].style.display = "none"
      _data++
      if (_data === gitLength){
        _gitimg[_data].style.display = "none"
        var _data = 0
        _container.setAttribute("data", _data)
      }
      _gitimg[_data].style.display = "block"
      _container.setAttribute("data", _data)
    
    }
  }
}

sessionStorage.removeItem ("m")
function menu(){
  var root = document.querySelector(':root');
  var m = sessionStorage.getItem("m");
  switch (m) {
    case null:
      sessionStorage.setItem("m", true)
      root.style.setProperty('--menu', "calc(0px + 0dvh)");
      break;
    case "true":
      sessionStorage.removeItem ("m")
      root.style.setProperty('--menu', "calc(-100dvh + 50px)");
      break;
    default:
      break;
  }
}
