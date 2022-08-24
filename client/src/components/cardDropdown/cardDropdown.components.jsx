import React from "react";
import './cardDropdown.styles.scss'
import {connect} from 'react-redux'
import {selectAddItem} from '../../redux/cart/cart.selector'
import { useNavigate } from "react-router-dom";
import {cartAction} from '../../redux/cart/cart.action'

import CartItem from "./cartItem/cartItem.components";
import CustomButton from "../custom-button/custombutton.component";


const CardDropdown = ({addItem, dispatch})=>{
   const navigate = useNavigate();
   
    return(
        <div className="cart-dropdown">
            <div className="cart-items" >
                { addItem.length ?
                    addItem.map(item => (<CartItem key={item.id} item= {item}/>))
                    :
                    <><div className="empty">Your Cart Is Empty.</div></>
                }
            </div>
            
            <CustomButton onClick= {()=>{ navigate('/checkout');
             dispatch(cartAction());}}> go to checkout </CustomButton>

        </div>
    )
}

const mapStateToPorps = (state) => ({
    addItem: selectAddItem(state)
})
export default connect(mapStateToPorps) (CardDropdown);