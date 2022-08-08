import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LayoutComponents } from '../../components/LayoutComponents';
//import api from '../../../../Backend/api/index';
import logoIMG from '../../assets/logoNex.png';

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //const history = useHistory();

    //const users = localStorage.getItem('users');

    async function handleRegister(e) {
        e.preventDefault();

        

        
    }

    return (
        <LayoutComponents>
            <form className="login-form" onSubmit={handleRegister}>

                <span className="login-form-title">Criar Conta</span>
                <span className="login-form-title">
                    <img src={logoIMG} alt="Desafio Full Stack" />
                </span>

                <div className="wrap-input">
                    <input 
                        className={name !== "" ? 'has-val input' : 'input'}
                        type ="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
                </div>

                <div className="wrap-input">
                    <input 
                        className={email !== "" ? 'has-val input' : 'input'}
                        type ="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input 
                        className={password !== "" ? 'has-val input' : 'input'}
                        type ="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Senha"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn" type="submit">Cadastrar</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui cadastro? </span>

                    <Link className="txt2" to="/login">
                        Acessar com Email e Senha.
                    </Link>
                </div>
                
            </form>
        </LayoutComponents>    
    )
}