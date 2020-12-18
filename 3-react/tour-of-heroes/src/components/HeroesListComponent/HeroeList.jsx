import React from 'react';
import './HeroeList.css'

import HeroCard from '../HeroCardComponent/HeroCard'

let heroes = [
    { id: 11, name: "Dr Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" },
];


function HeroeList (){
    return(
        <div className="heroe-list-container">
            {heroes.map(function(hero) {
                return <HeroCard heroId={hero.id} heroName={hero.name}/>;
            })}
        </div>
    )
}

export default HeroeList