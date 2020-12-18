import React from 'react'
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'

import './CharacterDetails.css'

import like from '../../images/like.png';
import noLike from '../../images/noLike.png';

function CharacterDetails ({searchResult}){
    
    console.log(searchResult);
    let {characterId} = useParams();
    let match = searchResult.filter((character)=>character.id==characterId)
    
    console.log(match);
    return(
        <div className="characters">
            {
                match.map((character)=>(
                <div className="detail-card" key={character.name}>
                    <img className="detail-image" src={character.image} alt="Character profile"/>
                    <div className="detail-info">
                <h2>{character.name}</h2>
                    {character.isFavorite ? (
                        <img className="like" src={like} alt="" />
                        ) : (
                            <img className="like" src={noLike} alt="" />
                            )}
                    </div>
                </div>
                ))
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        searchResult: state.charactersReducer.searchResult,
    }
}
export default connect(mapStateToProps)(CharacterDetails);