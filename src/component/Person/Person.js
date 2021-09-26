import React from 'react';
import './Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {

    const {name,age,balance,phone,picture,address,company,email}=props.person
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="person">
            <div className="person-img">
                <img src={picture} alt="" />
            </div>
            <div>
                <p><span className="prop-title">name:</span>{name}</p>
                <p><span className="prop-title">age:</span>{age}</p>
                <p><span className="prop-title">company:</span>{company}</p>
                
                <p><span className="prop-title">phone:</span>{phone}</p>
                <p><span className="prop-title">email:</span>{email}</p>
                <p><span className="prop-title">Salary:</span>${balance}</p>
                <div className="cart-btn">
                    <button onClick={()=>{props.addToCart(props.person)}}> {element} Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Person;