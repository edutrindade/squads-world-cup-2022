import React, { useState } from 'react';
import { Container, Country, Flag } from "./styles";

import { countries } from "../../mocks/countries";
import { Text } from "../Text";

interface CountriesProps {
    group: string;
    country: string;
    select: (country: string) => void;
}

export function Countries({ group, country, select }: CountriesProps) {

    function handleSelectCountry(countryId: string) {
        const c = country === countryId ? '' : countryId;
        select(c);
    }

    return (
        <Container>
            {countries.map((item) => (
                item.group === group && (
                    <Country key={item._id} onPress={() => handleSelectCountry(item._id)}>
                        <Flag source={item.flag} style={{ opacity: country === item._id ? 1 : 0.5 }} />
                        <Text size={14} weight="600" opacity={country === item._id ? 1 : 0.5}>{item.name}</Text>
                    </Country>
                )
            ))}
        </Container>
    )
}