import {  useSelector } from 'react-redux';
import { selectTotalFavorites } from '../../components/redux/selectors';
import { FavSection, FavText, MessageWrapper } from './Favorite.styled';
import { FavoritesList } from '../../components/FavoriteList/FavoriteList';




const Favorite = () => {
  const totalFavorites = useSelector(selectTotalFavorites);

  return (
    <FavSection>
      {totalFavorites > 0 ? (
        <FavoritesList />
      ) : (
        <MessageWrapper >
          <FavText >
            There are no adverts yet
          </FavText>
        </MessageWrapper>
      )}
    </FavSection>
  );
};


export default Favorite;
