import React from 'react';
import { Table } from '../components';

export function TableContainer({src, title}) {
    return (
        <Table>
            <Table.Title>{title}</Table.Title>
            <Table.Iframe src={src} />
        </Table>
    );
}