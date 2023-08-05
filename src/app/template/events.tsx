import React from "react";
import ListEventItem from "../atoms/event-list-item"; 
import List from "@mui/material/List";

const EventsList: React.FC = () => {
  // Temporary hard-coded data
  const eventsData = [
    {
      title: "飲み会七月",
      description: "割と楽しい飲み会だった",
      imageUri: "/sample/event.svg",
    },
    {
      title: "飲み会七月",
      sdescription: "割と楽しくない回だった",
      imageUri: "/sample/event.svg",
    },
     {
      title: "飲み会七月",
      description: "割と楽しい飲み会だった",
      imageUri: "/sample/event.svg",
    },
    {
      title: "飲み会七月",
      sdescription: "割と楽しくない回だった",
      imageUri: "/sample/event.svg",
    },
   
  ];

  return (
    <div>
     
      <List>
        {eventsData.map((event, index) => (
          <ListEventItem
            key={index}
            title={event.title}
            imageUri={event.imageUri}
            description={event.description}
            width={70}
            height={70}

          />
        ))}
      </List>
    </div>
  );
};

export default EventsList;
