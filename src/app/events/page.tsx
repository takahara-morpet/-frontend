import React from "react";
import Image from 'next/image'; // Imageをインポート
import AddConnectionLayout from "../template/events";
import EventsList from "../template/events";
import SearchBar from "../molecules/search-bar";
import Footer from "../organisms/footer";
import Header from "../organisms/header";

const EventsPage: React.FC = (): JSX.Element => {
    return (
        <div>
            <Header title="イベント一覧" />
            <div style={{ marginTop: '20px' }}>
                <SearchBar />
            </div>
            <EventsList />
            <div style={{
                position: 'fixed', // 'fixed'を指定して固定表示
                right: '40px', // 右側から20pxの位置
                bottom: '100px', // 下側から20pxの位置
            }}>
                <Image alt="イベント作成" src="create_event.svg" width={70} height={70} />
            </div>
            <Footer />
        </div>
    );
}

export default EventsPage;
