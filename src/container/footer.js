import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper direction={'space-between'}>

                <Footer.ButtonWrapper color={"#19171C"}  href={'https://www.facebook.com/IF1eL/'} target={'_blank'}>
                    <Footer.ButtonIcon src={'./images/facebook.svg'} bgColor={"#3A5A98"} size={'60px'}/>
                    <Footer.Button>Facebook</Footer.Button>
                </Footer.ButtonWrapper>

                <Footer.ButtonWrapper color={"#19171C"}  href={'https://www.twitch.tv/internationalf1league'} target={'_blank'}>
                    <Footer.ButtonIcon src={'./images/TwitchGlitchWhite.svg'} bgColor={"#6441A4"} size={'40px'}/>
                    <Footer.Button>Twitch</Footer.Button>
                </Footer.ButtonWrapper>

                <Footer.ButtonWrapper color={"#19171C"}  href={'https://discord.gg/MamdhVNJT6'} target={'_blank'}>
                    <Footer.ButtonIcon src={'./images/discord.png'} bgColor={"#827DDC"} size={'60px'}/>
                    <Footer.Button>Discord</Footer.Button>
                </Footer.ButtonWrapper>

                <Footer.ButtonWrapper color={"#19171C"}  href={'https://www.instagram.com/internationalf1league_original/'} target={'_blank'}>
                    <Footer.ButtonIcon src={'./images/instagram.jpg'} bgColor={"#3A5A98"} size={'60px'}/>
                    <Footer.Button>Instagram</Footer.Button>
                </Footer.ButtonWrapper>

                <Footer.ButtonWrapper color={"#19171C"}  href={'https://www.youtube.com/channel/UC0GPwkUNhswK4SbV7hAZf6w'} target={'_blank'}>
                    <Footer.ButtonIcon src={'./images/youtube_social_square_white.png'} bgColor={"#3A5A98"} size={'60px'}/>
                    <Footer.Button>Youtube</Footer.Button>
                </Footer.ButtonWrapper>

            </Footer.Wrapper>
            <Footer.Wrapper direction={'center'}>
                <Footer.Text>2021 Stworzona przez <Footer.Link href={'https://www.linkedin.com/in/SzymonMytych880'} target={'_blank'}>Szymon Mytych</Footer.Link></Footer.Text>
            </Footer.Wrapper>
        </Footer>
    );
}