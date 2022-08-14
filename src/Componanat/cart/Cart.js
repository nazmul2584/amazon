import React from 'react';
import './cart.css'

const Cart = ({cart}) => {
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tex = parseFloat((total * 0.1).toFixed(2));
    const grntotal = total+shipping+tex;


    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <h2>silected item: {quantity} </h2>
            <p>total price: {total} </p>
            <p>total shinng: {shipping} </p>
            <p>tax: {tex} </p>
            <h3>grant total: {grntotal} </h3>
        </div>
    );
};

export default Cart;