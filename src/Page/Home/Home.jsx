import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

    const [ userData, setUserData ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getUserData();
    }, [])



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
        navigate('/login')
    }

    const navigateToList = () => {
        navigate('/list')
    }

    return(
        <div>
            Home page
            <button onClick={navigateToList}>
                List
            </button>
            <p>{userData.email}</p>
            <button onClick={logout}>
                Deconnexion
            </button>

        </div>
    )
}

export default HomePage;