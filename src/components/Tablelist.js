import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tablelist = ({ data }) => {
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
            data && data.map(exchange => {
              return (
                <tr key={exchange.id}>
                  <td><img src={exchange.image} alt={exchange.name} with='25px' height='25px' className='p-1'/>{exchange.name}</td>
                  <td>{exchange.country}</td>
                  <td>{exchange.trust_score}</td>
                  <td>{exchange.trust_score_rank}</td>
                  <td>{exchange.year_established}</td>
                  <td><Link to={`/exchanges/${exchange.id}`}>View More</Link></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </React.Fragment>
  )
};

Tablelist.propTypes = {
  data: PropTypes.array
}

Tablelist.defaultProps = {
  exchange: {
    id: 'coinbase',
    image: '',
    name: 'Coinbase',
    country: 'US',
    trust_score: 1,
    trust_score_rank: 10,
    year_established: 2015
  },
}

export default Tablelist;
