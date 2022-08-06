import React from "react";
import "./cart.styles.scss"

import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import {cartAction} from "../../redux/cart/cart.action";
import { selectItemsCount } from "../../redux/cart/cart.selector";
import {connect} from "react-redux";


const Cart = ({setHidden, count})=>{
    return(
        <div className="cart-icon" onClick={setHidden}>
            <div className="shopping-icon">
                <CartIcon />
            </div>
            <span className="item-count">{count}</span>
        </div>
    )
}
const mapStateToProps = (state)=> ({
    count: selectItemsCount(state)
})
const mapDispatchToState = dispatch =>({
    setHidden : ()=> (dispatch(cartAction()))
})
export default connect(mapStateToProps,mapDispatchToState) (Cart);