import React, { useEffect, useState } from 'react';
import { addToDb, getStorCard } from '../../../utilities/fakedb';
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

    useEffect(()=>{
        const storCard = getStorCard();
        const saveCart = [];
        for (const id in storCard){
            const addedproduct = products.find(product => product.id===id);
            if(addedproduct){
                const quantity = storCard[id];
                addedproduct.quantity=quantity;
                saveCart.push(addedproduct);
                console.log(addedproduct);
            }
        }
        setcart(saveCart);
    },[products])

    const addtocart = (silectedproduct) =>{
        const exists = cart.find(product => product.id===silectedproduct.id);
        let newcart = [];
        if(!exists){
            silectedproduct.quantity=1;
            newcart = [...cart,silectedproduct];
        }
        else{
            const rest = cart.filter(product =>product.id !==silectedproduct );
            exists.quantity= exists.quantity+1;
            newcart = [...rest,exists];
        }
        setcart(newcart);
        addToDb(silectedproduct.id);
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