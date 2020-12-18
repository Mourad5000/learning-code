const miTop = document.getElementById("listaTop");
///////////////////////////
/*
- guardar al local storage quan es fa click al hero
*/

const packHeroes = document.createElement("div");
const miLista = document.createElement("div");
miLista.classList.add("mi-lista");
function botonHeroes(lista) {
  miLista.classList.add("contenedor-lista");
  
  lista.forEach((element) => {
    //creo el elemento donde van a estar juntitos el nombre y div
    const heroItem = document.createElement("div");
    heroItem.classList.add("hero-item");
    //creo el elemento div donde van a vivir el nombre por una parte y el id del heroe por otra
    const hero = document.createElement("div");
    const heroId = document.createElement("div");
    //creo las cajas donde van a ir mis heroes
    hero.classList.add("hero-name");
    heroId.classList.add("hero-id");
    //los cojo de la lista y los pongo en el HTML(DOM)
    heroId.innerHTML = element.id;
    hero.innerHTML = element.name;
    //los pongo en la caja grande donde van las dos cajas pequeñas
    heroItem.appendChild(heroId);
    heroItem.appendChild(hero);
    miLista.appendChild(heroItem);

    //function que hace algo al clickar 
    hero.onclick = function() {
      localStorage.hero = JSON.stringify(element)
      location.replace("/Herodetail/heroDetail.html")
    }

  });
  packHeroes.appendChild(miLista);

  miTop.appendChild(packHeroes);
}
botonHeroes(heroList);

