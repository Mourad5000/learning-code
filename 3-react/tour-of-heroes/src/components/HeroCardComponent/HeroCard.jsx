import React from 'react'

import {Link} from 'react-router-dom'
import './HeroCard.css'

function HeroCard(props) {
    return(
        <div className="hero-card-container">
            <Link to={`/heroes/${props.heroId}`}>
                <span className="id">{props.heroId}</span>
                <span className="name">{props.heroName}</span>
            </Link>
        </div>
    )
}

export default HeroCard