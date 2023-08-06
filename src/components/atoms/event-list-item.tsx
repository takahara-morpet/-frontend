import React from 'react';
import Image from 'next/image';
import { ListItem as MuiListItem } from '@mui/material';

// NOTE: 仮置き（後で別ファイルに（ex) types/*.ts））
type Event = {
    title: string;
    imageUri?: string;
    description?: string;
}

interface EventListItemProps {
    event: Event; // TODO: イベントオブジェトをしっかり定義
    width?: number;
    height?: number;
     onClick: () => void;
}

export const EventListItem: React.FC<EventListItemProps> = ({
    event: {
        title,
        description='No description',
        imageUri='/sample/event.svg',
    },
    height=100,
    width=100 ,
    onClick,
}): JSX.Element => {

    const styles = {
        listItem: {
            padding: '1rem 0',
            borderBottom: '1px solid #ccc',
        },
        textContainer: {
            marginLeft: '3rem',
        }
    }
    
    return (
        <MuiListItem style={styles.listItem} onClick={onClick}>
            {imageUri && <Image alt='イベントの画像' src={imageUri} width={width} height={height} />}
            <div style={styles.textContainer}>
                <h3>{title}</h3>
                {description && <p>{description}</p>}
            </div>
        </MuiListItem>
    );
}

export default EventListItem;