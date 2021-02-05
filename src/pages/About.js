import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import {AboutContainer} from "../container/about";
import {HeaderContainer} from "../container/headerContainer";

export default function Home() {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={'O Nas'} Text={'Dowiedz się kim jestesmy, czym sie zajmujemy i czym dokladnie jest nasza liga'}/>
            <AboutContainer />
            <FooterContainer />
        </>
    );
}