import './checkOutItem.styles.scss'
import {connect} from 'react-redux'

import { removeItem,addItem,decQty } from '../../redux/cart/cart.action'

const CheckOutItem = ({removeItem,addItem,increaseQty,decQty}) => {
   const {name, imageUrl, price, quantity} = addItem;
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="img" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> decQty(addItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> increaseQty(addItem)}>&#10095;</div>
                </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={()=>removeItem(addItem)}>&#10005;</div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItem(item)),
    increaseQty : item => dispatch(addItem(item)),
    decQty: item => dispatch(decQty(item))
})

export default connect (null, mapDispatchToProps)(CheckOutItem);