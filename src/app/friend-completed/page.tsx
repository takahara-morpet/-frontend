import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import exp from "constants";
import Header from "../organisms/header"
import AddFriendCompleted from "../template/add-friend-completed"


const FriendCompleted: React.FC = (): JSX.Element => {
    return (
    <div>
        <Header title="友達追加完了"/>
        <AddFriendCompleted name="masaki" createdAt="2023-10-10" avatarUrl="penguin.svg"/>
    </div>

    );
}

export default FriendCompleted;