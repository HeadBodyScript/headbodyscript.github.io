let GetGitRepo = () => {
    var gitUser = "Tijl-Pleuger-Vista"
    var GitRepoLink = "/repos/HeadBodyScript/DATA-Armoury/commits"
    fetch(`https://api.github.com/users/${gitUser}/repos`)
    .then(Categories => Categories.json())
    .then(Categories => {
        console.log(Categories)

            // (dont) make this so there are arrays of the obj you need to use in the placeDiv function

            // make a for each loop of Categories to make var of data I need inside the function
            // Categories 0, create own list at 0. At List[0] get data from Categories[0] and so on
        var reducedCategories = Categories.reduce((prev, obj) => prev + `/${obj.name}`, '');
        localStorage.setItem('reducedName', reducedCategories);

        var reducedDescription = Categories.reduce((prev, obj) => prev + `/${obj.description}`, '');
        localStorage.setItem('reducedDescription', reducedDescription);

            function placeDiv() {

            var _reducedCategories = localStorage.getItem('reducedName');
            var splitCategories = _reducedCategories.split("/");
            var resultCategories = splitCategories.pop();
            var newReducedCategories = splitCategories.join("/");
            localStorage.setItem('reducedName', newReducedCategories);

            var reducedDescription = localStorage.getItem('reducedDescription');
            var splitDescription = reducedDescription.split("/");
            var resultDescription = splitDescription.pop();
            var newReducedDescription = splitDescription.join("/");
            localStorage.setItem('reducedDescription', newReducedDescription);

            // fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/README.md")
            //     .then(ReadMe => ReadMe.text())

            var ReadMe;

            fetch(`https://raw.githubusercontent.com/${gitUser}/${resultCategories}/main/README.md`)
            .then(res => res.text())
            .then(data => {
                ReadMe = data;
            })
            .then(() => {
                console.log(ReadMe);
            });

            // console.log(_reducedCategories)

            fetch(`https://api.github.com/repos/${gitUser}/${resultCategories}/commits/main`)
                .then(subCategories => subCategories.json())
                .then(subCategories => {
                    console.log(subCategories)

                    // fetch("https://raw.githubusercontent.com/HeadBodyScript/headbodyscript.github.io/main/README.md").text();README0.innerHTML=t


                var gitTime = subCategories.commit.author.date
                var gitName = subCategories.commit.author.name
                var gitSummary = subCategories.commit.message
                var gitIcon = subCategories.committer.avatar_url
                Form.innerHTML +=
                `
                <div class="card">
                    <div class="card-container">
                        <ul>
                            <li class="card-header"><strong>${resultCategories}</strong><img class="icon" src="icon.jpeg" alt=""></li>
                            <li class="border"><i class="bi bi-caret-right-fill"></i>Description</li>
                            <li class="border sub"><i class="bi bi-dot"></i>${resultDescription}</li>
                            <li class="border"><i class="bi bi-caret-right-fill"></i>ReadMe.MD</li>
                            <li class="border readme scrollbar sub"><i class="bi bi-dot"></i>${ReadMe}</li>
                            <li class="border"><i class="bi bi-caret-right-fill"></i>Latest Update</li>
                            <li class="border"><i class="bi bi-dot"></i>Date: ${gitTime}</li>
                            <li class="border"><i class="bi bi-dot"></i>By: ${gitName}<img class="icon" src="${gitIcon}" alt=""></li>
                            <li class="border"><i class="bi bi-dot"></i>Note: ${gitSummary}</li>
                            <li class="border card-footer"><i class="bi bi-link"></i><a style="color: blueviolet;" class="link" href="https://github.com/${gitUser}/${resultCategories}">Visit the repository</a></li>
                        </ul>
                    </div>
                </div>
                `
                })
            }

        let result = 0;
        for (let i = 0; i < Categories.length; i++) {
        result += placeDiv();
        }
    })
};
GetGitRepo();

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
