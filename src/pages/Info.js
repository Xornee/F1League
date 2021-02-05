import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import {InfoContainer} from "../container/info";
import {HeaderContainer} from "../container/headerContainer";

export default function Home() {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={'Wiadomości'} Text={'Dowiedz się kim jestesmy, czym sie zajmujemy i czym dokladnie jest nasza liga'}/>
            <InfoContainer />
            <FooterContainer />
        </>
    );
}