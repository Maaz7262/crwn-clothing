import './App.css';
import Homepage from './pages/homepage';
import HeaderComp from './components/header/header.component';
import Shop from './pages/shop';
import SignInSignUp from './pages/signInsignUp';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import { getDoc } from 'firebase/firestore';
import { auth , createUserProfileDocument} from './firebase/firebase';

import {connect} from'react-redux';
import setCurrentUser from './redux/user/user.action';



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
          <Route path='/shop' element={<Shop />} />
          <Route path='/signin' element={<SignInSignUp />} />

        </Routes>
    </div>
  );
  }
}

const setDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,setDispatchToProps)(App);
