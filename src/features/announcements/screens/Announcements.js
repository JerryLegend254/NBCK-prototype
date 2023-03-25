import React from "react";
import { SafeArea, SearchBarView, AnnouncementList} from "./AnnouncementsStyles";

export default Announcements = () => {
    return (
        <SafeArea>
            <SearchBarView />
            <AnnouncementList />
        </SafeArea>
    )
}