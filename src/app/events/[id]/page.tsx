'use client'
import React from "react";

import EventDetailTemplate from "@/components/templates/event-detail";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import Load from "@/components/templates/load";
import { EventDetail } from "@/types/response/event";
import { fetchEventDetail } from "@/lib/fetch/event";


const EventDetailPage: React.FC = ():JSX.Element => {

    const [event, setEvent] = React.useState<EventDetail | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<Error | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const event = await fetchEventDetail('1');
                setEvent(event);
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
        <Header title="飲み会７月" />
        <EventDetailTemplate event={event} />
        <Footer />
        </div>
    );
}

export default EventDetailPage;