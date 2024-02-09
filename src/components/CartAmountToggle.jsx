import React from 'react'
import {  FaMinusCircle, FaPlusSquare } from 'react-icons/fa'

const CartAmountToggle = ({amount, setDecrease, setIncrease }) => {
  return (
    <div className='cart-button'>
        <div className="amount-toggle">
            <button onClick={() => setDecrease()}>
                <FaMinusCircle />
            </button>
            <div className='amount-style'>{amount}</div>
            <button onClick={() => setIncrease()}>
                <FaPlusSquare />
            </button>
        </div>
    </div>
  )
}

export default CartAmountToggle