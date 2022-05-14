import React from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,signedUser,signedLoading,signedError
        
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
      const[user,loading] = useAuthState(auth)
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/' ;
      const handleLogin =async (e) => {
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.pass.value;
          await signInWithEmailAndPassword(email, password)
        }
          if(user || signedUser){
            navigate(from, {replace:true})
          }
          if(loading || signedLoading){
              return <Loading/>
          }
const resetLink =async () =>{
    const email = window.prompt('Enter your email .')
    if( email){
        toast('Reset link sent to your email')
        await sendPasswordResetEmail(email);
    }
    else{
        toast('Please give email address for reset password')
    }
}
        
    return (
        <section className='login'>
            <div className='form'>
            <h1 style={{color:'#4C43BC'}}>Please Login</h1>
            <form onSubmit={handleLogin}>
                <input name='email' type="email" placeholder='Enter your email'     />
             <input name='pass' type="password" placeholder='Enter your password'  />
             {
                 signedError && <p style={{color:'red',textAlign:'center',marginBottom:'5px'}}>{signedError?.code}</p>
             }
            <input type="submit" value="Login" />
            </form>
            </div>
            <div>
                <p><small> <button style={{border:'none', backgroundColor:'#ffffff', color:'#4c3aba',cursor:'pointer'}} onClick={resetLink}>Forgot Password</button></small></p>
                <p><small>Have not an account ? <Link className='toggle-link' to={'/register'}>Register</Link></small></p>
            </div>
            <div className="socialLogin">
                <SocialLogin/>
            </div>
             <ToastContainer/>
        </section>
    );
};

export default Login;
