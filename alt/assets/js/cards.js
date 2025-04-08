(async()=>{let response=await(await fetch("assets/json/projects.json")).json();
  let updateHTML = "";
    for (let i = 0; i < 7; i++) {
      if (i === 0){
        updatelatestPreviewDisplay.innerHTML +=
        `
        <div class="article-first">
              <a href="${response.card[i].url}"><img alt="" src="${response.card[i].img}" /></a>
              <a href="${response.card[i].url}">
                <div class="text-wrapper column">
                    <div class="row" style="align-items: center;">
                      <h2>${response.card[i].title}&nbsp</h2>
                      <h2>${response.card[i].packPrefix}</h2>
                      <h2>${response.card[i].packVersion}</h2>
                    </div>
                    <p>${response.card[i].txt}</p>
                    <div class="row" style="align-items: center;">
                      <p class="row"><img class="ico" src="https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/refs/heads/main/static/assets/img/ico_${response.card[i].dependency}.webp" alt="">&nbsp</p>
                      <p>${response.card[i].launcherVersion}</p>
                    </div>
                    </div>
                </div>
            </a>
        </div>
        `
      }
      else {
        updateHTML += 
        `
        <div class="template-card">
        <div class="template-preview">
        <a href="${response.card[i].url}">
          <img src="${response.card[i].img}" alt="" class="tw-w-full tw-h-full tw-object-contain">
        </a>
        </div>
        <div class="template-footer tw-w-full">
        <div class="tw-flex tw-w-full">
        <h2 class="tw-text-xl tw-font-medium">${response.card[i].title}</h2>
        <div class="tw-ml-auto row">
        `
        for (let u = 0; u < response.card[i].format.length; u++) {
          updateHTML += 
          `
          <p class="tw-ml-1 tw-text-sm tw-p-1 tw-px-2 tw-border-primary tw-text-primary tw-rounded-full tw-border-[1px]">${response.card[i].format[u]}</p>
          `
        }
        updateHTML += 
        `
        </div>
        </div>
          <div class="tw-flex tw-mt-5 tw-justify-between">
          <p class="row" style="align-items: start;"><img class="ico" src="https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/refs/heads/main/static/assets/img/ico_${response.card[i].dependency}.webp" alt=""></p>
          <a href="${response.card[i].url}" target="_blank" rel="noopener noreferrer" class="tw-rounded-full tw-flex tw-border-black tw-border-[1px] tw-w-[30px] tw-h-[30px] tw-place-content-center tw-text-lg"><i class="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
        </div>
        `
        updateDisplay.innerHTML += updateHTML;
        updateHTML = "";
      }
    }
    // change to cookie with lifetime
async function fetchAPI() {
  var githubApiLatestUpdate = await fetch(`https://api.github.com/users/headbodyscript/events/public`);
  var githubApiLatestUpdate = await githubApiLatestUpdate.json();
  console.log(githubApiLatestUpdate)
  localStorage.setItem("githubApiLatestUpdate",JSON.stringify(githubApiLatestUpdate[0]))
  updateUpdateDisplay(githubApiLatestUpdate)
}
if (localStorage.getItem("githubApiLatestUpdate") !== null) {
  var githubApiLatestUpdate = JSON.parse(localStorage.getItem("githubApiLatestUpdate"));
  console.log(githubApiLatestUpdate)
  updateUpdateDisplay(githubApiLatestUpdate)
} else {
  console.log("else")
  fetchAPI()
}
function updateUpdateDisplay(githubApiLatestUpdate){
  // document.getElementById("updateLatestUpdate").innerHTML =
  updateLatestUpdate.innerHTML =
  `
  ${githubApiLatestUpdate.id}
  `
}
})();
