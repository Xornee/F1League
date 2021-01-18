import React from 'react';
import { Info } from '../components';
import * as ROUTES from '../constants/routes';

export function AboutContainer({ children }) {
    return (
        <Info>
            <Info.Text>O Nas</Info.Text>
        </Info>
    );
}