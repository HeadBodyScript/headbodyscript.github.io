// set cookie
// !check for cookie changes!
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*31*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
// on-load check for cookie if false cookie pop-up 
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => { 
    
    if(document.cookie.indexOf("true") > 0 ){
        getCookieValue()
     }else{
        document.getElementById("false").onclick = function() {
            document.getElementById("cookie").remove()
            setCookie("cookie",false, 1)
    }
      document.getElementById("true").onclick = function() {
        document.getElementById("cookie").remove()
        setCookie("cookie",true, 1)
    }
     }
});

function getCookieValue() {
    const regex = new RegExp(`(^| )cookie=([^;]+)`)
    var match = document.cookie.match(regex)
    // console.log(match)
    if (match == null){
        insertMyCookie()
    }
}

function insertMyCookie(){
    document.getElementsByTagName('body')[0].innerHTML += 
    `
<div id="cookie">
    <div class="cookie-consent-container">
          <div class="cookie-consent-notice">
            <h4>Your Cookie Preferences</h4>
            <hr>
            <p>This website uses cookies to give our users the best experience. You can manage your settings below or find out by reading our <a href="#">Cookie Policy</a>.</p>
          </div>
          <div class="cookie-consent-selection">
            <button id="false" value="false" class="cookie-consent-deny">Use Necessary Only</button>
            <button id="true" value="true" class="cookie-consent-allow">Allow All Cookies</button>
          </div>
    </div>
</div>
    `
}