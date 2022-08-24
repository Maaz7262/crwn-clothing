import React from "react";
import "./cartItem.styles.scss"

import {connect} from 'react-redux'
import { removeItem } from "../../../redux/cart/cart.action";

const CartItem = ({item, dispatch }) =>{
    const {name, imageUrl, price, quantity} = item;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div  className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
            </div>
            <div className='remove' onClick={()=>dispatch(removeItem(item))}>&#10005;</div>
            
        </div>
    )
}

export default connect() (CartItem);