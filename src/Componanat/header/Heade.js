import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Heade = () => {
    return (
        <div className='header'>
         <img src= {logo} alt="" />
        <div>
        <a href="/home">home</a>
        <a href="/inventory">inventory</a>
        <a href="/shop">shop</a>
        <a href="about">about</a>
        </div>
        </div>
    );
};

export default Heade;