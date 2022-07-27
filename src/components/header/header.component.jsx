import React from "react";
import { ReactComponent as Logo } from "../../assets/crown-logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import './header.styles.scss'

const HeaderComp = ({user}) => {

    return(
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/contact'>
                    CONTACT
                </Link>
                {
                    user?
                <div className="option" onClick={()=> auth.signOut()}>Sign out</div>
                :
                <Link className="option" to='/signin' >Sign in</Link>
                }


            </div>
        
        </div>
    )
}

export default HeaderComp;