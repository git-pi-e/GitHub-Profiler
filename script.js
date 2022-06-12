let url = 'https://api.github.com/users/';
const main = document.getElementById("main");
let form = document.getElementById("form");
let search = document.getElementById("search");

async function getUser(userid){
    let resp = await fetch(url+userid)
    let user_json_data = await resp.json();
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