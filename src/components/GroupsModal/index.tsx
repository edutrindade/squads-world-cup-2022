import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Modal } from 'react-native';
import { Text } from '../Text';

import { Button, Container, Subtitle, Title } from './styles';

import background from '../../assets/images/background.png';

interface GroupsModalProps {
    visible: boolean;
    onClose: () => void;
    group: string;
    setGroup: (group: string) => void;
}

export function GroupsModal({ visible, onClose, group, setGroup }: GroupsModalProps) {
    return (
        <Modal visible={visible} animationType="slide" >
            <Container>
                <ImageBackground source={background} resizeMode="contain" style={{ flex: 1, justifyContent: 'center' }}>
                    <Title>FIFA WORLD CUP</Title>
                    <Subtitle>Qatar 2022</Subtitle>

                    <Button onPress={() => { setGroup("A"); onClose() }}>
                        <Text size={20} weight={group !== "A" ? '500' : '600'} color="#6B0524" style={{ textTransform: 'uppercase' }}>Grupo A</Text>
                    </Button>

                    <Button onPress={() => { setGroup("B"); onClose() }}>
                        <Text size={20} weight={group !== "B" ? '500' : '600'} color="#6B0524" style={{ textTransform: 'uppercase' }}>Grupo B</Text>
                    </Button>

                    <Button onPress={() => { setGroup("C"); onClose() }}>
                        <Text size={20} weight={group !== "C" ? '500' : '600'} color="#6B0524" style={{ textTransform: 'uppercase' }}>Grupo C</Text>
                    </Button>

                    <Button onPress={() => { setGroup("D"); onClose() }}>
                        <Text size={20} weight={group !== "D" ? '500' : '600'} color="#6B0524" style={{ textTransform: 'uppercase' }}>Grupo D</Text>
                    </Button>

                    <Button onPress={() => { setGroup("E"); onClose() }}>
                        <Text size={20} weight={group !== "E" ? '500' : '600'} color="#6B0524" style={{ textTransform: 'uppercase' }}>Grupo E</Text>
                    </Button>

                    <Button onPress={() => { setGroup("F"); onClose() }}>
                        <Text size={20} weight={group !== "F" ? '500' : '600'} color="#6B0524" style={{ textTransform: 'uppercase' }}>Grupo F</Text>
                    </Button>

                    <Button onPress={() => { setGroup("G"); onClose() }}>
                        <Text size={20} weight={group !== "G" ? '500' : '600'} color="#6B0524" style={{ textTransform: 'uppercase' }}>Grupo G</Text>
                    </Button>

                    <Button onPress={() => { setGroup("H"); onClose() }}>
                        <Text size={20} weight={group !== "H" ? '500' : '600'} color="#6B0524" style={{ textTransform: 'uppercase' }}>Grupo H</Text>
                    </Button>

                </ImageBackground>
                <StatusBar style="light" />
            </Container>
        </Modal>
    )
}