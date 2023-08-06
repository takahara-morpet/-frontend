"use client"
import React, { useEffect, useState } from "react";


import SearchBar from "@/components/molecules/search-bar";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import UsersList from "@/components/template/users";
import Load from "@/components/template/load";
import { fetchUsers } from "@/lib/fetch/user";
import { User } from "@/types/response/user";
import { useRouter } from 'next/navigation';

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

  if (loading) return <Load />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        <Header title="友達一覧" smallTitle="Friends" />
        <SearchBar />
        <UsersList usersData={usersData} />
        <Footer />
     </div>
  );
};

export default UsersPage;
