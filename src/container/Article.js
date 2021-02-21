import React, { useState, useEffect } from 'react';
import {Article} from '../components';
import post from "../constants/info.js";
import {HeaderContainer} from "./headerContainer";

export function ArticleContainer({ match }) {
        const product = post.find((p) => p._id === match.params.id)
    console.log(match.params.id)
    console.log(product)
    return (
        <>
        <Article>
            <HeaderContainer Title={product.blogTitle} Text={'opis artykulu'}/>

            <Article.InfoWrapper>
                <Article.InfoA>Autor : {product.author}</Article.InfoA>
                <Article.InfoA>Kategoria : {product.blogCategory}</Article.InfoA>
                <Article.InfoA>Data : {product.postedOn}</Article.InfoA>
            </Article.InfoWrapper>
            <Article.MainTitle>{product.blogTitle}</Article.MainTitle>
            <Article.Text>{product.blogText}</Article.Text>
        </Article>
        </>
    );
}
