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
            <Article.MainTitle>{product.blogTitle}</Article.MainTitle>
            {
                product.blogText.map((paragraph) => {
                    return(
                        <Article.Text>{paragraph}</Article.Text>
                    )
                })
            }
            <Article.Image src={product.blogImage}></Article.Image>
            <Article.InfoWrapper>
                <Article.InfoA> Autor : {product.author}</Article.InfoA>
                <Article.InfoA> Kategoria : {product.blogCategory}</Article.InfoA>
                <Article.InfoA> Data : {product.postedOn}</Article.InfoA>
            </Article.InfoWrapper>
        </Article>
        </>
    );
}
