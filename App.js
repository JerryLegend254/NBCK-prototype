import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Announcements from './src/features/announcements/screens/Announcements';
import { theme } from './src/infrastructure/theme'
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Announcements /> 
    </ThemeProvider>
  );
}


