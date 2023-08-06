'use client'
import React, {ChangeEvent, useState} from 'react';
import { Box, TextField, Button,Typography, Rating, Link, FormControlLabel, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Routes from '../../constants/routes';

type SelectedParticipants = {
    [key: string]: boolean;
}

type Participant = {
    id:       string
    username: string;
    icon_url: string;
}

interface Props {
    allParticipants: Participant[];
}

const CreateNewEvent: React.FC<Props> = ({ allParticipants }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedParticipants, setSelectedParticipants] = useState<SelectedParticipants>({});

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, participantId: string) => {
        setSelectedParticipants({
            ...selectedParticipants,
            [participantId]: event.target.checked,
        });
    };

    return (
        <Box component="form" sx={{
            display: 'flex ',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px 20px',
        }}>
            <TextField
                margin='normal'
                required
                fullWidth
                id='title'
                label='タイトル'
                name='title'
                autoComplete='title'
                autoFocus
                sx={{
                    borderColor: '#6CC2F2',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#6CC2F2',
                        },
                    },
                    marginBottom: 4, // Adjust as needed
                }}
            />
            <TextField
                fullWidth
                id='src'
                label='画像'
                type='file'
                name='src'
                sx={{ marginBottom: 4 }} // Adjust as needed
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                fullWidth
                id='heldDate'
                label='開催日'
                name='heldDate'
                type='date'
                InputLabelProps={{ shrink: true }}
                sx={{ marginBottom: 4 }} // Adjust as needed
            />
            <TextField
                fullWidth
                id='note'
                label='メモ'
                name='note'
                sx={{ marginBottom: 4 }} // Adjust as needed
            />
            <Box sx={{ marginBottom: 4, marginTop: 4 }}>
            <Typography variant="h6" component="div" color="text.secondary" gutterBottom>
                評価
            </Typography>
            <Rating
                name='rating'
                size="large"
                precision={0.5}
                sx={{ marginBottom: 4 }} // Adjust as needed
            />
           </Box>


            <Box sx={{ marginBottom: 4 }}>
            <div>
                <Button
                    variant="contained"
                    onClick={handleClickOpen}
                    sx={{
                        backgroundColor: '859FB7', // This will set the color explicitly
                        color: 'white', // This will set the text color to white
                        boxShadow: 3,
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.2em',
                        '&:hover': {
                            backgroundColor: '859FB7', // This will keep the color same on hover
                        },
                    }}
                    >
                    参加者を選択
                </Button>
                   </div>

                <Dialog
                    open={openDialog}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"参加者を選択してください"}</DialogTitle>
                    <DialogContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', overflowY: 'auto' }}>
                        {allParticipants.map((participant, index) => (
                            <Box key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={!!selectedParticipants[participant.id]}
                                            onChange={event => handleCheckboxChange(event, participant.id)}
                                        />
                                    }
                                    label={
                                        <span style={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={participant.icon_url} style={{ width: '25px', height: '25px', marginRight: '8px', borderRadius: '50%' }} />
                                            {participant.username}
                                        </span>
                                    }
                                />
                            </Box>
                        ))}
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 'auto', // Push buttons to the bottom
                marginBottom: '30px' // Add space at the bottom if needed
            }}>
                <Link href={Routes.HOME_URL}>
                    <Button>
                        <img src="/checkcircle.svg" />
                    </Button>
                </Link>
                <Link href={Routes.HOME_URL}>
                    <Button>
                        <img src="/cancel.svg" />
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}

export default CreateNewEvent;
