import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Register.css'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Box, Button, styled, TextField } from '@mui/material';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { toast } from 'react-toastify';
import { Context } from '../../contexts/UrlContext';


const Register = () => {
    const navigate = useNavigate()
    const { createAccountWithEmail } = useContext(Context)
    const handleRegister = async (e) => {
        e.preventDefault()
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.pass.value;
        const confirmPassword = e.target.confirmPass.value;
        const phoneNumber = e.target.mobile.value;
        if (password !== confirmPassword) {
            toast.error(`Password and Confirm Password doesn't matched`)
            return;
        }
        const { success, message } = await createAccountWithEmail(email, password, displayName, phoneNumber);
        if (success) {
            navigate('/')
            toast.success(message);
            e.target.reset();
        }
        else {
            toast.error(message);
        }
    }
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',

    }
    const MYTEXTFIELD = styled(TextField)({
        margin: '0.8em',

    })
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
            <Header />
            <section className='register'>
                <h1 style={{ color: '#4c3aba', marginBottom: '10px' }}>Please Register</h1>
                <div className='register-form'>
                    <form style={formStyle} onSubmit={handleRegister}>
                        <MYTEXTFIELD required={true} name='name' type="text" label="Name" variant="outlined" />
                        <MYTEXTFIELD required={true} type="email" name='email' label='Email' variant='outlined' />
                        <MYTEXTFIELD required={true} type="password" name='pass' label='Password' variant='outlined' />
                        <MYTEXTFIELD required={true} type="password" name='confirmPass' label='Confirm Password' variant='outlined' />

                        <Button sx={{ margin: '0.5em 0' }} variant='contained' type='submit'>Register</Button>
                    </form>
                </div>
                <Box sx={{ margin: '0.5em 0' }}>
                    <p><small>Already have  an account ? <Link to={'/login'}>Login</Link></small></p>
                </Box>
                <div className="socialLogin">
                    <SocialLogin />
                </div>

            </section>
            <Footer />
        </Box>
    );
};

export default Register;
