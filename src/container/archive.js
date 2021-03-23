import React from 'react';
import { Archive } from '../components';

export function ArchiveContainer() {
    return (
        <Archive>
            <Archive.Text>Wszystkie zapisy znajduja sie na naszym kanale Youtube</Archive.Text>

            <Archive.Wrapper>
                <Archive.LinkWrapper href={'https://www.youtube.com/playlist?list=PLnyhahC3DR6XQcf3q9tqBcAdQy7lIb9nU'} target={"_blank"}>
                    <Archive.Text>Zapisy sezonu 1</Archive.Text>
                    <Archive.Image src={'/images/sezon1.png'}/>
                </Archive.LinkWrapper>
                <Archive.LinkWrapper href={'https://www.youtube.com/playlist?list=PLnyhahC3DR6UiDG-RUv7Wm4MFGU1sYwes'} target={"_blank"}>
                    <Archive.Text>Zapisy sezonu 2</Archive.Text>
                    <Archive.Image src={'/images/sezon2.png'}/>
                </Archive.LinkWrapper>
                <Archive.LinkWrapper href={'https://www.youtube.com/playlist?list=PLnyhahC3DR6UiDG-RUv7Wm4MFGU1sYwes'} target={"_blank"}>
                    <Archive.Text>Zapisy sezonu 3</Archive.Text>
                    <Archive.Image src={'/images/sezon3.png'}/>
                </Archive.LinkWrapper>
            </Archive.Wrapper>
        </Archive>
    );
}