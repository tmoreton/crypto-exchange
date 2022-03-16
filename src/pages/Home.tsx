import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import { getPing } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('searching...')
    dispatch(getPing())
  }, [dispatch])

  return (
    <React.Fragment>
      <Helmet title='Home Page' />
      <Container fluid className='p-0'>
        <h1 className='h3 mb-3'>Home Page</h1>
      </Container>
    </React.Fragment>
  )
};

export default Home;
