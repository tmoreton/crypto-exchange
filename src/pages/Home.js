import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { getExchanges } from '../redux/actions';
import Tablelist from '../components/Tablelist';

const Home = () => {
  const dispatch = useDispatch()
  const exchangeList = useSelector(state => state.crypto)

  useEffect(() => {
    dispatch(getExchanges())
  }, [dispatch])

  return (
    <React.Fragment>
      <Helmet title='Home Page' />
      <Container fluid className='p-0'>
        <Row className='p-5 justify-content-md-center'>
          <Col md={10}>
            <Tablelist data={exchangeList}/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
};

export default Home;
