import React, { useEffect, useState } from 'react';
import Cart from '../../cart/Cart';
import Product from '../product/Product';
import './Shope.css'

const Shop = () => {
    const [products,setproducts]=useState([]);
    const [cart,setcart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
        
    },[])

    const addtocart = (product) =>{
        console.log(product)
        const newcart = [...cart,product];
        setcart(newcart);
    }
    return (
        <div className='shop-container'>
          
            <div className="product-container">
                
                   
                   {
                    products.map(product=> <Product 
                        key= {product.id}
                        product= {product}
                        addtocart = {addtocart}
                        
                        ></Product> )
                   }
            </div>
            <div className="card-container">
            <Cart  cart = {cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;