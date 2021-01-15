import React from 'react';
import { Nav } from '../components';
import {NavWrapper} from "../components/nav/styles/nav";
import image from "../utils/main-logo.png"
//import * as ROUTES from '../constants/routes';

export function NavContainer({ children }) {
    return (
        <Nav>
            <NavWrapper>
            <Nav.LinkWrapper direction={"row-reverse"}>
                <Nav.Link>Start</Nav.Link>
                <Nav.Link>Wiadomości</Nav.Link>
                <Nav.Link>Ligi</Nav.Link>
            </Nav.LinkWrapper>
            <Nav.Logo src={image}></Nav.Logo>
            <Nav.LinkWrapper direction={"row"}>
                <Nav.Link>Archiwum</Nav.Link>
                <Nav.Link>O nas</Nav.Link>
                <Nav.Link>Discord</Nav.Link>
            </Nav.LinkWrapper>
            </NavWrapper>
        </Nav>
    );
}