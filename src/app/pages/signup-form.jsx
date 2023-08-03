import React from 'react';
import {Box,Button,Container,Grid,Link,TextField,Typography} from '@mui/material';

const SignupForm=()=>{
    return(
        <Container maxWidth="xs">
            <Box sx={{
                marginTop:8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Typography component='h1' variant='h4'>
                新規登録
            </Typography>
            <Box component="form" noValidate sx={{mt:1}}>
                <TextField  
                    margin='normal' 
                    required 
                    fullWidth 
                    id='email'
                    label='メールアドレス'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    sx={{
                        borderColor: '#6CC2F2', // 枠線の色を指定
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#6CC2F2', // アウトラインの枠線の色を指定
                            },
                        },
                    }} />
                <TextField 
                    margin='normal'
                    required
                    fullWidth
                    id='password'
                    label='パスワード'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    sx={{
                        borderColor: '#6CC2F2', // 枠線の色を指定
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#6CC2F2', // アウトラインの枠線の色を指定
                            },
                        },
                    }} 
                    />

               
            </Box>
                <Button          
                    fullWidth
                    variant='contained'
                    sx={{
                        mt: 3,
                        mb: 2,
                        backgroundColor: '#ffffff',  // ボタンの背景色を指定
                        color: '#6CC2F2',  
                        '&:hover': {
                            backgroundColor: '#6CC2F2', // ホバー状態の背景色も同じにする
                            color: '#ffffff', 
                            // あるいはダークモードなど、ホバー時に少し色を変えたい場合は
                            // backgroundColor: 'rgba(108, 194, 242, 0.75)',
                        },
                    }}>
                        アカウント作成
                </Button>
            </Box>
        </Container>
    );
};

export default SignupForm;