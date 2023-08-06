import React from 'react';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import { Rating } from '@mui/material';
import { List } from '@mui/material';

import { EventDetail } from '@/types/response/event';


const maxParticipants = 5; // TODO: 最大表示人数(←モバイルと仮定。モバイルとPCで変えるべきっぽい)
interface EventDetailTemplateProps {
    event: EventDetail;
}
    

const EventDetailTemplate: React.FC<EventDetailTemplateProps> = ({
    event,
}):JSX.Element => {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px 20px',
        },
        time: {
            textArign: 'right',
            padding: "0.25rem",
        },
        memo: {
            textArign: 'center',
            margin: "0.25rem",
        },
        rating: {
            fontSize: '3rem',
        },
        participantsContainer: {
            width: 50,
            height: 50,
            display: 'inline-block',
            margin: '0 10px'
        },
        name: {
            display: 'inline-block',
        }
    }

    return (
        <Box sx={styles.container}>
            <Box sx={{
                alignItems: 'center',
            }}>
                <Image src={event.image} alt='Event Image' width={500} height={500} />
                <Typography variant='h6' sx={styles.time}>
                    開催日時: {event.time}
                </Typography>
                <Typography variant='h5' sx={styles.memo}>
                    NOTE: {event.private_memo}
                </Typography>
            </Box>
            <Rating name="read-only" value={event.evaluation} readOnly sx={styles.rating} />
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
                    {event.participants?.slice(0, maxParticipants).map(( participant, index) => (
                        <Box sx={styles.participantsContainer}>
                            <Avatar
                            key={index}
                            src={participant.icon_url}
                            alt='ユーザー画像'
                        />
                        <Typography sx={styles.name} variant='h6'>{participant.username}</Typography>
                        </Box>
                    ))}
                </List>
            </Box>
        </Box>

    )
}

export default EventDetailTemplate;