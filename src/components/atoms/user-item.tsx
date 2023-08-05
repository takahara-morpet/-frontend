import React from 'react';
import Avatar from '@mui/material/Avatar';
import { ListItem as MuiListItem } from '@mui/material';

// NOTE: 仮置き（後で別ファイルに（ex) types/*.ts））
type User = {
    userName: string;
    imageUri?: string;
    statusMessage?: string;
}
interface UserListItemProps{
    user: User; // TODO: ユーザーオブジェトをしっかり定義
    size?: number;
}

export const UserListItem: React.FC<UserListItemProps> = ({
    user: {
        userName,
        statusMessage='No status message',
        imageUri='/sample/user.png', // default image
    },
    size=100, // sizeを追加
}): JSX.Element => {

    const styles = {
        listItem: {
            padding: '1rem',
            borderBottom: '1px solid #ccc',
        },
        avatar: {
            width: size,
            height: size
        },
        messageContainer: {
            marginLeft: '3rem',
        }
    }

    return (
        <MuiListItem style={styles.listItem}>
            <Avatar
                src={imageUri}
                alt='ユーザー画像'
                style={styles.avatar} // Avatarを使って画像を丸く表示、サイズも指定
            />
            <div style={styles.messageContainer}>
                <h3>{userName}</h3>
                {statusMessage && <p>{statusMessage}</p>}
            </div>
        </MuiListItem>
    );
}

export default UserListItem;
