import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getExchange } from '../redux/actions';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';

const Home = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const exchange = useSelector(state => state.crypto.exchange)

  useEffect(() => {
    dispatch(getExchange(id))
  }, [dispatch])

  return (
    <React.Fragment>
      <Helmet title='Home Page' />
      <Container fluid className='p-0'>
        <Row className='p-5 justify-content-md-center'>
          <Col md={10}>
            {
              exchange ?
              <Card className="text-center">
                <Card.Header><img src={exchange.image} alt={exchange.name} with='50px' height='50px' className='p-1'/></Card.Header>
                <Card.Body>
                  <Card.Title>{exchange.name}</Card.Title>
                  <Card.Text>
                    {exchange.country}
                  </Card.Text>
                  <Card.Text>
                    <b>Trust Score:</b> {exchange.trust_score} <br/>
                    <b>Trust Score Rank:</b> {exchange.trust_score_rank}
                  </Card.Text>
                  <a href={ exchange.url } target="_blank">
                    <Button variant="primary">Go to {exchange.name}</Button>
                  </a>
                </Card.Body>
                <Card.Footer className="text-muted">Established In {exchange.year_established}</Card.Footer>
              </Card>
              : <Loader />
            }
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
};

export default Home;
