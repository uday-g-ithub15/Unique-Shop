import { Box, Button, styled, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css'
import { Context } from '../../contexts/UrlContext';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { loginAccount } = useContext(Context)
    const handleLogin = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.pass.value;
        const { success, message } = await loginAccount(email, password)
        if (success) {
            navigate(from, { replace: true })
            toast.success(message)
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
            <Box sx={{ width: '70%', margin: 'auto' }}>
                <Box>
                    <h1 style={{ color: '#4C43BC', textAlign: 'center' }}>Please Login</h1>
                    <form style={formStyle} onSubmit={handleLogin}>
                        <MYTEXTFIELD required={true} name='email' type="email" label="Email" variant="outlined" />
                        <MYTEXTFIELD required={true} name='pass' type='password' label="Password" variant="outlined" />
                        <Button variant='contained' type='submit'>LOGIN</Button>
                    </form>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1em 0', flexDirection: 'column' }}>
                    <p><small>Have not an account ? <Link className='toggle-link' to={'/register'}>Register</Link></small></p>
                </Box>
                <div className="socialLogin">
                    <SocialLogin />
                </div>
                <ToastContainer />
            </Box>
            <Footer />
        </Box>
    );
};

export default Login;
