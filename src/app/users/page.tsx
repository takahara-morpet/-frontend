import React from "react";
import AddConnectionLayout from "../pages/users";
import UsersList from "../pages/users";
import SearchBar from "../molecules/search-bar";

const UsersPage: React.FC = (): JSX.Element => {
    return (
        <div>

       <SearchBar />
        <UsersList />
         </div>
    );
}

export default UsersPage;