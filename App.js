import React from "react";
// import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import Announcements from "./src/features/announcements/screens/AnnouncementsScreen";
import { theme } from "./src/infrastructure/theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Announcements />
    </ThemeProvider>
  );
}
