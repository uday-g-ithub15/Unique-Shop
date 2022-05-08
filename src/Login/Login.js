import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        loading,
      ] = useSignInWithEmailAndPassword(auth);
      const handleLogin =async (e) => {
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.pass.value;
          await signInWithEmailAndPassword(email, password)
          if(loading){
              return <Loading/>
          }
      }
    return (
        <section className='login'>
            <div className='form'>
            <form onSubmit={handleLogin}>
                <input name='email' type="email" placeholder='Enter your email'     />
             <input name='pass' type="password" placeholder='Enter your password'  />
            <input type="submit" value="Login" />
            </form>
            </div>
            <div>
                <p><small>Have not an account ? <Link className='toggle-link' to={'/register'}>Register</Link></small></p>
            </div>
            <div className="socialLogin">
                <SocialLogin/>
            </div>

        </section>
    );
};

export default Login;