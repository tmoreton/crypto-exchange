import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Tablelist = ({ data }) => {
  console.log(Object.keys(data))
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Trust Score</th>
            <th>Trust Score Rank</th>
            <th>Year Established</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(exchange => {
              return (
                <tr key={exchange.id}>
                  <td><img src={exchange.image} alt={exchange.name} with='25px' height='25px' className='p-1'/>{exchange.name}</td>
                  <td>{exchange.country}</td>
                  <td>{exchange.trust_score}</td>
                  <td>{exchange.trust_score_rank}</td>
                  <td>{exchange.year_established}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </React.Fragment>
  )
};

export default Tablelist;
