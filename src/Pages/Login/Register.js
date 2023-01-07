import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

import './Register.css'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { Box, Button, styled, TextField, Typography } from '@mui/material';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import TermsModal from './TermsModal';

const Login = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const [passError, setPassError] = useState('')
    const [check, setCheck] = useState(true);
    const handleRegister = async (e) => {
        e.preventDefault()
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.pass.value;
        const confirmPassword = e.target.confirmPass.value;
        const phoneNumber = e.target.mobile.value;
        if (password !== confirmPassword) {
            setPassError(`Password and Confirm Password doesn't matched`)
            return;
        }
        else {
            setPassError('');
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName, phoneNumber })
            navigate('/')
        }
        if (loading) {
            return <Loading />
        }
        e.target.reset();
        alert('A verification email sent to your email.Please go there and verify your email.')
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
                        <MYTEXTFIELD required={true} type="tel" name='mobile' label='Mobile' variant='outlined' />
                        <MYTEXTFIELD required={true} type="email" name='email' label='Email' variant='outlined' />
                        <MYTEXTFIELD required={true} type="password" name='pass' label='Password' variant='outlined' />
                        <MYTEXTFIELD required={true} type="password" name='confirmPass' label='Confirm Password' variant='outlined' />
                        <p style={{ color: 'red', textAlign: 'center' }}>{passError}</p>
                        <Box sx={{ display: 'flex', alignItems: 'center', }}>
                            <input name='check' type="checkbox" onChange={e => {
                                setCheck(!(e.target.checked))
                            }} />
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}><Typography sx={{ marginLeft: '0.5em' }}>Accept our</Typography> <Button onClick={handleOpen} >terms and conditions</Button>
                                {
                                    open && <TermsModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
                                }
                            </Typography>
                        </Box>
                        <Button sx={{ margin: '0.5em 0' }} variant='contained' disabled={check}>Register</Button>
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
        // <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
        //     <Header />
        //     <Box sx={{ width: '70%', margin: 'auto' }}>
        //         <Box>
        //             <h1 style={{ color: '#4C43BC', textAlign: 'center' }}>Please Login</h1>
        //             <form style={formStyle} onSubmit={handleRegister}>
        //                 <MYTEXTFIELD required={true} name='name' type="text" label="Name" variant="outlined"  />
        //                 <MYTEXTFIELD required={true} name='mobile' type="tel" label="Mobile" variant="outlined" />
        //                 <MYTEXTFIELD required={true} name='email' type="email" label="Email" variant="outlined" />
        //                 <MYTEXTFIELD required={true} name='pass' type='password' label="Password" variant="outlined" />
        //                 <MYTEXTFIELD required={true} name='confirmPass' type='password' label="Confirm Password" variant="outlined" />

        //                 {
        //                     signedError && <p style={{ color: 'red', textAlign: 'center', marginBottom: '5px' }}>{signedError?.code}</p>
        //                 }
        //                 <Button variant='contained' type='submit'>REGISTER</Button>
        //             </form>
        //         </Box>
        //         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1em 0' }}>
        //             <p><small>Have not an account ? <Link className='toggle-link' to={'/register'}>Register</Link></small></p>
        //         </Box>
        //         <div className="socialLogin">
        //             <SocialLogin />
        //         </div>
        //         <ToastContainer />
        //     </Box>
        //     <Footer />
        // </Box>
    );
};

export default Login;