import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { TableContainer } from "../container/table";
import {HeaderContainer} from "../container/headerContainer";

export default function Table({src, title}) {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={title} Text={'Dowiedz się kim jestesmy, czym sie zajmujemy i czym dokladnie jest nasza liga'}/>
            <TableContainer src={src} title={'Tabela'}/>
            <FooterContainer />
        </>
    );
}