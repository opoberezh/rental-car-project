import AdvertsCard from '../AdvertsCard/AdvertsCard';
import { fetchAdverts } from 'components/redux/operations';
import { selectAdverts, selectIsLoading, selectError } from 'components/redux/selectors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListWrapper, MainContainer } from './AdvertsList.styled';
import { ButtonLoadMore } from './AdvertsList.styled';
import { Loader } from 'components/Loader/Loader';

const AdvertsList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts( page ));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  }



  if (isLoading && page === 1) {
    return <Loader />;
  }

  if (adverts.length === 0) {
    return <div>No adverts found.</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <MainContainer>
      <ListWrapper>
      {adverts.map((advert) => (
          <li key={advert.id}>
            <AdvertsCard item={advert} />
          </li>
        ))}
      </ListWrapper>
      
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
