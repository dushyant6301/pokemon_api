import React, { useState, useEffect } from 'react'
import Looks from './Looks';

function Fetch() {

    const [pokemons, setPokemon] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, []);

    async function fetchAPI() {
        const data = [];
        for (let id = 1; id <= 200; id++) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const { ID, name, sprites } = await res.json();

            data.push({ id: ID, name: name, image: sprites.front_default });
        }
        setPokemon(data);
    }

    return (
        <div className='all-container'>
            { pokemons.map((pokemon, i) => (
                <Looks key={i} pokemon={pokemon} />
            ))}
        </div>
    )
}

export default Fetch

