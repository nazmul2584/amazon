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
        console.log(quantity)
    }
    const tex = parseFloat((total * 0.1).toFixed(2));
    const grntotal = total+shipping+tex;


    return (
        <div className='cart'>
            <p>Order summary</p>
            <p>Silected item: {quantity} </p>
            <p> Price: {total} </p>
            <p>total shipping: {shipping} </p>
            <p>tax: {tex} </p>
            <p> total cost: {grntotal} </p>
        </div>
    );
};

export default Cart;