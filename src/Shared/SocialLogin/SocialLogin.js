import React from 'react';
import './SocialLogin.css'
import {FcGoogle} from 'react-icons/fc'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import auth from '../../firebase.init';
const SocialLogin = () => {
  const [signInWithGoogle, user,loading] = useSignInWithGoogle(auth);
  if(loading){
      return <Loading/>
  }
    return (
        <div className='social-login'>
            <p><span><FcGoogle className='google-icon'/></span><button onClick={() => {signInWithGoogle()}}>Log in with Google </button></p>
        </div>
    );
};

export default SocialLogin;