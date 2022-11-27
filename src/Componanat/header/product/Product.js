import React from 'react';

import './Product.css'


const Product = (props) => {
   
    const {name,price,img,seller,ratings}= props.product
    // const {addtocart,product}=props;
    return (
        <div className='poduct'>
           <img src= {img} alt=''></img>
           <div className='info'>
           <h2 className='p-name'>{name} </h2>
           <h5>price: {price} </h5>
           <p><small> {seller} </small></p>
           <p><small>Ratting:  {ratings} </small></p>
           </div>
           <button onClick={ ()=> props.addtocart(props.product)} className='btn-card'>
            <p>Add to cart</p>
           </button>
           
           </div>
    );
};

export default Product;