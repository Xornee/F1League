import React from 'react';
import { Nav } from '../components';
import {NavWrapper} from "../components/nav/styles/nav";
import image from "../utils/main-logo.png"
//import * as ROUTES from '../constants/routes';

export function NavContainer({ children }) {
    return (
        <Nav>
            <NavWrapper>
            <Nav.LinkWrapper>
                <Nav.Link>link1</Nav.Link>
                <Nav.Link>link2</Nav.Link>
                <Nav.Link>link3</Nav.Link>
            </Nav.LinkWrapper>
            <Nav.Logo src={image}></Nav.Logo>
            <Nav.LinkWrapper>
                <Nav.Link>link4</Nav.Link>
                <Nav.Link>link5</Nav.Link>
                <Nav.Link>link6</Nav.Link>
            </Nav.LinkWrapper>
            </NavWrapper>
        </Nav>
    );
}