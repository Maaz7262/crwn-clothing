import React from "react";
import CustomButton from "../custom-button/custombutton.component";
import {addItem} from '../../redux/cart/cart.action';
import {connect} from "react-redux";

import './collection_item.styles.scss'

const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl, price} = item;
    return(
        <div className="collection-item">
            <div className="image"
             style={{backgroundImage:`url(${imageUrl})`}} ></div>
             <div className="collection-footer">
                <span className="name">{name}
                </span>
                <span className="price">{price}</span>
            </div>
            <div className="addtoCart" >
            <CustomButton inverted onClick={() =>addItem(item)}>Add to Cart</CustomButton>

            </div>
        </div>
    )
}

const mapDispatchToState = dispatch =>({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToState) (CollectionItem);