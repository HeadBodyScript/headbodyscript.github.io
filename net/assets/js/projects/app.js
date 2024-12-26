(async()=>{let response=await(await fetch("./assets/json/projects.json")).json();
    for (let i = 0; i < response.projects.length; i++) {
      if (response.projects[i].type === "basic"){
        updateDisplay.innerHTML += 
        `
                <div class="ui-component-card ui-component-card--feature">
                  <a href="${response.projects[i].url}"><div class="ui-component-card--image"style="background-image: url(${response.projects[i].img});"><p class="version">${response.projects[i].packVersion}</p></div></a>
                  <div class="ui-component-card--feature-content column">
                    <h4 class="ui-component-card--feature-title">${response.projects[i].title}</h4>
                    <p>${response.projects[i].txt}</p>
                <div class=ui-component-card--footer column>
                  <div class=row><p>${response.projects[i].gameVersion}</p><i class="bi bi-dot"></i><p>${response.projects[i].sort}</p></div>
                  <p>Udated: ${response.projects[i].dateUpdate}</p>
                  <p>Uploaded: ${response.projects[i].dateUpload}</p>
                  <a href="${response.projects[i].url}"><i class="bi bi-link-45deg"></i> ${response.projects[i].title}</a>
                </div>
                  </div>
                </div>
        `
      }
    }
})();