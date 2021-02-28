import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { RulesContainer } from "../container/rulesContainer";
import {HeaderContainer} from "../container/headerContainer";

export default function ThermsOfUse() {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={'Regulamin'} Text={'Regulamin naszej ligi. Każdy zawodnik musi go znać'}/>
            <RulesContainer />
            <FooterContainer />
        </>
    );
}