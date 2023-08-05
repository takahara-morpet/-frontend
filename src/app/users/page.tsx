import React from "react";
import AddConnectionLayout from "../template/users";
import UsersList from "../template/users";
import SearchBar from "../molecules/search-bar";
import Footer from "../organisms/footer";
import Header from "../organisms/header";

const UsersPage: React.FC = (): JSX.Element => {
    return (
        <div>
            <Header title="ユーザー一覧" />
            <SearchBar />
            <UsersList />
            <Footer />
         </div>
    );
}

export default UsersPage;