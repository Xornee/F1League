import React from 'react';
import { Table } from '../components';
import * as ROUTES from '../constants/routes';

export function TableContainer({src, title}) {
    return (
        <Table>
            <Table.Title>{title}</Table.Title>
            <Table.Iframe src={src} />
        </Table>
    );
}