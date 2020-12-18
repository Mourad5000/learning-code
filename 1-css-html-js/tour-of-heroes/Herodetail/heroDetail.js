const detailsElement = document.getElementsByClassName("details")[0];

const heroNameElement = document.createElement("div")
const heroIdElement = document.createElement("div")

/* la manera de llegir els elements de manera manual
heroNameElement.innerHTML = localStorage.heroName + " details!";
heroIdElement.innerHTML = "id: " + localStorage.heroId
*/

const heroName = JSON.parse(localStorage.hero).name
const heroId = JSON.parse(localStorage.hero).id

heroNameElement.innerHTML = heroName + " details!"
heroIdElement.innerHTML = heroId

detailsElement.appendChild(heroNameElement)
detailsElement.appendChild(heroIdElement)
