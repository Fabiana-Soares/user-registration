import React from 'react';
import { Link } from 'react-router-dom';
import logoIMG from '../../assets/logoNex.png';
import './home.css';

export const Home = () => {
    
    return (
        
        <div className="home-container">
            <header>
                <img src={logoIMG} alt='Nex Digital'/>
                
                <span>Bem vindo! </span>

                <Link className='button' to='/product'>Cadastrar novo produto</Link>
                
            </header>

            
        </div>
                
    )
}