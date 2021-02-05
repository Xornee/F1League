import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/all";
import { IconContext } from "react-icons";
import { Nav } from '../components';

import image from "../utils/main-logo.png"
//import * as ROUTES from '../constants/routes';

export function NavContainer() {
    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <Nav>
            <Nav.SmallNavButton onClick={handleClick}>
                <IconContext.Provider value={{ size: "2rem"}}>
                    {click ? <FaTimes /> : <FaBars />}
                </IconContext.Provider>
            </Nav.SmallNavButton>

            <Nav.LinkA to="/F1League/"><Nav.Logo src={image}></Nav.Logo></Nav.LinkA>
            <Nav.NavWrapper click={click}>
                <Nav.LinkWrapper>
                    <Nav.LinkA to="/F1League/" onClick={handleClick}>Start</Nav.LinkA>
                    <Nav.LinkA to="/F1League/Info" onClick={handleClick}>Wiadomości</Nav.LinkA>
                    <Nav.Dropdown>
                        <Nav.LinkA to="/F1League/Sezon2" onClick={handleClick}>Liga</Nav.LinkA>
                        <Nav.DropElements>
                            <Nav.LinkA to="/F1League/Sezon1" onClick={handleClick}>Sezon1</Nav.LinkA>
                            <Nav.LinkA to="/F1League/Sezon2" onClick={handleClick}>Sezon2</Nav.LinkA>
                        </Nav.DropElements>
                    </Nav.Dropdown>
                </Nav.LinkWrapper>

                <Nav.LinkWrapper>
                    <Nav.LinkA to="/F1League/Archiwum" onClick={handleClick}>Archiwum</Nav.LinkA>
                    <Nav.LinkA to="/F1League/O-Nas" onClick={handleClick}>O nas</Nav.LinkA>
                    <Nav.LinkA to="/F1League/Regulamin" onClick={handleClick}>Regulamin</Nav.LinkA>
                </Nav.LinkWrapper>
            </Nav.NavWrapper>

        </Nav>
    );
}