import pokeballSvg from '../../svgs/pokeball.svg';
import arrowUpSvg from '../../svgs/arrowUp.svg';
import { useState } from 'react';

const FilterPokemonDropdown = ({
    itemsTypeOfPokemon,
    checkedState,
    setCheckedState
}) => {

    const [DropdownIsOpen, setDropdownOpen] = useState(false);
    
    return (
        <div className={`select-box--box dropdown-open-${DropdownIsOpen} filter-dropdown`}>
            <div className="select-box--container" onClick={() => {
                setDropdownOpen(!DropdownIsOpen)
                }
            }>
                <img 
                    src={pokeballSvg}
                    alt="pokeball icon"
                    className="pokeball-icon"
                />
                <div className="select-box--selected-item">
                    Type of Pokemon
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
                            
                {itemsTypeOfPokemon.map((item, index) => {
                    return (
                        <label htmlFor={`checkbox-filter-${(index+1)}`}
                            key={item}
                        >
                            <input type="checkbox"
                                id={`checkbox-filter-${(index+1)}`}
                                checked={checkedState[index]}
                                onChange={() => {
                                       setCheckedState(checkedState.map((item, i) =>
                                            i === index ? !item : item
                                        ));
                                }}
                                />
                            <div className={`dot-type dot-type-${item.toLowerCase()}`}></div>
                            {item}
                        </label>
                    )
                })}

            </div>

        </div>
    )

}

export default FilterPokemonDropdown;