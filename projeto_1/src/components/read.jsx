import React from 'react';
import { Table } from 'semantic-ui-react'
export default function Read() {
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Apelido</Table.HeaderCell>
                        <Table.HeaderCell>Nucleo</Table.HeaderCell>
                        <Table.HeaderCell>Diretoria</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell> Teste</Table.Cell>
                        <Table.Cell>June 22, 2022</Table.Cell>
                        <Table.Cell>teste.teste@gmail.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

