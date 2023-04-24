import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Modal = ({ openModal, content, title, flag }) => {
    const onCloseHandler = () =>{
        window.location.reload(false)
    }

    return (
        <Dialog
            open={openModal}
            onClose={onCloseHandler}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {flag ? (
                    <Button>
                        Lanjutkan
                    </Button>
                ) : (
                    <Button onClick={onCloseHandler}>Reload</Button>
                )}
            </DialogActions>
        </Dialog>
    )
}

export default Modal