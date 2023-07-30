import React from 'react';
import Image from 'next/image';
import { ListItem as MuiListItem } from '@mui/material';

interface ListItemProps {
    title: string;
    imageUri?: string;
    description?: string;
    width?: number;
    height?: number;
}

export const ListItem: React.FC<ListItemProps> = ({
    title,
    description='No description',
    imageUri='/sample/event.svg',
    height=100,
    width=100 
}): JSX.Element => {
    return (
        <MuiListItem style={{
            marginTop: '2rem',
            borderBottom: '1px solid #ccc',
        }}>
            {imageUri && <Image alt='イベントの画像' src={imageUri} width={width} height={height} />}
            <div style={{ 
                marginLeft: '3rem', 
                }}>
                <h3>{title}</h3>
                {description && <p>{description}</p>}
            </div>
        </MuiListItem>
    );
}

export default ListItem;