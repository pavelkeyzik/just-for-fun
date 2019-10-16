import React from 'react';
import { Table } from 'reactstrap';

import './ContributorsTable.css';

export function ContributorsTable() {
  return (
    <Table className="ContributorsTable__table">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>GitHub</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>pavelkeyzik </td>
          <td>
            {' '}
            <a href="https://github.com/pavelkeyzik">
              {' '}
              https://github.com/pavelkeyzik
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Eagle732</td>
          <td>
            {' '}
            <a href="https://github.com/Eagle732">
              {' '}
              https://github.com/Eagle732
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>arturoalviar</td>
          <td>
            {' '}
            <a href="https://github.com/arturoalviar">
              {' '}
              https://github.com/arturoalviar
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>albertmolodec</td>
          <td>
            {' '}
            <a href="https://github.com/albertmolodec">
              {' '}
              https://github.com/albertmolodec
            </a>
          </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>fllprbt</td>
          <td>
            {' '}
            <a href="https://github.com/fllprbt"> https://github.com/fllprbt</a>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
