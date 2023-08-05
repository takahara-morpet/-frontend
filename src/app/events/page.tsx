import React from "react";
import Image from 'next/image';
import AddConnectionLayout from "../template/events";
import EventsList from "../template/events";
import SearchBar from "../molecules/search-bar";
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

const EventsPage: React.FC = (): JSX.Element => {
  return (
   
      <div>
        <Header title="イベント一覧" />
        <div style={{ marginTop: '20px' }}>
          <SearchBar />
        </div>
        <EventsList />
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
