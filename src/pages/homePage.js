import React from 'react';
import { HeroContainer } from '../container/heroSection';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";

export default function Home() {
    return (
    <>
        <NavContainer scrollBar={"15px"}/>
        <HeroContainer />
        <FooterContainer />
    </>
    );
}