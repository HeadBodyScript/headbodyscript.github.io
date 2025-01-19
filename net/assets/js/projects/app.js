(async()=>{let response=await(await fetch("./assets/json/projects.json")).json();
  var list = "";
    for (let i = 0; i < response.card.length; i++) {
      for (let num = 0; num < response.card[i].list.length; num++) {
        var list = list + `<li class="ui-component-list--item ui-component-list--item-check">${response.card[i].list[num]}</li>`
      }
        updateDisplay.innerHTML += 
        `
        <div class="ui-layout-container">
        <div class="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
          <a href="${response.card[i].url}">
            <img src="${response.card[i].img}" loading="lazy" alt="#" class="ui-image-half-left">
          </a>              
          <!-- FEATURE -->
          <div class="ui-section justify-content-between">
            <small>${response.card[i].launcher} / ${response.card[i].format} : ${response.card[i].launcherVersion}</small>
            <h2>${response.card[i].title}</h2>
            <small>${response.card[i].packVersion}</small>
            <p class="ui-text-intro">${response.card[i].txt}</p>
            <ul class="ui-component-list ui-component-list-feature ui-layout-grid">
              ${list}
            </ul>
              <small>Updated: ${response.card[i].dateUpdate}</small>
              <small>Uploaded: ${response.card[i].dateUpload}</small>
            <div>
                <a href="${response.card[i].url}">Click for more information</a>              
            </div>
          </div>
          <!-- IMAGE -->
        </div>
      </div>
        `
        var list = ""

        }
})();