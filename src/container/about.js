import React, { useState, useEffect } from 'react';
import { About } from "../components";
import aboutJson from '../constants/aboutUs.json';
import * as ROUTES from '../constants/routes';

export function AboutContainer() {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        const about = aboutJson.data;
        setAbout(about);
    }, [about]);
    return (
        <About>

            <About.TitleWrapper>
                <About.MainTitle>O Nas</About.MainTitle>
                <About.TitleText>Dowiedz się kim jestesmy, czym sie zajmujemy i czym dokladnie jest nasza liga</About.TitleText>
            </About.TitleWrapper>
            {
            about.map(aboutJson => {
                return (
                    <About.CardWrapper direction={aboutJson.direction}>

                        <About.TextWrapper>
                            <About.MainText>{aboutJson.Title}</About.MainText>
                            <About.Text>{aboutJson.Text}</About.Text>
                        </About.TextWrapper>

                        <About.Image src={aboutJson.Image}/>
                    </About.CardWrapper>
                )
            })
            }


        </About>
    );
}