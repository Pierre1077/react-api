// Genral imports
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Input from "../Input/Input";
// Style imports
import './LoginForm.css';

const LoginForm = ({handleSubmit}) => {

    const [credentials, setCredentials] = useState({
        login: '',
        password: ''
    });

    const handleChange = ({key, value}) => {
        setCredentials((prevState) => {
            return {...prevState, [key]: value};
        });
    };

    const handleLoginChange = (event) => {
        handleChange({
            key: 'login',
            value: event.currentTarget.value
        });
    };

    const handlePasswordChange = (event) => {
        handleChange({
            key: 'password',
            value: event.currentTarget.value
        });
    };

    const handleSubmitForm = async(event) => {
        event.preventDefault();
        await handleSubmit(credentials);
    };
    //TODO Add Credentials Inputs (With Input Component)
    return (
        <div>

            <h2 className={'login-title'}>Login</h2>
            <form id="login-form" onSubmit={handleSubmitForm} className={'login-form'}>

                <div className='credentials-and-password-container'>
                    <Input
                        label={'Username'}
                        placeholder={'bep@bep.com'}
                        type={'text'}
                        value={credentials.login}
                        handleChange={handleLoginChange}/>
                    <Input
                        label={'Password'}
                        placeholder={'password'}
                        type={'password'}
                        value={credentials.password}
                        handleChange={handlePasswordChange}/>

                    <div className={'send__wrapper'}>
                        <button
                            className='login-page-call-to-action'
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default LoginForm;
