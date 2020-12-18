const container = document.getElementsByClassName("container")[0];
const content = document.getElementsByClassName("content")[0];

function miTop(heroes) {
const topHeroes = document.createElement("div")
topHeroes.classList.add("topHeroes")
    for (let i = 1; i < 5; i++) {
      const heroNameElement = document.createElement("div")
      heroNameElement.classList.add("hero-name")
      const hero = heroes[i];
      heroNameElement.innerHTML = hero.name;
      heroNameElement.onclick = function(){
        /*per llegir cadascun dels elements del objecte de manera independent
        localStorage.heroName = hero.name 
        localStorage.heroId = hero.id
        */
       //per llegir TOT l'objecte...
       localStorage.hero = JSON.stringify(hero)
        location.replace("/Herodetail/heroDetail.html")
      }
      topHeroes.appendChild(heroNameElement);
      
    }
    
    content.appendChild(topHeroes)
    container.appendChild(content)
}

miTop(heroList)
