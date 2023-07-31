import React from 'react';
import Image from 'next/image';
import { ListItem as MuiListItem } from '@mui/material';

interface ListUserItemProps{
   
    imageUri: string;
    userName: string;
    statusMessage?: string;
    width?: number;
    height?: number;

}


export const ListUserItem: React.FC<ListUserItemProps> = ({
    
    userName='Takahara',
    statusMessage='test profile',
    imageUri='/sample/user.png',
    height=100,
    width=100 
}): JSX.Element => {
    return (
        <MuiListItem style={{
            padding: '1rem 0',
            borderBottom: '1px solid #ccc',
            marginLeft: '3rem',
        }}>
            {imageUri && <Image alt='ユーザー画像' src={imageUri} width={width} height={height} />}
            <div style={{ 
                marginLeft: '3rem', 
                }}>
                <h3>{userName}</h3>
                {statusMessage && <p>{statusMessage}</p>}
            </div>
        </MuiListItem>
    );
}

export default ListUserItem;