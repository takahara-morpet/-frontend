// UsersList.tsx
import React from "react";
import UserListItem from "../atoms/user-item"; 
import List from "@mui/material/List";
import { User } from "../../types/response/user";

type UsersListProps = {
  usersData: User[];
};

const UsersList: React.FC<UsersListProps> = ({ usersData }) => {
  return (
    <div>
      <h1>Users List</h1>
      <List>
        {usersData.map((user, index) => (
          <UserListItem
            key={index}
            user={{
              userName: user.username,
              statusMessage: user.status_text || 'No status message',
              imageUri: user.icon_url || '/sample/user.png',
            }}
          />
        ))}
      </List>
    </div>
  );
};

export default UsersList;
