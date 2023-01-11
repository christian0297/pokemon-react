import { LazyLoadImage } from 'react-lazy-load-image-component';

const CardPokemon = ({
    name, 
    id, 
    officialArtwork, 
    primaryType, 
    secondaryType}) => {
    
    // const colorsType = {
    //     fire: '#FDDFDF',
    //     grass: '#DEFDE0',
    //     electric: '#FCF7DE',
    //     water: '#DEF3FD',
    //     ground: '#f4e7da',
    //     rock: '#d5d5d4',
    //     fairy: '#fceaff',
    //     poison: '#977FEA',
    //     bug: '#f8d5a3',
    //     dragon: '#97b3e6',
    //     psychic: '#eaeda1',
    //     flying: '#F5F5F5',
    //     fighting: '#E6E0D4',
    //     normal: '#F5F5F5'
    // };

    return (
        <>
                <div className="pokemon"> {/*style={{backgroundColor: colorsType[primaryType]}}*/}
                    <div className="img-container">
                        <LazyLoadImage 
                            src={officialArtwork} 
                            alt={name}
                            className="pokemon-card"
                            height={108}
                            width={108}
                            effect="blur"
                        />
                    </div>
                    <div className="info">
                        <span className="number">{`#${id.toString().padStart(3, '0')}`}</span>
                        <h3 className="name">{name[0].toUpperCase() + name.slice(1)}</h3>
                        <small> {/*togliere small e sistemare i fonts*/}
                            <div className={`pill background-color-${primaryType}`}>
                                {primaryType}
                            </div>
                            {secondaryType === null ? null :
                                <div className={`pill background-color-${secondaryType}`}>
                                    {secondaryType}
                                </div>}
                        </small>
                    </div>
                </div>
        </>
    )
}

export default CardPokemon;