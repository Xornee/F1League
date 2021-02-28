import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { TableContainer } from "../container/table";
import {HeaderContainer} from "../container/headerContainer";

export default function Table({src, title}) {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={title} Text={'Zobacz Aktualne i archiwalne wyniki z ostatnich sezonów'}/>
            <TableContainer src={src} title={'Tabela'}/>
            <FooterContainer />
        </>
    );
}