import './App.css';
import Homepage from './pages/homepage';
import HeaderComp from './components/header/header.component';
import Shop from './pages/shop';
import SignInSignUp from './pages/signInsignUp';
import CheckOut from './pages/Checkout';
import ShopPreview from "./components/shopPreview/shopPreview.components"
import CategoryPage from "./pages/Category";
import withSpinner from './components/withSpinner/spinner.component';

import { Routes, Route , Navigate} from 'react-router-dom'
import React from 'react';
import { getDoc } from 'firebase/firestore';
import { auth , createUserProfileDocument} from './firebase/firebase';



import {connect} from'react-redux';
import setCurrentUser from './redux/user/user.action';
import { selectUser } from './redux/user/user.selector';



const ShopPreviewSpinner = withSpinner(ShopPreview);
const CategoryPageSpinner = withSpinner(CategoryPage);

class App extends React.Component {

  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async(userAuth)=>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        const snapshot = await getDoc(userRef);

        this.props.setCurrentUser({
            ...snapshot.data()
          }
        )
      }
      else
        this.props.setCurrentUser(userAuth)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  
  render(){
  return (
    <div>
    <HeaderComp /> 
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<Shop />} >
            <Route index element={<ShopPreviewSpinner   />}/>
            <Route path=':categoryId' element={<CategoryPageSpinner />} />
          </Route>
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='*' element={(<div>404 Page Not Found.</div>)} />
          
          <Route  exact path='/signin' element={ this.props.user? <Navigate to='/' />: <SignInSignUp />} />

        </Routes>
        
    </div>
  );
  }
}

const mapStateToPros = state =>({
  user : selectUser(state)
  
})

const setDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToPros,setDispatchToProps)(App);
