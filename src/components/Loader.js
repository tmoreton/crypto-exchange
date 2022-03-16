import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <React.Fragment>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </React.Fragment>
  )
};

export default Loader;




