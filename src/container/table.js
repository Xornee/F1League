import React from 'react';
import { Table } from '../components';
import * as ROUTES from '../constants/routes';

export function TableContainer({ children }) {
    return (
        <Table>
            <Table.Title>Tabela IFL</Table.Title>
            <Table.Iframe src={"https://docs.google.com/spreadsheets/d/e/2PACX-1vTODv7igw2yonjxUur-kURwHxOldfVDRtM8H_2FGgN8i9C1Fgx_AyFQqCdR4LrSKqbTDbWRBd2uUv-i/pubhtml?widget=true&amp;headers=false%22%3E"} />
            <Table.Title>Tabela Sezon 2</Table.Title>
            <Table.Iframe src={"https://docs.google.com/spreadsheets/d/e/2PACX-1vR6SGAzApoFYWZean-KOq71EHbjwBD591v2RIU0kaxlt9UncGT3FOpLizzmQ65sgSKge7M8GDciV6dx/pubhtml?widget=true&amp;headers=false%22%3E"} />
        </Table>
    );
}