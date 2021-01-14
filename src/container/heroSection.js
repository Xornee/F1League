import React from 'react';
import { heroSection } from '../components';
import * as ROUTES from '../constants/routes';

export function HeroContainer({ children }) {
    return (
        <heroSection>
            <heroSection.Title>Ez</heroSection.Title>
        </heroSection>
    );
}