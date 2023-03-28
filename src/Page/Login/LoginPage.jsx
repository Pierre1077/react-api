import LoginForm from "../../Component/LoginForm/LoginForm";
import {useState} from "react";
import axios, * as others from 'axios';
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
    const [ formSubmitting, setFormSubmitting ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (credentials) => {
        setFormSubmitting(true);
        try {

            console.log(credentials.login)
            console.log(credentials.password)
            //TODO Make Login call
            axios.post('http://127.0.0.1:8000/api/login_check', {username: 'pierre', 'password': 'azerty'})
                .then(response => {
                    console.log(response.data);
                    localStorage.setItem('AUTH_TOKEN', response.data.token);
                    const authToken = localStorage.getItem('AUTH_TOKEN');
                    console.log(authToken)
                    if(authToken){
                        navigate('/Home');
                    }
                })
                .catch(error => {
                    console.log(error);
                });


        } catch (error) {
            console.log(error);
            // message
        } finally {
            setFormSubmitting(false);
        }
    };

    return(
        <div>

            <LoginForm
                handleSubmit={handleSubmit}
            />

        </div>
    )
}

export default LoginPage;