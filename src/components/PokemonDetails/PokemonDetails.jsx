import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import './PokemonDetails.css';

function PokemonDetails(){
        const {id} = useParams();
        const [pokemon, setPokemon] = useState({});
        async function dowloadPokemon(){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            console.log(response.data);
            setPokemon({
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                weight:response.data.weight,
                height: response.data.height,
                types: response.data.types.map((t)=>{
                    t.type.name
                })
            })
        }

        useEffect(()=>{
            dowloadPokemon();
        }, []);

        return (
            <div className="pokemon-details-wrapper">
            <img className="pokemon-details-image" src={pokemon.image} alt={pokemon.name} />
              <div className="pokemon-details-name">Name: {pokemon.name}</div>
              <div>Height: {pokemon.height}</div>
              <div>Weight: {pokemon.weight}</div>
              {/* <div className="pokemon-details-types">
                {pokemon.types && pokemon.types.map((t) => {
                  console.log(t.type); // Log the type for debugging
                  return <div key={t.type.name}>{t.type.name}</div>; // Render the type name
                })}
              </div> */}
            </div>
          );
          
}
export default PokemonDetails;