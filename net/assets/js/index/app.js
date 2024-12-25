(async()=>{let response=await(await fetch("./card.json")).json();
    for (let i = 0; i < response.card.length; i++) {
        updateDisplay.innerHTML += 
        `
          <div class="box">
              <div class="sub-section-2 column">
                 <div style="background-image: url(${response.card[i].img});" id="ID1"></div>
                 <h1>Cyberpunk</h1>
                 <p>Added new weapons and tacticals. Buildings are updates and new classes</p>
              </div>
            </div>
        `
        }
        console.log(response.card[1].img)
})();