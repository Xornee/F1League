import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { ArchiveContainer } from "../container/archive";
import {HeaderContainer} from "../container/headerContainer";

export default function Archive() {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={'Archiwum'} Text={'Obejrzyj zapisy rozgrywek naszej ligi'}/>
            <ArchiveContainer />
            <FooterContainer />
        </>
    );
}