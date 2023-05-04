import axios from "axios";
import {useEffect, useState} from "react";
import './list.css'



const ListPage = () => {

    const [ pokemonData, setPokemonData ] = useState(null);
    useEffect(() => {
        getPokemonData();
    }, [])

    const getPokemonData = () => {
        const userToken = localStorage.getItem('AUTH_TOKEN')
        axios.get('http://127.0.0.1:8000/api/pokemon', {
            headers: {
                Authorization: 'Bearer ' + userToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                console.log(response.data);
                setPokemonData(response.data['hydra:member'])
            })
            .catch(error => {
                console.log(error);
            });
    }

    return(
        <div className={"background"}>
            List page
            {pokemonData?.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>#{item.theOrder}</p>
                    <img src={item.sprite} alt=""/>
                </div>
            ))}

        </div>
    )
}

export default ListPage;