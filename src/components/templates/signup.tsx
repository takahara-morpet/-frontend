import React from 'react';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';

const SignupForm: React.FC = (): JSX.Element => {
    const styles = {
        formContainer: {
            mt: 1
        },
        textField: {
            borderColor: '#6CC2F2', // 枠線の色を指定
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#6CC2F2', // アウトラインの枠線の色を指定
                },
            }
        },
        button: {
            mt: 3,
            mb: 2,
            backgroundColor: '#ffffff',
            color: '#6CC2F2',
            '&:hover': {
                backgroundColor: '#6CC2F2',
                color: '#ffffff',
            }
        }
    };

    return(
        <Container maxWidth = "xs" >
                    <Box sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                        <Typography component='h1' variant='h4'>
                            新規登録
                        </Typography>
                        <Box component="form" noValidate sx={styles.formContainer}>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='email'
                                label='メールアドレス'
                                name='email'
                                autoComplete='email'
                                autoFocus
                                sx={styles.textField} />
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='password'
                                label='パスワード'
                                name='password'
                                type='password'
                                autoComplete='current-password'
                                sx={styles.textField}
                            />


                        </Box>
                        <Button
                            fullWidth
                            variant='contained'
                            sx={styles.button}>
                        アカウント作成
                    </Button>
                    </Box >
        </Container >
    );
};

export default SignupForm;