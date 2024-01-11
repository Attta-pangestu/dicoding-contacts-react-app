import React from "react";
import LoginInput from "../components/LoginInput";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

// utlis
import { login } from "../utils/api";

function LoginPage({onSuccessLoginHandler}){
    const navigate = useNavigate();

    async function onLoginHandler(stateLoginParams) {
        const {error , data}= await login({...stateLoginParams});
        if(!error) {
            onSuccessLoginHandler(data);
            navigate('/');
        }
    }

    return(
        <section className="login-page">
            <h2>Selamat Datang, silakan login terlebih dahulu </h2>
            <LoginInput login={onLoginHandler} />
        </section>
    );
}

LoginPage.propTypes = {
    onSuccessLoginHandler : PropTypes.func.isRequired
}



export default LoginPage;