import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './ItemDetails.css'
import { styled, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#ffff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const MYBUTTON = styled(Button)({
    margin: '0.3em'
})


export default function BasicModal({ handleOpen, handleClose, handleAddProduct, error }) {
    return (
        <div>
            <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleAddProduct} >
                        <h4>If you want to restock this product fill the form and click Restock</h4>
                        <TextField sx={{ m: '0.5em' }} type={'number'} name='quantity' id="outlined-basic" label="Quantity" variant="outlined" />
                        {/* <input type="number" name="quantity" placeholder='Quantity' /> */}
                        {
                            error ? <p style={{ color: 'red' }}>{error}</p> : ''
                        }
                        <Box>
                            <MYBUTTON variant='contained' type='submit' >Restock</MYBUTTON>
                            <MYBUTTON variant='contained' className='btn' onClick={handleClose}  >Cancel</MYBUTTON>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}