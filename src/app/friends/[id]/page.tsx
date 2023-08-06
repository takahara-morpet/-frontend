'use client'
import React, { useEffect } from "react";
import Header from "../../../components/organisms/header"
import { useState } from "react";
import { useParams } from "next/navigation";
import UserDetailTemplate from "@/components/templates/user-detail";
import Load from "@/components/templates/load";
import { UserDetail as UserDetailType } from "@/types/response/user";
import { Event as  EventType } from "@/types/response/event";
import { fetchUserDetail } from "@/lib/fetch/user";
import { fetchEvents } from "@/lib/fetch/event";

interface UserDetailProps {
    user: UserDetailType;
    events?: EventType[];
}

const UserDetail: React.FC<UserDetailProps> = (): JSX.Element => {

    const { id } = useParams();

    const [userData, setUsersData] = useState<UserDetailType | null>(null);
    const [eventsData, setEventsData] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const users = await fetchUserDetail(String(id));
            console.log(users);
            const events = await fetchEvents();
            console.log(events);
            setUsersData(users);
            setEventsData(events);
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
        <Header title="ユーザー情報" />
        <UserDetailTemplate  user={userData} events={eventsData}/>
      </div>
        
    );
}


export default UserDetail;