import React from "react";
import AddConnectionLayout from "../template/users";
import UsersList from "../template/users";
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