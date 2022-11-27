import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-around; 
`;

export const Title = styled.Text`
    font-family: 'Qatar-600';
    font-size: 26px;
    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 8%;
`;

export const Subtitle = styled.Text`
    font-family: 'Qatar-500';
    font-size: 26px;
    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 15%;
`;

export const Button = styled.TouchableOpacity`
    background-color: #FFF;
    height: 48px;
    border-radius: 48px;
    padding: 14px 24px;
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`;

