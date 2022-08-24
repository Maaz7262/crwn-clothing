import React from "react";
import { ReactComponent as Logo } from "../../assets/crown-logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import './header.styles.scss'
import Cart from "../cart/cart.components";
import CardDropdown from "../cardDropdown/cardDropdown.components";

//Selectors
import { selectUser } from "../../redux/user/user.selector";
import { cartHidden } from "../../redux/cart/cart.selector";
import {cartAction} from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import {connect} from 'react-redux';


const HeaderComp = ({currentUser, hidden, dispatch}) => {

    const hideCartHandle = (e) => {
        if (!hidden){
            dispatch(cartAction())
        }
    }

    return(
        <div className="header">
            <Link className="logo-container" to='/' onClick={hideCartHandle}>
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to='/shop' onClick={hideCartHandle} >
                    SHOP
                </Link>
                <Link className="option" to='/contact' onClick={hideCartHandle}>
                    CONTACT
                </Link>
                {
                    currentUser?
                <div className="option" onClick={()=> {
                    auth.signOut()
                    if (!hidden){
                        dispatch(cartAction())
                    }
                }
                }>Sign out</div>
                
                :
                <Link className="option" to='/signin' onClick={hideCartHandle} >Sign in</Link>
                }
                <div className="option">
                    <Cart />
                </div>


            </div>
            {
                
                hidden ? null:(<CardDropdown />)   
            }
            

        
        
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectUser,
    hidden: cartHidden
})


export default connect(mapStateToProps) (HeaderComp);