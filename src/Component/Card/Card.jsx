import React from 'react';
import './Card.css'

const Card = ({name, type1, type2, abilities1, abilities2, order, sprite }) => {

    function getBackground(type) {
        switch (type){
            case 'grass':
                return '#7AC74C';
            case 'fire':
                return '#EE8130';
            case 'water':
                return '#6390F0';
            case 'normal':
                return '#A8A77A';
            case 'fighting':
                return '#C22E28';
            case 'flying':
                return '#A98FF3';
            case 'poison':
                return '#A33EA1';
            case 'electric':
                return '#F7D02C';
            case 'ground':
                return '#E2BF65';
            case 'psychic':
                return '#F95587';
            case 'rock':
                return '#B6A136';
            case 'ice':
                return '#96D9D6';
            case 'bug':
                return '#A6B91A';
            case 'dragon':
                return '#6F35FC';
            case 'ghost':
                return '#735797';
            case 'dark':
                return '#705746';
            case 'steel':
                return '#B7B7CE';
            case 'fairy':
                return '#D685AD';
            default:
                return 'grey'
        }
    }

    function getBackgroundRGBA(type) {
        switch (type){
            case 'grass':
                return 'rgba(122, 199, 76, 0.8)';
            case 'fire':
                return 'rgba(238, 129, 48, 0.8)';
            case 'water':
                return 'rgba(99, 144, 240, 0.8)';
            case 'normal':
                return 'rgba(168, 167, 122, 0.8)';
            case 'fighting':
                return 'rgba(194, 46, 40, 0.8)';
            case 'flying':
                return 'rgba(169, 143, 243, 0.8)';
            case 'poison':
                return 'rgba(163, 62, 161, 0.8)';
            case 'electric':
                return 'rgba(247, 208, 44, 0.8)';
            case 'ground':
                return 'rgba(226, 191, 101, 0.8)';
            case 'psychic':
                return 'rgba(249, 85, 135, 0.8)';
            case 'rock':
                return 'rgba(182, 161, 54, 0.8)';
            case 'ice':
                return 'rgba(150, 217, 214, 0.8)';
            case 'bug':
                return 'rgba(166, 185, 26, 0.8)';
            case 'dragon':
                return 'rgba(111, 53, 252, 0.8)';
            case 'ghost':
                return 'rgba(115, 87, 151, 0.8)';
            case 'dark':
                return 'rgba(112, 87, 70, 0.8)';
            case 'steel':
                return 'rgba(183, 183, 206, 0.8)';
            case 'fairy':
                return 'rgba(214, 133, 173, 0.8)';
            default:
                return 'grey'
        }
    }
    return (
        <div className={'pokemonCard'} style={{backgroundColor: getBackgroundRGBA(type1)}}>
            <div className={'pokemon__sprite'} style={{backgroundColor: getBackground(type1)}}>
                <img src={sprite} alt="" width={100}/>
            </div>
            <div className={'pokemon__infos'}>
                <p>#{order}</p>
                <h2>{name}</h2>
            </div>
            <div className={'types'}>
                <div style={{backgroundColor: getBackground(type1)}}>
                    {type1}
                </div>
                {type2 !== '' ?
                    <div style={{backgroundColor: getBackground(type2)}}>
                        {type2}
                    </div> : ''}

            </div>
            <div className={'pokemon__abilities'}>
                <p><span>Current: </span>{abilities1}</p>
                <p><span>Hide: </span> {abilities2}</p>
            </div>

        </div>
    );
};

export default Card;