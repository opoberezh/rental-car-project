import AdvertsCard from '../AdvertsCard/AdvertsCard';
import { fetchAdverts } from 'components/redux/operations';
import { selectAdverts, selectIsLoading, selectError } from 'components/redux/selectors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListWrapper, MainContainer } from './AdvertsList.styled';
import { ButtonLoadMore } from './AdvertsList.styled';
import { Loader } from 'components/Loader/Loader';

const AdvertsList = ({ filters }) => {
 console.log(filters)
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
 

  useEffect(() => {
    dispatch(fetchAdverts( page, filters ));
  }, [dispatch, page, filters]);

  const handleLoadMore = () => {
    setPage(page + 1);
  }



  if (isLoading && page === 1) {
    return <Loader />;
  }

  if (adverts.length === 0 && !isLoading) {
    return <div>No adverts found.</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }



  const filteredAdverts = adverts.filter(advert => {
    
    // Перевіряємо виробника
    if (filters.make && filters.make !== advert.make) {
      console.log(filters.make)
      return false;
    }
    // Перевіряємо ціну
    if (filters.filteredPrices && !filters.filteredPrices.some(price => parseFloat(price.value.replace('$', '')) === parseFloat(advert.rentalPrice.replace('$', '')))) {
      console.log(filters.filteredPrices)
      return false;
    }
    // Перевіряємо пробіг
    if ((filters.minMileage && advert.mileage < filters.minMileage) || (filters.maxMileage && advert.mileage > filters.maxMileage)) {
      console.log(filters.minMileage)
      console.log(filters.maxMileage)
      return false;
    }
   
    return true;
  });
console.log(filteredAdverts)


  return (
    <MainContainer>
     {filteredAdverts.length === 0 && !isLoading ? (
      <div style={ {fontSize:'2rem',
        color: '#1a1a1a'} }>No adverts found.</div>
    ) : (
      <ListWrapper>
        {filteredAdverts.map((advert) => (
          <li key={advert.id}>
            <AdvertsCard item={advert} />
          </li>
        ))}
      </ListWrapper>
    )}
    
        <ButtonLoadMore
          type="button"
          onClick={handleLoadMore}
        >
          Load more
        </ButtonLoadMore>
    
    </MainContainer>
  );
};

export default AdvertsList;
