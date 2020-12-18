import React from "react"
import {Link} from 'react-router-dom'

import './DashboardCard.css'


function DashboardCard({heroName, heroId}) {
    return (
      <Link to={`/heroes/${heroId}`} className='dashboard-card'>
            {heroName}
        </Link>
    )
}

export default DashboardCard