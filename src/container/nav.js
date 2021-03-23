import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/all";
import { IconContext } from "react-icons";
import { Nav } from '../components';

import image from "../utils/main-logo.png"

export function NavContainer() {
    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <Nav>
            <Nav.Logo src={image} />
            <Nav.SmallNavButton onClick={handleClick}>
                <IconContext.Provider value={{ size: "2rem"}}>
                    {click ? <FaTimes /> : <FaBars />}
                </IconContext.Provider>
            </Nav.SmallNavButton>


            <Nav.NavWrapper click={click}>
                <Nav.LinkA to="/">International F1 League</Nav.LinkA>
                <Nav.LinkWrapper>
                    <Nav.LinkA to="/Info" onClick={handleClick}>Aktualności</Nav.LinkA>
                    <Nav.Dropdown>
                        <Nav.LinkA to="/Sezon3" onClick={handleClick}>Liga</Nav.LinkA>
                        <Nav.DropElements>
                            <Nav.LinkA to="/Sezon1" onClick={handleClick}>Sezon1</Nav.LinkA>
                            <Nav.LinkA to="/Sezon2" onClick={handleClick}>Sezon2</Nav.LinkA>
                            <Nav.LinkA to="/Sezon3" onClick={handleClick}>Sezon3</Nav.LinkA>
                        </Nav.DropElements>
                    </Nav.Dropdown>
                    <Nav.LinkA to="/Archiwum" onClick={handleClick}>Archiwum</Nav.LinkA>
                    <Nav.LinkA to="/O-Nas" onClick={handleClick}>O nas</Nav.LinkA>
                    <Nav.LinkA to="/Regulamin" onClick={handleClick}>Regulamin</Nav.LinkA>
                    <Nav.LinkA to="/Partnerzy" onClick={handleClick}>Partnerzy</Nav.LinkA>
                </Nav.LinkWrapper>
            </Nav.NavWrapper>

        </Nav>
    );
}