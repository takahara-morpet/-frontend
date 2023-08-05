import React from "react";
import Image from "next/image";

import Header from "@/components/organisms/header"
import AddFriendCompleted from "@/components/templates/add-friend-completed"


const FriendCompleted: React.FC = (): JSX.Element => {
    return (
    <div>
        <Header title="友達追加完了"/>
        <AddFriendCompleted name="masaki" createdAt="2023-10-10" avatarUrl="penguin.svg"/>
    </div>

    );
}

export default FriendCompleted;