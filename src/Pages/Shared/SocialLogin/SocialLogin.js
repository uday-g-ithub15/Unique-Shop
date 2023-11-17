import React, { useContext } from 'react';
import './SocialLogin.css'
import { FaGoogle } from "react-icons/fa";
import { Box, Button } from '@mui/material';
import { Context } from '../../../contexts/UrlContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const SocialLogin = () => {
    const { googleSignIn } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = async () => {
        const { message, success } = await googleSignIn();
        if (success) {
            navigate(from, { replace: true })
            toast.success(message)
        }
        else {
            toast.error(message)
        }
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={handleGoogleSignIn} variant='contained' startIcon={<FaGoogle />}>Log in with Google </Button>
        </Box>
    );
};

export default SocialLogin;