import React from "react";
import { useOutletContext } from "react-router-dom";

import './spinner.styles.scss'

const withSpinner = (ToWrap) => {
    
    const Spinner  = ()=> {
        const {Loading} = useOutletContext();
         return Loading? (
            <>
                <div className="spinner-container">
                    <div className="loading-spinner"></div>
                </div>
            </>
         ):(<ToWrap  />);
           
    };
    return Spinner;
}

export default withSpinner;
