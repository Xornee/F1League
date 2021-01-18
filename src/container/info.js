import React from 'react';
import { Info } from '../components';
import * as ROUTES from '../constants/routes';

export function InfoContainer({ children }) {
    return (
        <Info>
            <Info.Text>Wiadomosci</Info.Text>
        </Info>
    );
}