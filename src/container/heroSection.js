import React from 'react';
import { HeroSection } from '../components';
import * as ROUTES from '../constants/routes';

export function HeroContainer() {
    return (
        <HeroSection>
            <HeroSection.TextWrapper>
                <HeroSection.TextBig>Rekrutacja do 3 sezonu otwarta!</HeroSection.TextBig>
                <HeroSection.Button>Zarejestruj Się</HeroSection.Button>
                <HeroSection.Text>Przejdź rekrutację i ścigaj się u nas!</HeroSection.Text>
            </HeroSection.TextWrapper>
        </HeroSection>
    );
}