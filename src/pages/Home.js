import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { getExchanges } from '../redux/actions';
import Tablelist from '../components/Tablelist';

const Home = () => {
  const dispatch = useDispatch()
  const exchangeList = useSelector(state => state.crypto.exchanges)

  useEffect(() => {
    // Get a list of the top 10 exchanges based on trust rank
    dispatch(getExchanges())
  }, [dispatch])

  return (
    <React.Fragment>
      <Helmet title='Home Page' />
      <Container fluid className='p-0'>
        <Row className='m-5 justify-content-md-center overflow-auto'>
          <Col md={10}>
            <Tablelist data={exchangeList}/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
};

Home.propTypes = {
  exchangeList: PropTypes.array,
  getExchanges: PropTypes.func
}

export default Home;
