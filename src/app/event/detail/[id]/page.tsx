import React from "react";
import EventDetailTemplate from "@/app/template/event-detail-template";

const participants = [
    {
        id: '1',
        name: 'tarou',
        imageUri: 'https://mui.com/static/images/avatar/1.jpg',
    },
    {
        id: '2',
        name: 'jiro',
        imageUri: 'https://mui.com/static/images/avatar/2.jpg',
    },
    {
        id: '3',
        name: 'saburo',
        imageUri: 'https://mui.com/static/images/avatar/2.jpg',
    },
    {
        id: '4',
        name: 'shiro',
        imageUri: 'https://mui.com/static/images/avatar/2.jpg',
    },
    {
        id: '5',
        name: 'goro',
        imageUri: 'https://mui.com/static/images/avatar/2.jpg',
    },
    {
        id: '6',
        name: 'rokuro',
        imageUri: 'https://mui.com/static/images/avatar/2.jpg',
    },
]

const EventDetailPage: React.FC = ():JSX.Element => {

    return (
        <EventDetailTemplate
            id='1'
            title='test event'
            src='/sample/event.svg'
            heldDate='2021-10-01'
            note='test note'
            rating={3}
            participants={participants}
        />
    );
}

export default EventDetailPage;