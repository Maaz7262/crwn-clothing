import React from "react";
import CollectionItem from "../collection_item/collection_item.component";
import { Link, useLocation } from "react-router-dom";
import './collection_preview.styles.scss'

const CollectionPreview = ({title, items}) =>{
    let location = useLocation();
    return(

    <div className="collection-preview">
        <Link to={location.pathname+'/'+title.toLowerCase()}><h1 className="title">{title.toUpperCase()}</h1></Link>
        <div className="preview">
            { items.filter((item, idx) => (
                idx<4
            ))
            .map(item => (
                <CollectionItem key={item.id} item={item} />
            ))
            }
        </div>
    </div>
    )
}

export default CollectionPreview;