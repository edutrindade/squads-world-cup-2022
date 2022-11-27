import styled from 'styled-components/native';

export const Player = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;

export const PlayerImage = styled.Image`
    width: 65px;
    height: 65px;
    border-radius: 8px;
`;

export const PlayerInfo = styled.View`
    flex: 1;
    justify-content: center;
    margin-left: 16px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: rgba(204, 204, 204, 0.3);
    margin: 24px 0;
`;