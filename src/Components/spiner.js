import React from 'react';
import spiner from '../Imagenes/spinner.gif';

const Spiner = () => {
    return(
        <img src={spiner} alt="loading" style={{width:'200px', margin:"auto", display:"block"}} />
    )
} ;

export default Spiner;