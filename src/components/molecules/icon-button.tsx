import React from 'react';

import { IconButton as MuiIconButton , Typography, Box } from '@mui/material';

interface IconButtonProps {
    icon: JSX.Element;
    label?: string;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    label,
    color='primary',
    size='large',
    onClick=() => { console.log('clicked') }
}): JSX.Element => {

    const styles = {
        container: {
            backgroundColor: color,
            borderRadius: '50%',
        },
        button: {
            display: 'flex',
            flexDirection: 'column',
        },
        icon: {
            display: 'flex',
            flexDirection: 'column',
        },
        text: {
            fontSize: '0.75rem',
        }
    }

    return (
            <Box sx={styles.container}  >
                <MuiIconButton size={size} onClick={onClick} sx={styles.button}  >
                    {icon}
                    {label &&
                        <Typography  sx={styles.text}>{label}</Typography>
                    }
                </MuiIconButton>
            </Box>
            
    );
}