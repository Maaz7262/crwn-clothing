import React from "react";

import './signInsignUp.styles.scss'
import SignIn from "../components/forms/signin.component";
import SignUp from "../components/forms/signup.component";


const SignInSignUp = ()=> {
    return(
        <div className="signin-signup">
           <SignIn />
           <SignUp />
        </div>
        
    )
}
export default SignInSignUp;