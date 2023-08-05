import React from 'react';
import Avatar from '@mui/material/Avatar';
import { ListItem as MuiListItem } from '@mui/material';

interface ListUserItemProps{
    imageUri?: string; // Optionalに変更
    userName: string;
    statusMessage?: string;
    size?: number; // heightとwidthをまとめてsizeに変更
}

export const ListUserItem: React.FC<ListUserItemProps> = ({
    userName='Takahara',
    statusMessage='test profile',
    imageUri='/sample/user.png', // default image
    size=100, // sizeを追加
}): JSX.Element => {
    return (
        <MuiListItem style={{
            padding: '1rem',
            borderBottom: '1px solid #ccc',
        }}>
            <Avatar
                src={imageUri}
                alt='ユーザー画像'
                style={{ width: size, height: size }} // Avatarを使って画像を丸く表示、サイズも指定
            />
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
