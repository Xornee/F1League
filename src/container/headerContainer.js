import React from "react";
import { Header } from '../components';

export function HeaderContainer({ Title, Text }) {
    return (
        <Header>
            <Header.TitleWrapper>
                <Header.MainTitle>{Title}</Header.MainTitle>
                <Header.TitleText>{Text}</Header.TitleText>
            </Header.TitleWrapper>
        </Header>
    );
}