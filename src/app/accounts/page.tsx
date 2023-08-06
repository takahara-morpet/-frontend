'use client'
import React, { useEffect } from "react";
import Header from "../../components/organisms/header"
import { useState } from "react";
import { useParams } from "next/navigation";
import UserDetailTemplate from "@/components/template/user-detail";
import Load from "@/components/template/load";
import { UserDetail as UserDetailType } from "@/types/response/user";
import { Event as  EventType } from "@/types/response/event";
import { fetchMyAccount, fetchUserDetail } from "@/lib/fetch/user";
import { fetchEvents } from "@/lib/fetch/event";

interface MyProfileProps {
    user: UserDetailType;
    events?: EventType[];
}

const  MyProfile: React.FC< MyProfileProps> = (): JSX.Element => {

    const [userData, setUsersData] = useState<UserDetailType | null>(null);
    const [eventsData, setEventsData] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const user = await fetchMyAccount();
            const events = await fetchEvents();
            setUsersData(user);
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
        <Header title="アカウント設定" />
        <UserDetailTemplate  user={userData} events={eventsData}/>
      </div>
        
    );
}


export default  MyProfile;