import React from 'react';
import logo from '../Imagenes/logo.png';

export default function Header(){
    return(
        <header className="center">
            <img src={logo} alt="" />
        </header>
    )
}