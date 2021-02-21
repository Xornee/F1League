import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { RulesContainer } from "../container/rulesContainer";
import {HeaderContainer} from "../container/headerContainer";

export default function ThermsOfUse() {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={'Regulamin'} Text={'Dowiedz się kim jestesmy, czym sie zajmujemy i czym dokladnie jest nasza liga'}/>
            <RulesContainer />
            <FooterContainer />
        </>
    );
}