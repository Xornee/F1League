import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper direction={'space-between'}>
                <Footer.Button color={"#3b5998"} bgColor={"#0e1f56"} href={'https://www.facebook.com/IF1eL/'} target={'_blank'}>Facebook</Footer.Button>
                <Footer.Button color={"#19171C"} bgColor={"#6441A4"} href={'https://www.youtube.com/channel/UC0GPwkUNhswK4SbV7hAZf6w'} target={'_blank'}>Twitch</Footer.Button>
                <Footer.Button color={"#2C2F33"} bgColor={"#7289DA"} href={'https://discord.gg/MamdhVNJT6'} target={'_blank'}>Discord</Footer.Button>
            </Footer.Wrapper>
            <Footer.Wrapper direction={'center'}>
                <Footer.Text>2021 Created by Szymon Mytych</Footer.Text>
            </Footer.Wrapper>
        </Footer>
    );
}