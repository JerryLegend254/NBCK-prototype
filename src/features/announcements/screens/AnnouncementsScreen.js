import React from "react";
import { Searchbar } from "react-native-paper";
import {
  SafeArea,
  SearchBarView,
  AnnouncementList,
} from "./AnnouncementsScreenStyles";

const Announcements = () => {
  return (
    <SafeArea>
      <SearchBarView>
        <Searchbar placeholder="What's on your mind?" />
      </SearchBarView>
      <AnnouncementList />
    </SafeArea>
  );
};

export default Announcements;
