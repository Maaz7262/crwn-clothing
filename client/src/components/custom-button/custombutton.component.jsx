import React from "react";

import './custombutton.styles.scss'

const CustomButton = ({children, iswithgoogle, inverted, ...otherprops})=> {
    
    return(
        
            <button className={`${ inverted ? 'inverted':''} ${ iswithgoogle ? 'google':''} custom-button`} 
             {...otherprops} >{children}</button>
        
    )
}

export default CustomButton;