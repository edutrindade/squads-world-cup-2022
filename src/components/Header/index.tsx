import { Text } from "../Text";
import { Container, Content, AsideLeft, AsideRight } from "./styles";

interface HeaderProps {
    group: string;
};

export function Header({ group }: HeaderProps) {
    return (
        <Container>
            <Content>
                <AsideLeft>
                    <Text size={14}>Bem-vindo(a) à</Text>
                    <Text size={20} style={{ lineHeight: 28 }} weight="600">COPA DO MUNDO</Text>
                </AsideLeft>
                <AsideRight>
                    <Text size={16} color="#6B0524">Grupo {group}</Text>
                </AsideRight>
            </Content>
        </Container>
    )
}

