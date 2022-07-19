//FETCH REQUEST / GET FETCH FOR ALL USERS
function getAllUsers(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    fetch(`https://api.github.com/search/users?q=${e.target[0].value}`)
    .then(res => res.json())
    .then(data => renderAllUsers(data.items))
}

//SHOWS SEARCHED USER ON THE DOM USING A CREATED CARD 
function renderAllUsers(users) {
    for (let user of users){
        renderOneUser(user)
    }
}

//RENDER ONE USER
function renderOneUser(user) {
    //CARD
    let li = document.createElement('li')
    let img = document.createElement('img')
    let pTag = document.createElement('p')
    let a = document.createElement('a')
    //GRABS UL 
    let ul = document.getElementById('user-list')
    //CARD DETAILS
    img.src = user.avatar_url 
    pTag.innerText = user.login
    a.href = user.html_url
    a.innerText = user.html_url
    //WHEN IMAGE IS CLICKED IT GETS REPOS
    img.addEventListener('click', (e) => {getAllReposForSingleUser(user)}) 
    //MY APPEND(S)
    li.append(pTag, img, a)
    ul.append(li)
}

//GETS USERS WHEN SUMBIT CLICKED
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    let form = document.getElementById('github-form')
    form.addEventListener('submit', getAllUsers) 
})
    
//GET ENDPOINT DATA FOR SEARCHED USER
const data = {}
function getAllReposForSingleUser(user) {
    fetch(user.repos_url)
    .then(res => res.json())
    .then(dataObject => {
        for(let repo of dataObject) {
        renderRepo(repo)
    }})
    .catch( error => console.error(error));
}

//RENDR REPOS
function renderRepo(dataObject) {
    console.log(dataObject, 'This is one repo')
    //CARD
    let li = document.createElement('li')
    let a = document.createElement('a')
    //GRABS LIST TO APPEND TO
    let ul = document.getElementById('repos-list')
    //CARD DETAILS
    a.href = dataObject.html_url
    a.innerHTML = dataObject.html_url
    //APPENDS
    li.append(a)
    ul.append(li)
}
