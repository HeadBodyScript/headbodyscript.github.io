(async()=>{let response=await(await fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/refs/heads/main/alt/assets/json/data.json")).json();
  let updateHTML = "";
  var int = 0;
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
        <div class="tw-ml-auto row format">
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
          <div class="row" style="align-items:center;"><img class="ico" src="https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/refs/heads/main/static/assets/img/ico_${response.card[i].dependency}.webp" alt=""><p>&nbsp${response.card[i].launcherVersion[0]}</p></div>
          <a href="${response.card[i].url}" target="_blank" rel="noopener noreferrer" class="tw-rounded-full tw-flex tw-border-black tw-border-[1px] tw-w-[30px] tw-h-[30px] tw-place-content-center tw-text-lg"><i class="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
        </div>
        `
        updateDisplay.innerHTML += updateHTML;
        updateHTML = "";
        int++;
        if (int == 4) {
          updateDisplay.innerHTML += 
          `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6873165850026223"
     crossorigin="anonymous"></script>
<!-- unit_1 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:440px;height:340px"
     data-ad-client="ca-pub-6873165850026223"
     data-ad-slot="5320957513"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          `;
          updateHTML = "";
          int = 0; 
        }
      }
})();