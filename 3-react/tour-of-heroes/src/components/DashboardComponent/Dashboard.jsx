import React from 'react'

import DashboardCard from './DashboardCardComponent/DashboardCard'
import './Dashboard.css'

let heroes = [
    { id: 11, name: "Dr Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },]

function Dashboard() {
    return(
        <div className='dashboard'>
            <h5>Tour of Heroes</h5>
            <div className="all-top">
            {heroes.map(hero=>{
                return <DashboardCard heroName={hero.name} heroId={hero.id}/>
            })}
            </div>
        </div>
    )
}

export default Dashboard