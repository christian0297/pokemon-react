
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CardPokemon from './CardPokemon';
import SortPokemonDropdown from './SortPokemonDropdown';
import FilterPokemonDropdown from './FilterPokemonDropdown';

const Pokedex = () => {

    //states inside redux
    let pokemonList = useSelector(state => state.pokemonList.pokemonList); //state.reducer.stateOfSlice
    const isLoading = useSelector(state => state.pokemonList.isLoading);

    //search
    const [valueSearch, setValueSearch] = useState("");

    const search = () => {
        return pokemonList.filter(pokemon => pokemon.name.includes(valueSearch.toLowerCase()))
    };

    //filters
    const itemsTypeOfPokemon = ["Fire", "Grass", "Water", "Electric", "Rock", "Fairy", "Poison", "Bug", "Psychic", "Fighting", "Normal", "Ghost", "Ice", "Ground", "Flying", "Dragon"];
    const [checkedState, setCheckedState] = useState(new Array(itemsTypeOfPokemon.length).fill(false));

    const filterTypesPokemon = (pokemonAfterSearch) => {
            let pokemonListFiltered = [];
            let currentChecked = [];

            checkedState.forEach( (isChecked, index) =>{
                if(isChecked)
                    currentChecked.push(itemsTypeOfPokemon[index].toLowerCase())
            });

            if(currentChecked.length === 0)
                return pokemonAfterSearch;
                
            pokemonAfterSearch.forEach((pokemon)=>{
            if(currentChecked.includes(pokemon.primaryType.toLowerCase())
                || (pokemon.secondaryType !== null && currentChecked.includes(pokemon.secondaryType.toLowerCase())))
                pokemonListFiltered.push(pokemon)
            })
            
            return pokemonListFiltered;
    };
    
    return (
        <>
        
        <div className="pokedex-container">
            <h1>Pokedex</h1> 
            <div className="search__group">
                <input 
                    type="text" 
                    className="search"
                    id="searchPokemon"
                    placeholder="Search pokemon"
                    value={valueSearch}
                    onChange={e => setValueSearch(e.target.value)}
                />
                <label htmlFor="searchPokemon" className="search__label">Search pokemon</label>
            </div>

            <div className="pokedex-container-filters">
                <div className="dropdown-pokedex">
                    <p>Sort by</p>
                    <SortPokemonDropdown/>
                </div>
                <div className="dropdown-pokedex">
                    <p>Filter</p>
                    <FilterPokemonDropdown
                        itemsTypeOfPokemon = {itemsTypeOfPokemon}
                        checkedState = {checkedState}
                        setCheckedState = {setCheckedState}
                    />
                </div>
                {/* aggiungere una scelta multipla per i filti tipi (ogni tipo di pokemon)
                    3 show -> mostrare solo i pokemon catturati, i pokemon non catturati ed entrambi, ma quelli non catturati devono essere essere messi con opacity 0.5*/}
            </div>
            {isLoading ?
                <div className="loading-wrapper">
                    <h2 className="title">Loading...</h2>
                    <div className="loading-pokeball">
                    </div>
                </div>
                :
                <div className="cards-container">
                {
                    filterTypesPokemon(search()).map(pokemon => {
                        return (
                            <CardPokemon 
                                key = {`${pokemon.id}-${pokemon.name}`}
                                name = {pokemon.name}
                                id = {pokemon.id}
                                officialArtwork = {pokemon.officialArtwork}
                                primaryType = {pokemon.primaryType}
                                secondaryType = {pokemon.secondaryType}
                            />
                        )
                })}
                </div>
            }
                
            
        </div>
        </>
    );
}

export default Pokedex;

