let GetGitRepo=()=>{var e="Tijl-Pleuger-Vista";fetch(`https://api.github.com/users/${e}/repos`).then(e=>e.json()).then(i=>{console.log(i);var s=i.reduce((e,i)=>e+`/${i.name}`,"");localStorage.setItem("reducedName",s);var t=i.reduce((e,i)=>e+`/${i.description}`,"");function l(){var i,s=localStorage.getItem("reducedName").split("/"),t=s.pop(),l=s.join("/");localStorage.setItem("reducedName",l);var a=localStorage.getItem("reducedDescription").split("/"),r=a.pop(),o=a.join("/");localStorage.setItem("reducedDescription",o),fetch(`https://raw.githubusercontent.com/${e}/${t}/main/README.md`).then(e=>e.text()).then(e=>{i=e}),fetch(`https://api.github.com/repos/${e}/${t}/commits/main`).then(e=>e.json()).then(s=>{console.log(s);var l=s.commit.author.date,a=s.commit.author.name,o=s.commit.message,c=s.committer.avatar_url;
            Form.innerHTML+=
                `
                <div class="card">
                    <div class="card-container">
                        <ul>
                            <li class="card-header"><strong>${t}</strong><img class="icon" src="icon.jpeg" alt=""></li>
                            <li class="border"><i class="bi bi-caret-right-fill"></i>Description</li>
                            <li class="border sub"><i class="bi bi-dot"></i>${r}</li>
                            <li class="border"><i class="bi bi-caret-right-fill"></i>ReadMe.MD</li>
                            <li class="border readme scrollbar sub"><i class="bi bi-dot"></i>${i}</li>
                            <li class="border"><i class="bi bi-caret-right-fill"></i>Latest Update</li>
                            <li class="border"><i class="bi bi-dot"></i>Date: ${l}</li>
                            <li class="border"><i class="bi bi-dot"></i>By: ${a}<img class="icon" src="${c}" alt=""></li>
                            <li class="border"><i class="bi bi-dot"></i>Note: ${o}</li>
                            <li class="border card-footer"><i class="bi bi-link"></i><a style="color: blueviolet;" class="link" href="https://github.com/${e}/${t}">Visit the repository</a></li>
                        </ul>
                    </div>
                </div>
                `
})}localStorage.setItem("reducedDescription",t);let a=0;for(let r=0;r<i.length;r++)a+=l()})};GetGitRepo();let intro=document.querySelector(".splash-intro"),logo=document.querySelector(".splash-logo-header"),logoSpan=document.querySelectorAll(".splash-logo");function btnMenu(e){new_id="section"+e;var i=document.getElementById("transition");i.style.zIndex="256",i.classList.replace("splash-transition-true","splash-transition-false"),setTimeout(()=>{document.querySelectorAll(".visible").forEach(e=>{e.classList.remove("visible")}),document.getElementById(new_id).classList.add("visible"),i.classList.replace("splash-transition-false","splash-transition-true")},1e3),setTimeout(()=>{i.style.zIndex="-256"},1e3)}window.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{logoSpan.forEach((e,i)=>{setTimeout(()=>{e.classList.add("active")},(i+1)*400)}),setTimeout(()=>{logoSpan.forEach((e,i)=>{setTimeout(()=>{e.classList.remove("active"),e.classList.add("fade")},(i+1)*50)})},2e3),setTimeout(()=>{intro.style.top="-100vh"},2300)})});