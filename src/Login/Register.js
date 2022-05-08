import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'

import './Register.css'
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const[user] = useAuthState(auth)
    const [passError, setPassError] = useState('')
    let check ;
      const handleRegister =async (e) => {
          e.preventDefault()
          const displayName = e.target.name.value;
          const email = e.target.email.value;
          const password = e.target.pass.value;
          const confirmPassword = e.target.confirmPass.value;
          const phoneNumber = e.target.mobile.value;
          check = e.target.check.checked;
        if(password !== confirmPassword){
            setPassError(`Password and Confirm Password doesn't matched`)
            return ;
        }
        else{
            setPassError('');
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({displayName, phoneNumber})
        }
        if(loading){
            <Loading/>
        }
        e.target.reset();
    }
    return (
        <section className='register'>
            <div className='register-form'>
            <form onSubmit={handleRegister}>
                <input required type="text" name='name' placeholder='Enter your name'     />
             <input required  type="tel" name='mobile'  placeholder='Enter your mobile'  />
                <input required  type="email" name='email'  placeholder='Enter your email'     />
             <input required  type="password" name='pass' placeholder='Enter your password'  />
             <input required  type="password" name='confirmPass'  placeholder='Enter your confirm password'  />
             <p style={{color:'red',textAlign:'center'}}>{passError}</p>
            <div className="terms">
            <input name='check' type="checkbox" /> <span>Accept our <Link to={'/terms'}>terms and conditions</Link></span>
            </div>
            <button disabled={ check}>Register</button>
            </form>
            </div>
            <div>
                <p><small>Already have  an account ? <Link to={'/login'}>Login</Link></small></p>
            </div>
            <div className="socialLogin">
            </div>

        </section>
    );
};

export default Login;