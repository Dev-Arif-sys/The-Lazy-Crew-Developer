import React from 'react';
import './Cart.css'

const Cart = (props) => {
  let persons=props.cartPerson

  let totalSalary=persons.reduce((prev,curr)=>prev+ parseFloat(curr.balance),0)
    return (
        <div className="cart">
            <div className="total-person">
            <p>Added person:{persons.length}</p>
            total Salary:{totalSalary}
            </div>
              <div>
                  {
                      persons.map(person=><p className="person-name">{person.name}</p>)
                  }
              </div>
        </div>
    );
};

export default Cart;