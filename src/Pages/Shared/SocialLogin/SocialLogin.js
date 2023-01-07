import React from 'react';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import auth from '../../../firebase.init';
import { Box, Button } from '@mui/material';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    if (loading) {
        return <Loading />
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => { signInWithGoogle() }} variant='contained' startIcon={<FcGoogle />}>Log in with Google </Button>
        </Box>
    );
};

export default SocialLogin;