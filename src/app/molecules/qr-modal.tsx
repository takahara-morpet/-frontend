import React from "react";
import Image from "next/image";

import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import exp from "constants";

interface QRModalProps {
  qrSrc: string;
  handleClose: () => void;
  isOpen: boolean;
}

const QRModal: React.FC<QRModalProps> = ({
    qrSrc,
    handleClose,
    isOpen
}): JSX.Element => {

    const styles = {
        container: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        }
    }

    return(
        <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={styles.container}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Your QR Code
            </Typography>
            <Image src={qrSrc} alt="QR Code" width={500} height={500} />
        </Box>
        </Modal>
    )
}

export default QRModal;