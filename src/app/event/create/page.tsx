import React from "react";
import CreateNewEvent from "../../template/create-new-event";
import Header from "../../organisms/header";


type Participant = {
    id:       string
    username: string;
    icon_url: string;
}

const allParticipants: Participant[] = [
    { id: '1', username: 'Participant 1', icon_url: 'https://via.placeholder.com/100' },
    { id: '2', username: 'Participant 2', icon_url: 'https://via.placeholder.com/1000' },
    { id: '3', username: 'Participant 3', icon_url: 'https://via.placeholder.com/50' },
    // Add as many participants as needed...
];

const EventDetailPage: React.FC = ():JSX.Element => {

    return (
        <div>
        <Header title="イベント作成" />
        <CreateNewEvent allParticipants={allParticipants} />
        </div>
    );
}

export default EventDetailPage;