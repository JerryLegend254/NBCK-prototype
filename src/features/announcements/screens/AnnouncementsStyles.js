import {Text, View, SafeAreaView} from 'react-native'

import styled from 'styled-components'

export const SearchBarView = styled(View)`
    flex : 0.1;
    background-color : ${props => props.theme.colors.brand.secondary};
`;

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
`;

export const AnnouncementList = styled(View)`
    flex : 0.9
    background-color: ${props => props.theme.colors.brand.primary};
`;
