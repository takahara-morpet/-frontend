'use client'
import React from "react";
import Image from "next/image";

import Header from "@/components/organisms/header"
import AddFriendCompleted from "@/components/template/add-friend-completed"
import { User } from "@/types/response/user";
import { fetchUsers } from "@/lib/fetch/user";
import Load from "@/components/template/load";

const FriendCompleted: React.FC = (): JSX.Element => {

    const [ userData , setUserData ] = React.useState<User | null>(null);
    const [ loading , setLoading ] = React.useState<boolean>(true);
    const [ error , setError ] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchData = async () => {
        try {
            // TODO: エンドポイントを確認後に修正
            const users = await fetchUsers();
            setUserData(users[0]);
            setLoading(false);
        } catch (err) {
            setError(true);
            setLoading(false);
        }
        };
        fetchData();
    }, []);

    if (loading) return <Load />;
    if (error) return <div>Error: {error}</div>;

    return (
    <div>
        <Header title="友達追加完了"/>
        {/* HACK: createdAtどうする */}
        <AddFriendCompleted user={userData}/>
    </div>

    );
}

export default FriendCompleted;