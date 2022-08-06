import React from "react";
import { Outlet} from 'react-router-dom'


import './shop.styles.scss'

const Shop =()=> {
    
    return(
            <div className="shop-page">
               <Outlet />
            </div>
        )
    }


export default Shop;