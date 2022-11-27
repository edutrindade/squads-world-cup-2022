import { Text } from '../Text';

import { Container } from './styles';

interface ButtonProps {
    title: string;
    onPress?: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
    return (
        <Container onPress={onPress}>
            <Text weight='500' color='#FFF'>{title}</Text>
        </Container>
    );
}