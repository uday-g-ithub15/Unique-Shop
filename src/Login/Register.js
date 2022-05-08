import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Login = () => {
    return (
        <section className='register'>
            <div className='register-form'>
            <form >
                <input required  type="text" placeholder='Enter your name'     />
             <input required  type="tel" placeholder='Enter your mobile'  />
                <input required  type="email" placeholder='Enter your email'     />
             <input required  type="password" placeholder='Enter your password'  />
             <input required  type="password" placeholder='Enter your confirm password'  />
            <div className="terms">
            <input type="checkbox"/> <span>Accept our <Link to={'/terms'}>terms and conditions</Link></span>
            </div>
            <input required  type="submit" value="Register" />
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