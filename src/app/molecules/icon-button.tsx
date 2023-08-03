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
    return (
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: color, borderRadius: '50%' }}  >
                <MuiIconButton size={size} onClick={onClick} sx={{display: 'flex', flexDirection: 'column'  }}  >
                    {icon}
                    {label &&
                        <Typography  sx={{fontSize: '0.75rem'}}>{label}</Typography>
                    }
                </MuiIconButton>
            </Box>
            
    );
}