import React from "react";
import Input from "../inputs/input.component";
import CustomButton from "../custom-button/custombutton.component";
import { signInWithEmailAndPassword } from "firebase/auth";
import { google, auth } from "../../firebase/firebase";
import './signin.styles.scss'

class SignIn extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password : '',
            errorMessage: undefined 
        }
    }

    getSignin = async (email,password) =>{
        await signInWithEmailAndPassword(auth, email, password)
        .then( res => console.log("on success",res))
        .catch( error => {
            console.log(error.message);
            if (error.message.includes("auth/wrong-password")){
                this.setState({ errorMessage: "You Entered Wrong Password"})
            }
            else if (error.message.includes("auth/user-not-found")){
                this.setState({ errorMessage: "You don't have any account"})
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const {email, password} = this.state

        this.getSignin(email, password)

        this.setState({
            email: '',
            password : ''   
        })
    }

    handleChange = (event) =>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }


    render(){
         
        return(
            <div className="sign-in">
                <h3 className="title">Already have an account</h3>
                <span>Sign in with your Email and Password.</span>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                    name='email'
                    handlechange={this.handleChange}
                    type='text'
                    label='email'
                    value = {this.state.email}
                    required
                    />
                    <Input 
                    name='password'
                    handlechange={this.handleChange}
                    type='password'
                    label='password'
                    value = {this.state.password}
                    required
                    />
                    <p className="errorMessage">{this.state.errorMessage ?
                    `*${this.state.errorMessage}`: ''}</p>
                    <div className="btns">

                    <CustomButton type='submit' > Sign in</CustomButton>
                    <CustomButton type='submit' onClick={google}  iswithgoogle > sign in with google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;