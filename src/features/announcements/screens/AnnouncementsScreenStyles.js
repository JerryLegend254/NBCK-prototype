import { View, SafeAreaView } from "react-native";

import styled from "styled-components/native";

export const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.sizes[0]};
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const AnnouncementList = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
