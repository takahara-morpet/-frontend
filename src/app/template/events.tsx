import React from "react";
import ListEventItem from "../atoms/event-list-item"; 
import List from "@mui/material/List";
import { Event } from "../../types/response/event";


type EventsListProps = {
  eventsData: Event[];
};


const EventsList: React.FC<EventsListProps> = ({eventsData}) => {
  // Temporary hard-coded data
 

  return (
    <div>
     
      <List>
        {eventsData.map((event, index) => (
          <ListEventItem
            key={index}
            event={ {
                title:event.name,
                description:"開催日時:"+ new Date(event.time).toLocaleString()+"　"+"満足度評価:"+event.evaluation|| "No Description",
                imageUri:event.image || '/sample/event.svg',
            }}
            width={70}
            height={70}

          />
        ))}
      </List>
    </div>
  );
};

export default EventsList;
