import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoIMG from '../../assets/logoNex.png';
import { LayoutComponents } from '../../components/LayoutComponents';

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <LayoutComponents>
            <section className="form">
                <form className="login-form">

                    <span className="login-form-title">Bem Vindo!</span>
                    <span className="login-form-title">
                        <img src={logoIMG} alt="Desafio Full Stack" />
                    </span>

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
                        <button className="login-form-btn" type="submit">Entrar</button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">Não possui cadastro? </span>

                        <Link className="txt2" to="/register">
                            Não tenho cadastro
                        </Link>
                    </div>
                    
                </form>
            </section>
        </LayoutComponents>        
    )
}