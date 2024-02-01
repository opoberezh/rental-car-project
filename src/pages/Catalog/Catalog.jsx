import React from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import { Container, Block } from './ Catalog.styled';
import Filter from '../../components/Filter/Filter';

const Catalog = () => {
  return (
    <Container>
  
      <Block>
          <Filter/>
        <AdvertsList/>
        
      </Block>
   
    </Container>
  );
};

export default Catalog;
