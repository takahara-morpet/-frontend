import React from "react";
import ListUserItem from "../atoms/user-item"; 
import List from "@mui/material/List";

const UsersList: React.FC = () => {
  // Temporary hard-coded data
  const usersData = [
    {
      userName: "User 1",
      statusMessage: "Hello, I am User 1",
      imageUri: "/sample/user.png",
    },
    {
      userName: "User 2",
      statusMessage: "Hello, I am User 2",
      imageUri: "/sample/user.png",
    },
     {
      userName: "User 3",
      statusMessage: "Hello, I am User 3",
      imageUri: "/sample/user.png",
    },
     {
      userName: "User 4",
      statusMessage: "Hello, I am User 4",
      imageUri: "/sample/user.png",
    },
    // Add more user data as needed
  ];

  return (
    <div>
      <h1>Users List</h1>
      <List>
        {usersData.map((user, index) => (
          <ListUserItem
            key={index}
            userName={user.userName}
            statusMessage={user.statusMessage}
            imageUri={user.imageUri}
          />
        ))}
      </List>
    </div>
  );
};

export default UsersList;
