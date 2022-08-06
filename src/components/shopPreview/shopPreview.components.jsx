import CollectionPreview from '../collection_preview/collection_preview.components'

import './shopPreview.styles.scss'

import {connect} from 'react-redux'
import {selectObjShop} from '../../redux/shop/shopSelectors'


const ShopPreview = ({collections}) =>{
    return(
        <div className="shoppreview">
           {
                collections.map(({id, ...otherprops}) => (
                    <CollectionPreview key={id} {...otherprops}  />
                ))
            }
        </div>
    )
}

const mapStateToPros = state =>({
    collections: selectObjShop(state)
})

export default connect(mapStateToPros)(ShopPreview);