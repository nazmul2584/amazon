import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Heade = () => {
    return (
        <div className='header'>
         <img src= {logo} alt="" />
        <div>
        <a href="/shop">HOME</a>
        <a href="/inventory">INVENTORY</a>
        <a href="about">ABOUT</a>
        <a href="/orders">ORDERS</a>

        </div>
        </div>
    );
};

export default Heade;