let GetGitRepo=()=>{var i="Tijl-Pleuger-Vista";fetch(`https://api.github.com/users/${i}/repos`).then(i=>i.json()).then(s=>{for(let e=0;e<s.length;e++)setTimeout(function(){var t,l=s[e].name;fetch(`https://raw.githubusercontent.com/${i}/${l}/main/README.md`).then(i=>i.text()).then(i=>{t=i}),fetch(`https://api.github.com/repos/${i}/${l}/commits/main`).then(i=>i.json()).then(l=>{var a=s[e].name,r=s[e].description,o=l.commit.author.date,c=l.commit.author.name,n=l.commit.message,d=l.committer.avatar_url;
Form.innerHTML+=
`
<div class="card">
    <div class="card-container">
        <ul>
        <li class="card-header"><strong>${a}</strong></li>
        <li class="border"><i class="bi bi-caret-right-fill"></i>Description</li>
        <li class="border sub"><i class="bi bi-dot"></i>${r}</li>
        <li class="border"><i class="bi bi-caret-right-fill"></i>ReadMe.MD</li>
        <li class="border readme scrollbar sub"><i class="bi bi-dot"></i>${t}</li>
        <li class="border"><i class="bi bi-caret-right-fill"></i>Latest Update</li>
        <li class="border"><i class="bi bi-dot"></i>Date: ${o}</li>
        <li class="border"><i class="bi bi-dot"></i>By: ${c}<img class="icon" src="${d}" alt=""></li>
        <li class="border"><i class="bi bi-dot"></i>Note: ${n}</li>
        <li class="border card-footer"><i class="bi bi-link"></i><a style="color: blueviolet;" class="link" href="https://github.com/${i}/${a}">Visit the repository</a></li>
        </ul>
    </div>
</div>
`
})},100)})};GetGitRepo();let intro=document.querySelector(".splash-intro"),logo=document.querySelector(".splash-logo-header"),logoSpan=document.querySelectorAll(".splash-logo");function btnMenu(i){new_id="section"+i;var s=document.getElementById("transition");s.style.zIndex="256",s.classList.replace("splash-transition-true","splash-transition-false"),setTimeout(()=>{document.querySelectorAll(".visible").forEach(i=>{i.classList.remove("visible")}),document.getElementById(new_id).classList.add("visible"),s.classList.replace("splash-transition-false","splash-transition-true")},1e3),setTimeout(()=>{s.style.zIndex="-256"},1e3)}window.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{logoSpan.forEach((i,s)=>{setTimeout(()=>{i.classList.add("active")},(s+1)*400)}),setTimeout(()=>{logoSpan.forEach((i,s)=>{setTimeout(()=>{i.classList.remove("active"),i.classList.add("fade")},(s+1)*50)})},2e3),setTimeout(()=>{intro.style.top="-100vh"},2300)})});