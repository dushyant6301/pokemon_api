import React, { Component } from 'react'
import Looks from './Looks';

class Fetch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemons: []
        }
    }

    async componentDidMount() {
        const data = [];
        for (let id = 1; id <= 200; id++) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const { ID, name, sprites } = await res.json();

            data.push({ id: ID, name: name, image: sprites.front_default });
        }
        this.setState({ pokemons: data })
    }

    render() {
        return (
            <div className='all-container'>
                { this.state.pokemons.map((pokemon, i) => (
                    <Looks key={i} pokemon={pokemon} />
                ))}
            </div>
        )
    }
}

export default Fetch
