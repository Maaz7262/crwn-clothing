import './checkout.styles.scss'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import StripeCheckout from 'react-stripe-checkout'
import CustomButton from '../components/custom-button/custombutton.component'

import CheckOutItem from '../components/checkOutItem/checkOutItem.components'
import { selectCartTotal, selectAddItem } from '../redux/cart/cart.selector'

const CheckOut = ({addItem, cartTotal}) => {
    const STRIPE_API_KEY='pk_test_51LTgC4DJs5S1XnDM05ePqHPmLdXy4ZgPSQA6VvO4FOeX6QmQBg8l5fub5hLsqwQBQ31nedR51HQWgH9MWR28q6N400fP1hcgIG'
    const onToken = token => {
        console.log(token)
        alert('Payment Successfull...!')
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
                addItem.map( item => <CheckOutItem key={item.id} addItem={item}/>)
            }
            <div className='total'>
                {addItem.length ? 
                <span>TOTAL: ${cartTotal}</span>:''}
            </div>
            <StripeCheckout 
            allowRememberMe
            shippingAddress
            billingAddress
            currency='USD'
            name="Crown Clothing Pk." // the pop-in header title
            description="Wear Quality" // the pop-in header subtitle
            image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
            ComponentClass="div"
            panelLabel="Pay Now" 
            token={onToken}
            amount={cartTotal * 100} // cents
            stripeKey={STRIPE_API_KEY}
            >
                {addItem.length? 
                <CustomButton>CheckOut Now</CustomButton>: <><h2>Cart Empty</h2></> }
            </StripeCheckout>
        </div>
    )
}

const mapStateToPros = createStructuredSelector({
    addItem: selectAddItem,
    cartTotal: selectCartTotal
})

export default connect(mapStateToPros) (CheckOut);
