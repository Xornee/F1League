import React from 'react';
//import {  } from '../components';
import { HeroContainer } from '../container/heroSection';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";

export default function Home() {
    return (
    <>
        <NavContainer />
        <HeroContainer />
        <FooterContainer />
    </>
    );
}