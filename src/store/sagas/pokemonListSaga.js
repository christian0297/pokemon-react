import { call, put, takeEvery } from "redux-saga/effects"
import { getPokemonListSuccess, getPokemonListFailure } from "../slices/pokemonListSlice"

const pokemonNumbers = 151;

function* workGetPokemonListFetch(){
    try{
       let PokemonListArray = [];
        for(let i=1; i<=pokemonNumbers; i++){
            const pokemonList = yield call(() => fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
            const formattedPokemonList = yield pokemonList.json();
            
            //creating an object within the array by taking useful information, avoiding application state or action 
            //payloads being too large, making Redux DevTools serialization slow and consuming a lot of memory.
            yield PokemonListArray.push({
                name: formattedPokemonList.name,
                id: formattedPokemonList.id,
                officialArtwork: formattedPokemonList.sprites.other["official-artwork"].front_default,
                primaryType: formattedPokemonList.types[0].type.name,
                secondaryType: formattedPokemonList.types[1] === undefined ? null : formattedPokemonList.types[1].type.name,
                //isCapture : 
            })
            // if(i % limitDownloadPokemon === (limitDownloadPokemon -1)){
            //     console.log("ccc")
            //     yield put(getPokemonListLoading(PokemonListArray))
            // }
        }
        
        yield put(getPokemonListSuccess(PokemonListArray));
    }
    catch{
        yield put(getPokemonListFailure());
    }
}

function* pokemonListSaga(){
    yield takeEvery('pokemonList/getPokemonListFetch', workGetPokemonListFetch);
    //or: yield takeEvery(getPokemonListFetch, workGetPokemonListFetch)
}

export default pokemonListSaga; 