import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { ArchiveContainer } from "../container/archive";
import {HeaderContainer} from "../container/headerContainer";

export default function Archive() {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={'Archiwum'} Text={'Dowiedz się kim jestesmy, czym sie zajmujemy i czym dokladnie jest nasza liga'}/>
            <ArchiveContainer />
            <FooterContainer />
        </>
    );
}