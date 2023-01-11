import pokeballSvg from '../../svgs/pokeball.svg';
import arrowUpSvg from '../../svgs/arrowUp.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { sortingFromLowestNumber, sortingFromHighestNumber, sortingFromAToZ , sortingFromZToA } from '../../store/slices/pokemonListSlice';

const SortPokemonDropdown = () => {

    //dropdown sorting
    const itemsSorting = [
        { id: 1, value: "Lowest Number" },
        { id: 2, value: "Highest Number" },
        { id: 3, value: "A-Z" },
        { id: 4, value: "Z-A" }
    ]

    const [DropdownIsOpen, setDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(itemsSorting[0].value);
    
    const pokemonList = useSelector(state => state.pokemonList.pokemonList);
    const dispatch = useDispatch();


    return (
        <div className={`select-box--box dropdown-open-${DropdownIsOpen} sort-dropdown`} onClick={() => {
                setDropdownOpen(!DropdownIsOpen)
            }
            }>
            <div className="select-box--container">
                <img 
                    src={pokeballSvg}
                    alt="pokeball icon"
                    className="pokeball-icon"
                />
                <div className="select-box--selected-item">
                    {selectedItem}
                </div>
                <div className="select-box--arrow">
                    <img 
                        src={arrowUpSvg}
                        alt="arrow up icon"
                        className={`${DropdownIsOpen
                            ? "select-box--arrow-up"
                            : "select-box--arrow-down"
                            }`} 
                        />
                </div>

            </div>
            <div className={"select-box--items"}>
                            
                {itemsSorting.map(item => {
                    return (
                        <div
                            key={item.id}
                            onClick={() => {
                                
                                if(item.value !== selectedItem){
                                    setSelectedItem(item.value);
                                    switch(item.value){
                                        case "Lowest Number":
                                            dispatch(sortingFromLowestNumber(pokemonList));
                                            break;
                                        case "Highest Number":
                                            dispatch(sortingFromHighestNumber(pokemonList));
                                            break;
                                        case "A-Z":
                                            dispatch(sortingFromAToZ(pokemonList));
                                            break;
                                        case "Z-A":
                                            dispatch(sortingFromZToA(pokemonList));
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                
                                
                            }}
                            className={selectedItem === item.value ? "selected" : ""}
                        >
                            {item.value}
                        </div>
                    )
                })}


            </div>

        </div>
    )

}

export default SortPokemonDropdown;