import React from 'react';
import { Nav } from '../components';
import image from "../utils/main-logo.png"
//import * as ROUTES from '../constants/routes';

export function NavContainer() {
    return (
        <Nav>
            <Nav.NavWrapper>
            <Nav.LinkWrapper direction={"row"}>
                <Nav.LinkA to="/F1League/">Start</Nav.LinkA>
                <Nav.LinkA to="/F1League/Info">Wiadomości</Nav.LinkA>
                <Nav.LinkA to="/F1League/Tabela">Liga</Nav.LinkA>
            </Nav.LinkWrapper>
                <Nav.LinkA to="/F1League/"><Nav.Logo src={image}></Nav.Logo></Nav.LinkA>
            <Nav.LinkWrapper direction={"row"}>
                <Nav.LinkA to="/F1League/Archiwum">Archiwum</Nav.LinkA>
                <Nav.LinkA to="/F1League/O-Nas">O nas</Nav.LinkA>
                <Nav.LinkA to="/F1League/Discord">Discord</Nav.LinkA>
            </Nav.LinkWrapper>
            </Nav.NavWrapper>
        </Nav>
    );
}