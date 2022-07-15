//FETCH REQUEST / GET FETCH FOR ALL USERS
//RES = {}
function getAllUsers(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    fetch(`https://api.github.com/search/users?q=${e.target[0].value}`)
    .then(res => res.json())
    .then(data => renderToDom(data))
   
}
//SHOWS SEARCHED USER ON THE DOM USING A CREATED CARD 
function renderToDom(object) {
    console.log(object)
    //CARD
    let li = document.createElement('li')
    let img = document.createElement('img')
    let pTag = document.createElement('p')
    let a = document.createElement('a')
    let ul = document.getElementById('user-list')
    //CARD DETAILS
    img.src = object.items[0].avatar_url 
    pTag.innerText = object.items[0].login
    a.href = object.items[0].html_url
    a.innerText = object.items[0].html_url
    //MY APPEND(S)
    li.append(pTag, img, a)
    ul.append(li)
}

//TAKES VALUE OF INPUT AND SERCHES FOR MATCHES
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    let form = document.getElementById('github-form')
    form.addEventListener('submit', getAllUsers) 
})
    
//GET ENDPOINT DATA FOR SEARCHED USER
function getEndpoint() {
    fetch(`https://api.github.com/users/octocat/repos`)
    .then(res => res.json())
    .then(data => document.body.append(data))
    .catch( error => console.error(error));
}
    

    //needs and addEventListener