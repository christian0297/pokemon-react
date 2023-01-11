import { createSlice } from "@reduxjs/toolkit";

const pokemonListSlice = createSlice({
    name: 'pokemonList',
    initialState: {
        pokemonList: [],
        isLoading: false,
    },
    reducers: {
        getPokemonListFetch: (state) => {
            state.isLoading = true;
        },
        getPokemonListSuccess: (state, action) => {
            state.pokemonList = action.payload;
            state.isLoading = false;
        },
        getPokemonListFailure: (state) => {
            state.isLoading = false;
        },
        //pokedex - pokemon sort actions
        sortingFromLowestNumber: (state, action) => {
            state.pokemonList = [...action.payload].sort(
                function(firstPokemon, secondPokemon){
                    return firstPokemon.id - secondPokemon.id;
                }
            )
        },
        sortingFromHighestNumber: (state, action) => {
            state.pokemonList = [...action.payload].sort(
                function(firstPokemon, secondPokemon){
                    return secondPokemon.id - firstPokemon.id;
                }
            )
        },
        sortingFromAToZ: (state, action) => {
            state.pokemonList = [...action.payload].sort(
                function(firstPokemon, secondPokemon){
                    return firstPokemon.name > secondPokemon.name ? 1 : -1;
                }
            )
        },
        sortingFromZToA: (state, action) => {
            state.pokemonList = [...action.payload].sort(
                function(firstPokemon, secondPokemon){
                    return firstPokemon.name > secondPokemon.name ? -1 : 1;
                }
            )
        }
    }
});

export const {
    getPokemonListFetch,
    getPokemonListSuccess, 
    getPokemonListFailure, 
    sortingFromLowestNumber, 
    sortingFromHighestNumber, 
    sortingFromAToZ , 
    sortingFromZToA} = pokemonListSlice.actions;

export default pokemonListSlice.reducer;