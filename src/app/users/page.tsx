"use client"
import React, { useEffect, useState } from "react";
import UsersList from "../template/users";
import SearchBar from "../molecules/search-bar";
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import { fetchUsers } from "../../lib/user";
import { User } from "../../types/user";

const UsersPage: React.FC = (): JSX.Element => {
  
  const [usersData, setUsersData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await fetchUsers();
        setUsersData(users);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        <Header title="友達一覧" smallTitle="Friends" />
        <SearchBar />
        <UsersList usersData={usersData}/>
        <Footer />
     </div>
  );
};

export default UsersPage;
