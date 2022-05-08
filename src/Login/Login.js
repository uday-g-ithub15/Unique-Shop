import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <section className='login'>
            <div className='form'>
            <form >
                <input type="email" placeholder='Enter your email'     />
             <input type="password" placeholder='Enter your password'  />
            <input type="submit" value="Login" />
            </form>
            </div>
            <div>
                <p><small>Have not an account ? <Link className='toggle-link' to={'/register'}>Register</Link></small></p>
            </div>
            <div className="socialLogin">

            </div>

        </section>
    );
};

export default Login;