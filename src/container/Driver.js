import React from 'react';
import {Driver} from "../components";
import {Table} from "../pages";
import {Route} from "react-router-dom";

export function DriverContainer() {
    return (
        <Driver>
            <Driver.InfoWrapper>
                <Driver.Nickname>Nickname</Driver.Nickname>
                <Driver.Text>Info 1 jakiestam</Driver.Text>
                <Driver.Text>Info 2</Driver.Text>
                <Driver.Text>Info 3 12545467</Driver.Text>
                <Driver.Text>Info 4 witama</Driver.Text>
            </Driver.InfoWrapper>
            <Driver.InfoWrapper>
                <Driver.Image src={'/.images/main.jpg'}/>
                <Driver.Description>
                    <Driver.DescriptionTitle>Opis</Driver.DescriptionTitle>
                    <Driver.DescriptionText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aspernatur at cupiditate, dolore, eum excepturi invento r
                    e ipsa libero minus,
                    obcaecati omnis pariatur quas quo reprehenderit sapiente sunt vero vitae! Lorem ipsum dolor sit amet, consectetur adipisici
                    ng elit. Animi assumenda corporis delectus dolor eligendi error et fuga fugiat harum illo inventore, laboriosam laborum mol
                    stias nobis officia provident quia saepe tenetur.lorem
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ea hic illo necessitatibus odio quas quasi, quia qui
                    busdam quisquam saepe sequi, sunt suscipit vero. Architecto cupiditate error et ipsa omnis.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis cum eius error iste numquam optio quidem rem
                    reprehenderit tenetur! Assumenda aut cumque ducimus magnam nihil nobis nostrum praesentium voluptas!
                    </Driver.DescriptionText>
                </Driver.Description>
            </Driver.InfoWrapper>
            <Driver.Iframe src={"https://docs.google.com/spreadsheets/d/e/2PACX-1vTODv7igw2yonjxUur-kURwHxOldfVDRtM8H_2FGgN8i9C1Fgx_AyFQqCdR4LrSKqbTDbWRBd2uUv-i/pubhtml?widget=true&amp;headers=false%22%3E"} />
        </Driver>
    );
}