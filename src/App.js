import './App.css';
import Homepage from './pages/homepage';
import HeaderComp from './components/header/header.component';
import Shop from './pages/shop';
import SignInSignUp from './pages/signInsignUp';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import { getDoc } from 'firebase/firestore';
import { auth , createUserProfileDocument} from './firebase/firebase';
//import {userPorfile} from '../src/firebase/firebase.utils'


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async(userAuth)=>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        const snapshot = await getDoc(userRef);

        this.setState({
          currentUser:{
            ...snapshot.data()
          }
        }, ()=> {console.log(this.state)})
      }
      else
        this.setState({ currentUser: null})
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div>
    <HeaderComp user={this.state.currentUser}/> 
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/signin' element={<SignInSignUp />} />

        </Routes>
    </div>
  );
  }
}

export default App;
