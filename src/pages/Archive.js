import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { ArticleContainer } from "../container/archive";

export default function Archive() {
    return (
        <>
            <NavContainer />
            <ArchiveContainer />
            <FooterContainer />
        </>
    );
}