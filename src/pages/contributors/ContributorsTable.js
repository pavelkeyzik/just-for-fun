import React from 'react';
import { Table } from 'reactstrap';

import './ContributorsTable.css';

export function ContributorsTable() {
    return (
        <Table className="ContributorsTable__table">
            <thead>
                <th>#</th>
                <th>Username</th>
                <th>GitHub</th>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>pavelkeyzik </td>
                    <td> <a href="https://github.com/pavelkeyzik"> https://github.com/pavelkeyzik</a></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Hritik Kumar </td>
                    <td> <a href="https://github.com/Eagle732"> https://github.com/Eagle732</a></td>
                </tr>
            </tbody>
        </Table>
    );
}
