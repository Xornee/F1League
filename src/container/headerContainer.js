import React from "react";
import { Header } from '../components';

export function HeaderContainer({ Title, Text }) {
    return (
        <Header>
            <Header.TitleWrapper image={'/images/main.png'}>
                <Header.MainTitle>{Title}</Header.MainTitle>
                <Header.TitleText>{Text}</Header.TitleText>
            </Header.TitleWrapper>
        </Header>
    );
}