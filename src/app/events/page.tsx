"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import AddConnectionLayout from "../template/events";
import EventsList from "../template/events";
import SearchBar from "../molecules/search-bar";
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { fetchEvents } from "../../lib/event";
import { Event } from "../../types/response/event";


const EventsPage: React.FC = (): JSX.Element => {
  const [eventsData, setEventsData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const users = await fetchEvents();
          setEventsData(users);
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
        <Header title="イベント一覧" />
        <div style={{ marginTop: '20px' }}>
          <SearchBar />
        </div>
        <EventsList eventsData={eventsData} />
        <div style={{
          position: 'fixed',
          right: '40px',
          bottom: '100px',
        }}>
        <Image alt="イベント作成" src="create_event.svg" width={70} height={70} />
         
        </div>
        <Footer />
      </div>
   
  );
}

export default EventsPage;
