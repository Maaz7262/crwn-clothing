import './checkout.styles.scss'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CustomButton from '../components/custom-button/custombutton.component'

import CheckOutItem from '../components/checkOutItem/checkOutItem.components'
import { selectCartTotal, selectAddItem } from '../redux/cart/cart.selector'
import {initialState} from '../redux/cart/cart.action'
import axios from 'axios'


const CheckOut = ({cartItem, cartTotal, dispatch}) => {
    
    const payWithStripe = async()=>{
       await axios.post('create-checkout-session',{
            id: 1,
            cartTotal: cartTotal
        }).then(res =>{
            console.log(res.data.session);
            if (res.data) {
                
                window.location.href =res.data.session;
                dispatch(initialState());
            }
            
        }).catch(e =>{
            console.log(e.message)
        })
    }
        
    
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'> 
                    <span>Price</span>
                </div>
                <div className=''>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItem.map( item => <CheckOutItem key={item.id} addItem={item}/>)
            }
            <div className='total'>
                {cartItem.length ? 
                <span>TOTAL: ${cartTotal}</span>:''}
            </div>
            <p className='errorMessage'></p>
            {cartItem.length? 
                <CustomButton onClick= {payWithStripe} >Pay With Stripe</CustomButton>: <><h2>Cart Empty</h2></> }
            <div className='test-card'><h3>Please use the following details for your payment</h3>
            <span className='card'>4242 4242 4242 4242</span><br />
            <span>01/23</span> <span>CVC: 123</span>
            </div>
        </div>
    )
}

const mapStateToPros = createStructuredSelector({
    cartItem: selectAddItem,
    cartTotal: selectCartTotal
})

export default connect(mapStateToPros) (CheckOut);
