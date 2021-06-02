import React from 'react'

function Looks(props) {
    return (
        <div className="container">
            <div className='img-container'>
                <img src={props.pokemon.image} alt="" />
            </div>
            <h1 className='name'>{props.pokemon.name}</h1>
        </div>
    )
}

export default Looks

