import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../components/collection_preview/collection_preview.components";

import './shop.styles.scss'

class Shop extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherprops}) => (
                            <CollectionPreview key={id} {...otherprops}  />
                    ))
                }
            </div>
        )
    }
}

export default Shop;