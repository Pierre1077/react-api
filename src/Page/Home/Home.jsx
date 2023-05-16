import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Component/Card/Card";
import './Home.css'


const HomePage = () => {

    const [ userData, setUserData ] = useState(false);
    const navigate = useNavigate();
    const [ pokemonData, setPokemonData ] = useState([]);
    const [nextPage, setNextPage] = useState(1);

    useEffect(() => {
        getUserData();
        getPokemonData();
    }, [])

    const getPokemonData = (page = 1) => {


        const userToken = localStorage.getItem('AUTH_TOKEN')
        axios.get('http://127.0.0.1:8000/api/pokemon?page='+page, {
            headers: {
                Authorization: 'Bearer ' + userToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setPokemonData([...pokemonData,...response.data['hydra:member']])

            })
            .catch(error => {
                console.log(error);
            });

    }

    const getUserData = () => {
        const userToken = localStorage.getItem('AUTH_TOKEN') // TODO Get user from local storage
        let config = {
            headers: {
                header1: userToken,
            }
        }

        axios.get('http://127.0.0.1:8000/api/users/me', {
            headers: {
                Authorization: 'Bearer ' + userToken //the token is a variable which holds the token
            }
        })
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 401) {
                    localStorage.removeItem('AUTH_TOKEN');
                    navigate('/login')
                }
            });
    }

    const logout = () => {
        localStorage.removeItem('AUTH_TOKEN');
        navigate('/')
    }

    const navigateToList = () => {
        navigate('/list')
    }

    return(
        <div>

            <div className={'banner'}>
                <h1 className={'title'}>Hello, <span>{userData.email}</span></h1>
                <div>
                    <button onClick={logout} className={'logout'}>
                        logout
                    </button>
                </div>
            </div>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
                    alt=""
                    width={500}
                    className={'logo'}
                />
            <div className={'list__container'}>

                {pokemonData ? pokemonData?.map((item) => (
                        <Card
                            key={item.id}
                            name={item.name}
                            type1={item.types[0].name}
                            type2={item.types[1] ? item.types[1].name : ''}
                            abilities1={item.abilities[0].name}
                            abilities2={item.abilities[1] ? item.abilities[1].name : ''}
                            order={item.theOrder}
                            sprite={item.sprite}
                        />
                )) : 'chargement'}

            </div>

                <div className={'loadMore'}>
                    {nextPage !== 6 ?
                        <button  onClick={() => {setNextPage(nextPage + 1); getPokemonData(nextPage + 1);}}>
                            charger plus
                        </button>
                        : ''}

                </div>
            </div>
        </div>
    )
}

export default HomePage;