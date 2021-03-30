import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import {HeaderContainer} from "../container/headerContainer";
import {DriverCardContainer} from "../container/DriverCard";

export default function DriversList() {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={'Nasi Kierowcy'} Text={'Lista kierowców w naszej lidze'}/>
            <DriverCardContainer />
            <FooterContainer />
        </>
    );
}