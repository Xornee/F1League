import React from 'react';
import { HeroSection } from '../components';
export function HeroContainer() {
    return (
        <HeroSection image={'/images/main.png'}>
            <HeroSection.TextWrapper>
                <HeroSection.TextBig>Rekrutacja do 3 sezonu nadal trwa!</HeroSection.TextBig>
                <HeroSection.Button href={'https://docs.google.com/forms/d/e/1FAIpQLSff6wwmqOMGugRgV59iivgfc1gFEsHRkXF4gG9s8bsi6w06wQ/viewform'} target={'_blank'}>Rejestracja</HeroSection.Button>
                <HeroSection.Text>Przejdz rekrutacje i scigaj sie u nas!</HeroSection.Text>
            </HeroSection.TextWrapper>
        </HeroSection>
    );
}