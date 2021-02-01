import React from 'react';
import { Archive } from '../components';
import * as ROUTES from '../constants/routes';

export function ArchiveContainer({ children }) {
    return (
        <Archive>
            <Archive.Title>Archiwum</Archive.Title>
            <Archive.Text>Wszystkie zapisy znajduja sie na naszym kanale Youtube</Archive.Text>
        </Archive>
    );
}