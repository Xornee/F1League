import React from 'react';
import { HeroSection } from '../components';
import * as ROUTES from '../constants/routes';

export function HeroContainer() {
    return (
        <HeroSection>
            <HeroSection.TextWrapper>
                <HeroSection.TextBig>Główny Nagłówek na stronie</HeroSection.TextBig>
                <HeroSection.Button>Głowny Przycisk na stronie</HeroSection.Button>
                <HeroSection.Text>Tekst do uzupelnienia</HeroSection.Text>
            </HeroSection.TextWrapper>
        </HeroSection>
    );
}