import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const HandleSnackBar = ({ message, type, onCloseSnackBar }) => {
    const [vertical, horizontal] = ['top', 'right']
    return (
        <Snackbar open={true} autoHideDuration={7000} anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal} onClose={onCloseSnackBar}
        >
            <Alert severity={type} sx={{ width: '100%' }} onClose={onCloseSnackBar} >
                {message}
            </Alert>
        </Snackbar>

    );
};

export default HandleSnackBar;