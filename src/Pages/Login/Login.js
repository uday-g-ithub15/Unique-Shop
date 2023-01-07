import { Box, Button, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword, signedUser, signedLoading, signedError

    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.pass.value;
        await signInWithEmailAndPassword(email, password)
    }
    if (user || signedUser) {
        navigate(from, { replace: true })
    }
    if (loading || signedLoading) {
        return <Loading />
    }
    const resetLink = async () => {
        const email = window.prompt('Enter your email .')
        if (email) {
            toast('Reset link sent to your email')
            await sendPasswordResetEmail(email);
        }
        else {
            toast('Please give email address for reset password')
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

                        {
                            signedError && <p style={{ color: 'red', textAlign: 'center', marginBottom: '5px' }}>{signedError?.code}</p>
                        }
                        <Button variant='contained' type='submit'>LOGIN</Button>
                    </form>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1em 0', flexDirection: 'column' }}>
                    <Typography variant='p' component='p' ><small> <Button variant='contained' onClick={resetLink} sx={{ marginRight: '0.5em' }} >Forgot Password</Button></small></Typography>
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
