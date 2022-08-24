import React from "react";
import { Link } from "react-router-dom";
import "./menuitem.styles.scss";

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
     
    return(
        <div  
        className= {`${size} menu-item`} 
        style={{
            backgroundImage: `url(${imageUrl})`  }}
        >
            <Link to={linkUrl} >
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div></Link> 
        </div>
    )
}
export default MenuItem;