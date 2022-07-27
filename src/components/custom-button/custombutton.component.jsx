import React from "react";

import './custombutton.styles.scss'

const CustomButton = ({children, iswithgoogle, ...otherprops})=> {
    return(
        
            <button className={`${ iswithgoogle ? 'google':''} custom-button`} 
            {...otherprops} >{children}</button>
        
    )
}

export default CustomButton;