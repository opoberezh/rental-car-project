import React, { useState } from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import { Container, Block } from './ Catalog.styled';
import Filter from '../../components/Filter/Filter';

const Catalog = () => {
  const [filters, setFilters] = useState (null);

  const handleFilterChange = newFilters => {
    console.log('New filters:', newFilters);
    setFilters(newFilters);
  };


  return (
    <Container>
  
      <Block>
      <Filter onFilterChange={handleFilterChange} />
      <AdvertsList filters={filters} />
        
      </Block>
   
    </Container>
  );
};

export default Catalog;
