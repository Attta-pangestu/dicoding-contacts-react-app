import React from "react";
import { Link, useNavigate } from "react-router-dom";

import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";

function RegisterPage({onLoginHandler}){
    const navigate = useNavigate();

    async function onRegisterHandler(registerStateInput) {
        const { error } =  await register({...registerStateInput}); 
        if(!error) {
            navigate('/');
        }
    }
    
    return(
        <section className="register-page">
            <h2>Silakan masukan identitas kontak</h2>
            <RegisterInput register={onRegisterHandler}  />
            <p>Sudah mendaftar? <Link to="/">Masuk</Link></p>
        </section>
    );
}



export default RegisterPage;