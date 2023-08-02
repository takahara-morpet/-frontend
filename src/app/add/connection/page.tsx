import React from "react";
import AddConnectionLayout from "../../template/add-connection";

const searchResults = [
    {
        id: 1,
        name: "penguin",
    },
    {
        id: 2,
        name: "penguin",
    },
    {
        id: 3,
        name: "penguin",
    },
    {
        id: 4,
        name: "penguin",
    },
    {
        id: 5,
        name: "penguin",
    },
];

const AddConnectionPage: React.FC = (): JSX.Element => {
    return (
        <AddConnectionLayout  createdAt="日付" avatarUrl="sample/user.png" name='tuser' searchResults={searchResults} />
    );
}

export default AddConnectionPage;