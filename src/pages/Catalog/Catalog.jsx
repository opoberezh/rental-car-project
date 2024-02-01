import React from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import { Container, Block } from './ Catalog.styled';

const Catalog = () => {
  return (
    <Container>
    
      <Block>
        <AdvertsList/>
        
      </Block>
   
    </Container>
  );
};

export default Catalog;
