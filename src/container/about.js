import React, { useState, useEffect } from 'react';
import { About } from "../components";
import aboutJson from '../constants/aboutUs.json';

export function AboutContainer() {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        const about = aboutJson.data;
        setAbout(about);
    }, [about]);
    return (
        <About>
            {
            about.map(aboutJson => {
                return (
                    <About.CardWrapper direction={aboutJson.direction}>

                        <About.TextWrapper>
                            <About.MainText>{aboutJson.Title}</About.MainText>
                            <About.Text>{aboutJson.Text}</About.Text>
                        </About.TextWrapper>

                        <About.Image image={aboutJson.Image}/>
                    </About.CardWrapper>
                );
            })
            }


        </About>
    );
}