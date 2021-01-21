import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { ArticleContainer } from "../container/Article";

export default function Archive() {
    return (
        <>
            <NavContainer />
            <ArticleContainer />
            <FooterContainer />
        </>
    );
}