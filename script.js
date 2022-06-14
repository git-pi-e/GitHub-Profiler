let url = 'https://api.github.com/users/';
const main = document.getElementById("main");
let form = document.getElementById("form");
let search = document.getElementById("search");

async function getUser(userid){
    let resp = await fetch(url+userid);
    let user_json_data = await resp.json();
    makeCard(user_json_data);
    getUserRepos(userid);
    console.log(user_json_data);
}

async function getUserRepos(userid){
    let resp = await fetch(url+userid+"/repos");
    let resp_json_data = await resp.json();
    addReposElement(resp_json_data);
}

function addReposElement(repo){
    const repdiv = document.getElementById("repos");
    repo.forEach((repo) => {
        let new_element = document.createElement("a");
        new_element.classList.add("repo");
        new_element.href = repo.html_url;
        new_element.innerHTML = repo.name;
        repdiv.appendChild(new_element);
    })
}

getUser("dummy011");

function makeCard(user){
    const HTML = `
        <div class="card">
            <div class="user">
                <img class="avatar" src="${user.avatar_url}"">
                <h2 class="name">${user.name}</h2>
                <h3 class="userid">${user.login}</h3>
            </div>
            <div class="user-info">
                <div class="bio">${user.bio}</div>
                <ul>
                    <li><strong>Followers: </strong>${user.followers}</li>
                    <li><strong>Following: </strong>${user.following}</li>
                    <li><strong>Repos: </strong>${user.public_repos}</li>
                    <li><strong>Location: </strong>${user.location}</li>
                </ul>
            </div>
            <div id="repos"></div>
        </div>
    `;
    main.innerHTML = HTML;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;
    if (user){
        getUser(user);
        console.log(user);
        search.value = "";
    }
});