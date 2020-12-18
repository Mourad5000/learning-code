import React from 'react'

//useParams agafa els parametres de la URL
import {useParams} from 'react-router-dom'

import './HeroDetail.css'


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


function getHeroNameById(id) {
    let findHero = heroes.find((hero) => hero.id === Number(id));
    return findHero.name;
}

function HeroDetail(){
    let {heroId} = useParams()
    let heroName = getHeroNameById(heroId)
    return (
        <div className="hero-container">
            <div className="hero">
            <p>Hero id: {heroId}</p>
            <p>Hero name: {heroName}</p>
            </div>
        </div>
    )
}

export default HeroDetail