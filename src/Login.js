import React from 'react';
import './Login.css';
import {auth, provider} from "./farebase";

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => alert(error.message));

    };
  return (
    <div className='login'>
        <div className='login_logo'>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032" alt="" />
        <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
        </div>
        <button type='submit' onClick={signIn}>SignIn</button>
    </div>
  )
}

export default Login