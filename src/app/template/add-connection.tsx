"use client"

import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
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
import { BorderAll, Padding } from "@mui/icons-material";

const MaxItemNum = 3;


interface AddConnectionLayoutProps {
    createdAt: string;
    avatarUrl: string; // HACK: avatarUrl, name, introductionはuserオブジェクトとして取得したい
    name: string;
    introduction?: string;
    note?: string;
    searchResults?: any; // TODO: 後でオブジェクトを定義する
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; TODO: 後で実装する
}

const AddConnectionLayout: React.FC<AddConnectionLayoutProps> = ({
    createdAt,
    avatarUrl,
    name,
    introduction="自己紹介がありません",
    note="メモ書きがありません",
    searchResults,
    // onChange, TODO: 後で実装する
}): JSX.Element => {
    

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2vh" }}>
            <p className="self-end  text-sm">つながった日時：{createdAt}</p>
            <Avatar alt="penguin" src={avatarUrl} sx={{ width: 150, height: 150, margin: "2vh 0"}} />
            <h3>{name}</h3>
            {/* HACK: 複数行に対応 */}
            <p>{introduction}</p>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",  flexDirection: "row", margin: "0.5vh 0"  }}>
                <ImageButton src="/Instagram_logo.svg" alt="penguin" size={40}  />
                <ImageButton src="/Instagram_logo.svg" alt="penguin" size={40}  />
                <ImageButton src="/Instagram_logo.svg" alt="penguin" size={40}  />
            </Box>
            <p className="text-sm text-center">NOTE: {note}</p>
            <Paper sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "40px",
                margin: "10px auto",
                backgroundColor: "#D1D5DB",
                width: "80%",
                height: "38vh",
                }}>
                <h4 className="py-2">つながりを登録</h4>
                <SearchBar color="white"/>

                <List sx={{ height: "50vh", width: "80%", bgcolor: "#D1D5DB"}}>
                    {searchResults && searchResults.length > 0 ?
                                searchResults?.slice(0, MaxItemNum).map((result) => (
                                <ListItem key={result.id} sx={{
                                    border: "1px solid black",
                                    backgroundColor: "inherit",
                                    margin: "10px 0",
                                    borderRadius: "40px"
                                }}>
                                    <ListItemText primary={result.name} />
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

            <Box sx={{display: "flex", justifyContent: "space-around", alignItems: "center",  flexDirection: "row", margin: "0.5vh 10vw"  }}>
                <IconButton icon={<CreateIcon sx={{
                    fontSize:50,
                    borderRadius: "50%",
                    Padding: "10px"
                    }} />} onClick={() => {console.log("clicked")}} size="large" color="#62a2de" />
                <IconButton icon={<DeleteIcon sx={{
                    fontSize:50,
                    borderRadius: "50%"
                    }} />} onClick={() => {console.log("clicked")}} color="#ff8888"/>
            </Box>

        </>
    );
}

export default AddConnectionLayout;