import React from 'react';
import { Archive } from '../components';
import * as ROUTES from '../constants/routes';

export function ArchiveContainer({ children }) {
    return (
        <Archive>

            <Archive.Title>Archiwum</Archive.Title>
            <Archive.Text>Wszystkie zapisy znajduja sie na naszym kanale Youtube</Archive.Text>

            <Archive.Wrapper>
                <Archive.LinkWrapper href={'https://www.youtube.com/playlist?list=PLnyhahC3DR6XQcf3q9tqBcAdQy7lIb9nU'} target={"_blank"}>
                    <Archive.Text>Zapisy sezonu 1</Archive.Text>
                    <Archive.Image />
                </Archive.LinkWrapper>
                <Archive.LinkWrapper href={'https://www.youtube.com/playlist?list=PLnyhahC3DR6UiDG-RUv7Wm4MFGU1sYwes'} target={"_blank"}>
                    <Archive.Text>Zapisy sezonu 2</Archive.Text>
                    <Archive.Image />
                </Archive.LinkWrapper>
            </Archive.Wrapper>
        </Archive>
    );
}