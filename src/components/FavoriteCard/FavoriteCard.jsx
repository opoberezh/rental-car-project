import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../redux/favoritesSlice';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { selectFavorites } from 'components/redux/selectors';




const FavoriteCard = ({ card }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the current item is in the favorites list
    setIsFavorite((prevIsFavorite) =>
    favorites.some((fav) => fav.id === card.id)
  );
}, [favorites, card.id, isFavorite]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(card.id));
    } else {
      dispatch(addToFavorite(card));
    }
  };

  return (
    <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
      <button
        onClick={handleToggleFavorite}
        style={{ background: 'transparent', border: 'none' }}
      >
        {isFavorite ? <IoHeartSharp style={{ fill: '#3470FF', width: '18px', height: '18px' }} /> : <IoHeartOutline style={{ stroke: '#ffffff', width: '18px', height: '18px' }}/>}
      </button>
    </div>
  );
};

export default FavoriteCard;
