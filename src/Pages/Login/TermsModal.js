import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TermsModal({ open, setOpen, handleOpen, handleClose, }) {


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint consequuntur enim delectus, quisquam impedit aliquid sapiente non repudiandae consequatur voluptatem placeat error fugit ex eius modi nisi ea odio nesciunt, doloremque, rem tempore. Fuga id reprehenderit dolorem soluta! Nobis vero dignissimos, commodi at corrupti obcaecati, vel repellat atque cum maiores sit illo non in eius quos magnam, nulla reprehenderit architecto veniam error ratione odio. Commodi esse accusamus quasi itaque numquam enim quos obcaecati maiores sint? Debitis incidunt culpa cum aliquam in. Deleniti odit est dicta nemo culpa laboriosam soluta repellendus eaque recusandae non labore cum quis iusto, dolorum sequi ratione!
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}