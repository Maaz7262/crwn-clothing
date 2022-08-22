import Input from "../inputs/input.component";
import CustomButton from "../custom-button/custombutton.component";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, createUserProfileDocument} from "../../firebase/firebase";
import './signup.styles.scss'

class SignUp  extends React.Component{

    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpass: ''
        }
    }

    handlesubmit = async (event) =>{
        event.preventDefault();
        const {email,password, confirmpass,displayName} = this.state;
        if (password !== confirmpass){
            return alert('Password Doesn\'t Match')
        }
        
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          createUserProfileDocument(user,{displayName})
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage)
          });
        
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmpass: ''})
    }

    handlechange = async (event) => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    render(){
        const {displayName,email,password,confirmpass} = this.state
        return(
            <div className="sign-up">
                <h3>You Don't Have Any Account?</h3>
                <span>Sign Up With Email And Password!</span>
                
                <form onSubmit={this.handlesubmit}>
                    <Input
                    name="displayName"
                    type= "text"
                    label= "User Name"
                    onChange={this.handlechange}
                    value = {displayName}
                    />
                    <Input
                    name="email"
                    type= "email"
                    label= "Email"
                    onChange={this.handlechange}
                    value = {email}
                    />

                    <Input
                    name="password"
                    type= "password"
                    label= "Password"
                    onChange={this.handlechange}
                    value = {password}
                    />

                    <Input
                    name="confirmpass"
                    type= "password"
                    label= "Confirm Password"
                    onChange={this.handlechange}
                    value = {confirmpass}
                    />
                <CustomButton type='submit'>Sign Up</CustomButton>

                </form>

                 </div>
        )

    }
}

export default SignUp;