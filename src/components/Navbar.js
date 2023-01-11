import React from "react";
import { Link} from "react-router-dom";
import pokemonLogo from '../svgs/pokemonLogo.svg';
import pokedexIcon from '../svgs/pokedexIcon.svg';

const Navbar = () =>{
    return(
        <nav className="navbar">
            <ul className="navbar-container">
                <Link to="/" className="navbar-container-home">
                    <img 
                        src={pokemonLogo}
                        alt="pokemon Logo"
                        className="pokemon-logo"
                    />
                </Link>
                <Link to="/Pokedex" className="navbar-container-pokedex">
                    <img 
                        src={pokedexIcon}
                        alt="pokedex Icon"
                        className="pokedex-icon"
                    />
                    Pokedex
                </Link>
            </ul>
        </nav>
    )

}

export default Navbar;