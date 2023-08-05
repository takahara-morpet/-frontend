import React from 'react';
import Image from 'next/image';
import { ListItem as MuiListItem } from '@mui/material';

interface EventListItemProps {
    title: string;
    imageUri?: string;
    description?: string;
    width?: number;
    height?: number;
}

export const EventListItem: React.FC<EventListItemProps> = ({
    title,
    description='No description',
    imageUri='/sample/event.svg',
    height=100,
    width=100 
}): JSX.Element => {
    return (
        <MuiListItem style={{
            padding: '1rem 0 0 1rem',
            borderBottom: '1px solid #ccc',
        }}>
            {imageUri && <Image alt='イベントの画像' src={imageUri} width={width} height={height} />}
            <div style={{ 
                marginLeft: '1rem', 
                }}>
                <h3>{title}</h3>
                {description && <p>{description}</p>}
            </div>
        </MuiListItem>
    );
}

export default EventListItem;