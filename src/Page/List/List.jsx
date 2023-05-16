// import axios from "axios";
// import {useEffect, useState} from "react";
// import './list.css'
//
//
//
// const ListPage = () => {
//
//
//     const [ pokemonData, setPokemonData ] = useState([]);
//     const [nextPage, setNextPage] = useState(1);
//
//     useEffect(() => {
//         getPokemonData();
//     }, [])
//
//     const getPokemonData = (page = 1) => {
//
//         console.log('1 : ' + nextPage)
//
//         const userToken = localStorage.getItem('AUTH_TOKEN')
//         axios.get('http://127.0.0.1:8000/api/pokemon?page='+page, {
//             headers: {
//                 Authorization: 'Bearer ' + userToken //the token is a variable which holds the token
//             }
//         })
//             .then(response => {
//                 console.log(response.data);
//                 setPokemonData([...pokemonData,...response.data['hydra:member']])
//
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//
//     }
//
//
//     return(
//         <div className={"background"}>
//             List page
//             {pokemonData ? pokemonData?.map((item) => (
//                 <div key={item.id}>
//                     <p>{item.name}</p>
//                     <p>{item.types[0].name}</p>
//                     <p>{item.types[1] ? item.types[1].name : ''}</p>
//
//                     <p>{item.abilities[0].name}</p>
//                     <p>{item.abilities[1] ? item.abilities[1].name : ''}</p>
//                     <p>#{item.theOrder}</p>
//                     <img src={item.sprite} alt=""/>
//                 </div>
//             )) : 'chargement'}
//
//             <button onClick={() => {setNextPage(nextPage + 1); console.log('2 : ' + nextPage);  getPokemonData(nextPage + 1);}}>charger plus</button>
//         </div>
//     )
// }
//
// export default ListPage;