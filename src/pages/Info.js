import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import {InfoContainer} from "../container/info";
import {HeaderContainer} from "../container/headerContainer";

export default function Home() {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={'Wiadomości'} Text={'Najnowsze wiadomości ze świata naszej Ligi'}/>
            <InfoContainer Message={false}/>
            <FooterContainer />
        </>
    );
}