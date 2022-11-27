import React, { useState } from 'react';
import { Countries } from '../../components/Countries';
import { Header } from '../../components/Header';
import { Squad } from '../../components/Squad';
import { Button } from '../../components/Button';

import { countries } from '../../mocks/countries';

import { Container, CountriesContainer, SquadContainer, Footer, FooterContainer } from './styles';
import { GroupsModal } from '../../components/GroupsModal';

export function Main() {
    const [selectedGroup, setSelectedGroup] = useState("G");
    const [selectedCountry, setSelectedCountry] = useState(countries[0]._id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Container>
                <Header group={selectedGroup} />

                <CountriesContainer>
                    <Countries group={selectedGroup} country={selectedCountry} select={setSelectedCountry} />
                </CountriesContainer>

                <SquadContainer>
                    <Squad selectedCountry={selectedCountry} selectedGroup={selectedGroup} />
                </SquadContainer>

            </Container>

            <Footer>
                <FooterContainer>
                    <Button title="Ver outro grupo" onPress={() => setIsModalOpen(true)} />
                </FooterContainer>
            </Footer>

            <GroupsModal visible={isModalOpen} onClose={() => setIsModalOpen(false)} group={selectedGroup} setGroup={setSelectedGroup} />
        </>
    )
}

