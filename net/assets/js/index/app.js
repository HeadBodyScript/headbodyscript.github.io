(async()=>{let response=await(await fetch("./assets/json/card.json")).json();
    for (let i = 0; i < response.card.length; i++) {
        updateDisplay.innerHTML += 
        `
          <div class="box">
              <div class="sub-section-2 column">
                 <div style="background-image: url(${response.card[i].img});" id="ID1"></div>
                 <h1>${response.card[i].title}</h1>
                 <p>${response.card[i].txt}</p>
                 <a href="${response.card[i].url}"><i class="bi bi-link-45deg"></i> ${response.card[i].title}</a>
              </div>
            </div>
        `
        }
})();