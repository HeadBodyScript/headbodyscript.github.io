async function wait(i,s,a,t){var l=await fetch(`https://raw.githubusercontent.com/${s}/${i}/main/README.md`),r=await l.text(),l=await fetch(`https://api.github.com/repos/${s}/${i}/commits/main`),e=await l.json(),i=a[t].name,c=a[t].description,o=e.commit.author.date,b=e.commit.author.name,d=e.commit.message,n=e.committer.avatar_url;
Form.innerHTML+=
`
  <div class="card">
    <div class="card-container">
        <ul>
            <li class="card-header"><strong>${i}</strong></li>
            <li class="border"><i class="bi bi-caret-right-fill"></i>Description</li>
            <li class="border sub"><i class="bi bi-dot"></i>${c}</li>
            <li class="border"><i class="bi bi-caret-right-fill"></i>ReadMe.MD</li>
            <li class="border readme scrollbar sub"><i class="bi bi-dot"></i>${r}</li>
            <li class="border"><i class="bi bi-caret-right-fill"></i>Latest Update</li>
            <li class="border"><i class="bi bi-dot"></i>Date: ${o}</li>
            <li class="border"><i class="bi bi-dot"></i>By: ${b}<img class="icon" src="${n}" alt=""></li>
            <li class="border"><i class="bi bi-dot"></i>Note: ${d}</li>
            <li class="border card-footer"><i class="bi bi-link"></i><a style="color: blueviolet;" class="link" href="https://github.com/${s}/${i}">Visit the repository</a></li>
        </ul>
    </div>
  </div>
`
}
let GetGitRepo=()=>{var i="Tijl-Pleuger-Vista";fetch(`https://api.github.com/users/${i}/repos`).then(i=>i.json()).then(s=>{for(let a=0;a<s.length;a++){var t;wait(s[a].name,i,s,a)}})};GetGitRepo();

let intro=document.querySelector(".splash-intro"),logo=document.querySelector(".splash-logo-header"),logoSpan=document.querySelectorAll(".splash-logo");function btnMenu(i){new_id="section"+i;var s=document.getElementById("transition");s.style.zIndex="256",s.classList.replace("splash-transition-true","splash-transition-false"),setTimeout(()=>{document.querySelectorAll(".visible").forEach(i=>{i.classList.remove("visible")}),document.getElementById(new_id).classList.add("visible"),s.classList.replace("splash-transition-false","splash-transition-true")},1e3),setTimeout(()=>{s.style.zIndex="-256"},1e3)}window.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{logoSpan.forEach((i,s)=>{setTimeout(()=>{i.classList.add("active")},(s+1)*400)}),setTimeout(()=>{logoSpan.forEach((i,s)=>{setTimeout(()=>{i.classList.remove("active"),i.classList.add("fade")},(s+1)*50)})},2e3),setTimeout(()=>{intro.style.top="-100vh"},2300)})});

var text0=["HTML","Windows","TopDesk","Java"],text1=["CSS","Server","Firebase","Script"],text2=["","2016 - 2019","","Ready For A Challenge"],counter=0,txt0=document.getElementById("txt0"),txt1=document.getElementById("txt1"),txt2=document.getElementById("txt2");function change(){txt0.classList.add("hide"),txt1.classList.add("hide"),txt2.classList.add("hide"),setTimeout(function(){txt0.innerHTML=text0[counter],txt1.innerHTML=text1[counter],txt2.innerHTML=text2[counter],txt0.classList.remove("hide"),txt1.classList.remove("hide"),txt2.classList.remove("hide"),++counter>=text0.length&&(counter=0)},1e3)}setInterval(change,5e3);