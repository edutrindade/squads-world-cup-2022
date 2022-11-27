import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'}; 
    background-color: #FFF;
`;

export const CountriesContainer = styled.View`
    height: 73px;
    margin-top: 34px;
`;

export const SquadContainer = styled.View`
    flex: 1;
    padding-bottom: 30px;
`;

export const Footer = styled.View`
    min-height: 110px;
    background-color: #FFF;
`;

export const FooterContainer = styled.View`
    margin-left: 24px;
    margin-right: 24px;
`;
