(async()=>{let response=await(await fetch("assets/json/projects.json")).json();
  let updateHTML = "";
    for (let i = 0; i < response.card.length ; i++) {
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
      updateHTML +=
      `
      <iframe width="100%" height="auto" style="aspect-ratio: 2/1;"
        src="${response.video}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
      `
})();