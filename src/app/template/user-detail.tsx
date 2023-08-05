"use client"

import React, { useEffect } from "react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";

import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';


import { ImageButton } from "../molecules/image-button";
import { IconButton } from "../molecules/icon-button";
import SearchBar from "../molecules/search-bar";
import { UserDetail } from "@/types/response/user";
import { Event } from "@/types/response/event";


const MaxItemNum = 3;


interface UserDetailTemplateProps {
    user: UserDetail;
    events?: Event[];
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; TODO: 後で実装する
}

// createdAt,
//     avatarUrl,
//     name,
//     introduction="自己紹介がありません",
//     note="メモ書きがありません",
//     events,

const UserDetailTemplate: React.FC<UserDetailTemplateProps> = ({
    user,
    events,
    // onChange, TODO: 後で実装する
}): JSX.Element => {

    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "2vh",
        },
        time: {
            alignSelf: "flex-end",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
        },
        avatar: {
            width: 150,
            height: 150,
            margin: "2vh 0",
        },
        sns: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center", 
            flexDirection: "row",
            margin: "0.5vh 0"
        },
        privateMemo: {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
        },
        eventsContainer: {
            display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "40px",
                margin: "10px auto",
                backgroundColor: "#D1D5DB",
                width: "80%",
                height: "38vh",
        },
        eventList: {
            height: "50vh",
            width: "80%",
            bgcolor: "#D1D5DB"
        },
        eventItem: {
            border: "1px solid black",
            backgroundColor: "inherit",
            margin: "10px 0",
            borderRadius: "40px"
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            margin: "0.5vh 10vw",
        },
        iconButton: {
            fontSize:50,
            borderRadius: "50%",
            Padding: "10px"
        }


    }
    

    return (
        <>
            {user === null ? () => { throw new Error("user is null") } : null}
            <Box sx={styles.container}>
            <Typography sx={styles.time} variant="h5" component="p">
                つながった日時：{/* !HACK: データないかも   */}
            </Typography>
            <Avatar alt="penguin" src={user.icon_url} sx={styles.avatar} />
            <Typography variant="h4" component="p">
                {user.username}
            </Typography>
            {/* HACK: 複数行に対応 */}
            <Typography variant="h6" component="p">
            {user.intro_text}
            </Typography>
            </Box>
            <Box sx={styles.sns}>
                <ImageButton src="/Instagram_logo.svg" alt="penguin" size={40}  />
                <ImageButton src="/Instagram_logo.svg" alt="penguin" size={40}  />
                <ImageButton src="/Instagram_logo.svg" alt="penguin" size={40}  />
            </Box>
            <Typography sx={styles.privateMemo} variant="h5" component="p">
                Private Memo: {user.private_memo}
            </Typography>
            <Paper sx={styles.eventsContainer}>
                <Typography variant="h5" component="p">
                つながりを登録
                </Typography>
                <SearchBar color="white"/>

                <List sx={styles.eventList}>
                    {events && events.length > 0 ?
                                events?.slice(0, MaxItemNum).map((event) => (
                                <ListItem key={event.id} sx={styles.eventItem}>
                                    <ListItemText primary={event.name} />
                                </ListItem>
                            ))
                     : 
                        <ListItem sx={{
                            border: "1px solid black",
                            backgroundColor: "inherit",
                            marginTop: "5px",
                            borderRadius: "40px"
                        }}>
                            <ListItemText primary="検索結果はありません" sx={{color: "white"}}/>
                        </ListItem>
                    }
                </List>
            </Paper>

            <Box sx={styles.buttonContainer}>
                <IconButton icon={<CreateIcon sx={styles.iconButton} />} onClick={() => {console.log("clicked")}} size="large" color="#62a2de" />
                <IconButton icon={<DeleteIcon sx={styles.iconButton} />} onClick={() => {console.log("clicked")}} color="#ff8888"/>
            </Box>

        </>
    );
}

export default UserDetailTemplate;