import React from 'react';
import './cart.css'

const Cart = ({cart}) => {
    
    return (
        <div>
            <h2>Order summary</h2>
            <h2>silected item: {cart.length} </h2>
        </div>
    );
};

export default Cart;