import CollectionPreview from '../collection_preview/collection_preview.components'
import React from 'react'
import './shopPreview.styles.scss'

import {connect} from 'react-redux'
import {selectObjShop} from '../../redux/shop/shopSelectors'


class ShopPreview extends React.Component {

    render(){
        const {collections} =  this.props;
    return(
        <div className="shoppreview">
           {
                collections.map(({id, ...otherprops}) => (
                    <CollectionPreview key={id} {...otherprops}  />
                ))
            }
        </div>
    )}
    

        }
const mapStateToPros = state =>({
    collections: selectObjShop(state)
})

export default connect(mapStateToPros)(ShopPreview);