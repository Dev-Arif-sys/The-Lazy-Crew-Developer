import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Shop.css'

const Shop = () => {
    const [persons,setPerson]=useState([]);
    const [cartPerson, setCartPerson]=useState([]);
    useEffect(()=>{
        fetch("./persons.JSON")
        .then(res=>res.json())
        .then(data=>setPerson(data));
    },[])
    const handleAddtoCart=(person)=>{
       const newCart=[...cartPerson,person];
       setCartPerson(newCart);
    }
    console.log(cartPerson);
    return (
        <div className="shop-container">
            <div className="person-container">
              {
                  persons.map(person=> <Person
                     person={person}
                     addToCart={handleAddtoCart}
                     ></Person>)
              }
            </div>
            <div className="cart-container">
               <Cart cartPerson={cartPerson}></Cart>
            </div>
        </div>
    );
};

export default Shop;