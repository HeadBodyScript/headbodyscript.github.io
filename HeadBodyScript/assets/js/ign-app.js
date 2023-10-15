// let GetGitRepo = () => {
//     var gitUser = "Tijl-Pleuger-Vista"
//     var GitRepoLink = "/repos/HeadBodyScript/DATA-Armoury/commits"
//     fetch(`https://api.github.com/users/${gitUser}/repos`)
//     .then(Categories => Categories.json())
//     .then(Categories => {

//         var reducedCategories = Categories.reduce((prev, obj) => prev + `/${obj.name}`, '');
//         localStorage.setItem('reducedList', reducedCategories);

//             function placeDiv() {

//             var _reducedCategories = localStorage.getItem('reducedList');
//             var splitCategories = _reducedCategories.split("/");
//             var resultCategories = splitCategories.pop();
//             var newReducedCategories = splitCategories.join("/");
//             localStorage.setItem('reducedList', newReducedCategories);
//             console.log(_reducedCategories)

//             fetch(`https://api.github.com/repos/${gitUser}/${resultCategories}/commits/main`)
//                 .then(subCategories => subCategories.json())
//                 .then(subCategories => {
//                     console.log(subCategories)

//                 var gitTime = subCategories.commit.author.date
//                 var gitSummary = subCategories.commit.message
//                 Form.innerHTML +=
//                 `
//                 <div class="col-6 col-lg-3 col-md-6">
//                     <div class="card dimi">
//                         <div class="card-body set-border px-4 py-4-5">
//                             <div class="row">
//                                 <div class="stats-icon2"><img src="https://raw.githubusercontent.com/HeadBodyScript/HeadBodyScript/main/user-interface/image-404.webp"></div>
//                                 <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
//                                     <h5>${resultCategories}<br></h5>
//                                     <h6 class="text-muted font-semibold">${gitSummary}</h6>
//                                     <h6 class="font-extrabold mb-0"><a href="">${gitTime}</a></h6>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 `
//                 })
//             }

//         let result = 0;
//         for (let i = 0; i < Categories.length; i++) {
//         result += placeDiv();
//         }
//     })
// };
// GetGitRepo();

let intro = document.querySelector('.splash-intro');
let logo = document.querySelector('.splash-logo-header');
let logoSpan = document.querySelectorAll('.splash-logo');


window.addEventListener('DOMContentLoaded', () => {
setTimeout(() => {
    logoSpan.forEach((span, idx) => {
    setTimeout(() => {
        span.classList.add('active');
    }, (idx + 1) * 400)
    });
    setTimeout(() => {
    logoSpan.forEach((span, idx) => {
        setTimeout(() => {
        span.classList.remove('active');
        span.classList.add('fade');
        }, (idx + 1) * 50)
    })
    }, 2000);
    setTimeout(() => {
    intro.style.top = '-100vh';
    },2300)
})
})
