import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper direction={'space-between'}>

                <Footer.ButtonWrapper color={"#3b5998"}  href={'https://www.facebook.com/IF1eL/'} target={'_blank'}>
                    <Footer.ButtonIcon src={'./images/discord.png'} bgColor={"#0e1f56"} size={'60px'}/>
                    <Footer.Button>Facebook</Footer.Button>
                </Footer.ButtonWrapper>

                <Footer.ButtonWrapper color={"#19171C"}  href={'https://www.youtube.com/channel/UC0GPwkUNhswK4SbV7hAZf6w'} target={'_blank'}>
                    <Footer.ButtonIcon src={'./images/TwitchGlitchWhite.svg'} bgColor={"#6441A4"} size={'40px'}/>
                    <Footer.Button>Twitch</Footer.Button>
                </Footer.ButtonWrapper>

                <Footer.ButtonWrapper color={"#2C2F33"}  href={'https://discord.gg/MamdhVNJT6'} target={'_blank'}>
                    <Footer.ButtonIcon src={'./images/discord.png'} bgColor={"#827DDC"} size={'60px'}/>
                    <Footer.Button>Discord</Footer.Button>
                </Footer.ButtonWrapper>

            </Footer.Wrapper>
            <Footer.Wrapper direction={'center'}>
                <Footer.Text>2021 Stworzona przez <Footer.Link href={'www.linkedin.com/in/SzymonMytych880'} target={'_blank'}>Szymon Mytych</Footer.Link></Footer.Text>
            </Footer.Wrapper>
        </Footer>
    );
}