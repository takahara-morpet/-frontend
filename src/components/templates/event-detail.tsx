import React from 'react';
import Image from 'next/image';

import { Box } from '@mui/material';
import { Avatar } from '@mui/material';
import { Rating } from '@mui/material';
import { List } from '@mui/material';

type Participant = {
    id: string;
    name: string;
    imageUri: string;
}

interface EventDetailTemplateProps {
    // HACK: Event Objectを定義する
    id: string;
    title: string;
    src: string;
    heldDate: string;
    note: string;
    rating: number;
    // HACK: User Objectを定義する
    participants: Participant[];
}
    

const EventDetailTemplate: React.FC<EventDetailTemplateProps> = ({
    id,
    // title,
    src,
    heldDate,
    note,
    rating,
    participants,
}):JSX.Element => {

    const maxParticipants = 5; // TODO: 最大表示人数(←モバイルと仮定。モバイルとPCで変えるべきっぽい)

    

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px 20px',
        }}>
            <Box sx={{
                alignItems: 'center',
            }}>
                <Image src={src} alt='Event Image' width={500} height={500} />
                <p className='text-right p-1'>開催日時: {heldDate}</p>
                <h4 className='text-center m-1'>NOTE: {note}</h4>
            </Box>
            <Rating name="read-only" value={rating} readOnly sx={{
                fontSize: '3rem',
            }} />
            {/* User Avatar list */}
            <Box sx={{
                alignItems: 'center',
                padding: '10px 20px',
            }}>
                <h3>つながりの輪</h3>
                <List sx={{
                    margin: '10px auto',
                }}>
                    {/*  */}
                    {participants.slice(0, maxParticipants).map((participant) => (
                        <Box sx={{ width: 50, height: 50, display: 'inline-block', margin: '0 10px' }}>
                            <Avatar
                            key={participant.id}
                            src={participant.imageUri}
                            alt='ユーザー画像'
                        />
                        <p style={{ display: 'inline-block' }}>{participant.name}</p>
                        </Box>
                        
                        
                    ))}
                </List>
            </Box>
        </Box>

    )
}

export default EventDetailTemplate;