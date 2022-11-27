import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;

export const Country = styled.TouchableOpacity`
    align-items: center;
`;

export const Flag = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
`;
