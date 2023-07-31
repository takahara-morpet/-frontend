import React from 'react';
import { IconButton as MuiIconButton , Typography } from '@mui/material';

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
            <MuiIconButton size={size} onClick={onClick} sx={{display: 'flex', flexDirection: 'column', color: color,  }}  >
                {icon}
                {label &&
                    <Typography  sx={{fontSize: '0.75rem'}}>{label}</Typography>
                }
                
            </MuiIconButton>
    );
}