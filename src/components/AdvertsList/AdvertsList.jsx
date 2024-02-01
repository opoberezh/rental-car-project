import AdvertsCard from '../AdvertsCard/AdvertsCard';
import { fetchAdverts } from 'components/redux/operations';
import { selectAdverts, selectFilter, selectIsLoading, selectError } from 'components/redux/selectors';  // Import selectIsLoading and selectError
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListWrapper, MainContainer } from './AdvertsList.styled';

import { ButtonLoadMore } from './AdvertsList.styled';
import { Loader } from 'components/Loader/Loader';

const AdvertsList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [page, setPage] = useState(1);
  const filtered = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchAdverts(page, filtered));
  }, [dispatch, page, filtered]);

  useEffect(() => {
    console.log('Filtered Adverts:', adverts);
  }, [adverts]);

  if (isLoading) {
    return <Loader />;
  }

  if (adverts.length === 0) {
    return <div>No adverts found.</div>;
  }

  if (error) {
    return <p>{error}</p>;
  };
  
  return (
    <MainContainer >
      <ListWrapper>
        {adverts.map((advert) => (
          <li key={advert.id}>
            <AdvertsCard item={advert} />
          </li>
        ))}
      </ListWrapper>
      {page !== 3 && (
        <ButtonLoadMore
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more
        </ButtonLoadMore>
      )}{' '}
    </MainContainer>
  );
};

export default AdvertsList;
