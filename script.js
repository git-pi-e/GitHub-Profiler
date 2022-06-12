let url = 'https://api.github.com/users/';

async function getUser(userid){
    let resp = await fetch(url+userid)
    let user_json_data = await resp.json();
    //displayUser(user_json_data);
}