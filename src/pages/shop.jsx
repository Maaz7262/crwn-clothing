import React from "react";
import { Outlet} from 'react-router-dom'
import {connect} from 'react-redux'


import './shop.styles.scss'
import { getFirebaseDataAsync } from "../redux/shop/shopActions";
import { isFetching } from "../redux/shop/shopSelectors";

class Shop extends React.Component  {
    
    componentDidMount(){
        const {FirebaseDataAsync} = this.props;
        FirebaseDataAsync();
        
    }

    render(){
        const {Loading} = this.props
        console.log(Loading)
    return(
            <div className="shop-page">
               <Outlet context={{Loading:!Loading}}/>
            </div>
        )
    }

}
const mapDispatchtoProps = dispatch =>({
    FirebaseDataAsync: ()=>dispatch(getFirebaseDataAsync())
})
const mapStateToProps = state => ({
    Loading: isFetching(state)
})

export default connect(mapStateToProps,mapDispatchtoProps)(Shop);