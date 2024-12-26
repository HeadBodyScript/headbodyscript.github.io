(async()=>{let response=await(await fetch("./assets/json/projects.json")).json();
    for (let i = 0; i < response.projects.length; i++) {
        updateDisplay.innerHTML += 
        `
                <div class="ui-component-card ui-component-card--feature">
                  <img src="${response.projects[i].img}" alt="#" loading="lazy">
                  <div class="ui-component-card--feature-content">
                    <h4 class="ui-component-card--feature-title">${response.projects[i].title}</h4>
                    <p>${response.projects[i].txt}</p>
                    <a href="${response.projects[i].url}"><i class="bi bi-link-45deg"></i> ${response.projects[i].title}</a>
                  </div>
                </div>
        `
        }
})();